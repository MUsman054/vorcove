import { timingSafeEqual } from 'node:crypto';
import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import Lead from '../models/Lead.js';

const router = Router();
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// at most 10 enquiries per visitor every 15 minutes
const submitLimit = rateLimit({ windowMs: 15 * 60 * 1000, limit: 10, standardHeaders: 'draft-7', legacyHeaders: false });

// slows down anyone guessing the admin token
const adminLimit = rateLimit({ windowMs: 15 * 60 * 1000, limit: 20, standardHeaders: 'draft-7', legacyHeaders: false });

// constant-time comparison, so response timing doesn't leak how much of the token matched
const sameSecret = (a, b) => {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
};

const clean = v => (typeof v === 'string' ? v.trim() : '');

router.post('/', submitLimit, async (req, res, next) => {
  try {
    const body = req.body || {};
    // hidden "website" field: real visitors leave it empty, bots fill it in
    if (clean(body.website)) return res.status(201).json({ ok: true });

    const lead = { business: clean(body.business), email: clean(body.email), message: clean(body.message) };
    const errors = {};
    if (!lead.business || lead.business.length > 120) errors.business = 'Please enter your business name.';
    if (!EMAIL.test(lead.email) || lead.email.length > 160) errors.email = 'Please enter a valid email address.';
    if (!lead.message || lead.message.length > 3000) errors.message = 'Please tell us a little about your goals.';
    if (Object.keys(errors).length) return res.status(400).json({ ok: false, errors });

    await Lead.create(lead);
    res.status(201).json({ ok: true });
  } catch (err) {
    next(err);
  }
});

// private list of enquiries, only when ADMIN_TOKEN is set
router.get('/', adminLimit, async (req, res, next) => {
  const token = process.env.ADMIN_TOKEN;
  if (!token) return res.status(404).json({ ok: false });
  if (!sameSecret(req.get('authorization') || '', `Bearer ${token}`)) return res.status(401).json({ ok: false });
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(200).lean();
    res.json({ ok: true, leads });
  } catch (err) {
    next(err);
  }
});

export default router;
