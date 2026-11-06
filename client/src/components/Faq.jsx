import { useState } from 'react';
import { EMAIL, faqs } from '../data/content.js';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="faq-side">
          <span className="eyebrow rv">FAQ</span>
          <h2 className="h2 rv d1">Questions, answered.</h2>
          <p className="lead rv d2">Anything else? Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
        </div>
        <div className="rv d1">
          {faqs.map(([q, a], i) => (
            <div key={q} className={`qa${open === i ? ' open' : ''}`}>
              <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                {q}<span className="pm" />
              </button>
              <div className="ans"><div><p>{a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
