// All website copy in one place, so text changes never touch the components.

const px = (id, w = 1400) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const EMAIL = 'hello@vorcove.com';

// hero: lines are lists of plain strings and { em } highlights
export const hero = {
  lines: [['We build systems'], ['that fix ', { em: 'lost revenue.' }]],
  text: 'Vorcove is a software and AI studio. We find where your business is losing time, customers and money, then build the systems that win them back, on top of the tools you already use.',
  primary: { label: 'Book a business review', href: '#contact' },
  secondary: { label: 'Explore services', href: '#services' },
  video: 'https://videos.pexels.com/video-files/853822/853822-hd_1920_1080_25fps.mp4',
  poster: 'https://images.pexels.com/videos/853822/free-video-853822.jpg?auto=compress&w=1600'
};

export const stats = [
  { value: 24, unit: 'hrs', label: 'to reply to every enquiry' },
  { value: 2, unit: 'weeks', label: 'to a working first version' },
  { value: 0, label: 'tools you have to replace' },
  { value: 100, unit: '%', label: 'of the code and data owned by you' }
];

export const services = [
  { title: 'Automation', icon: 'automation', short: 'Removes repetitive manual work so the same people handle more business.', text: 'Removes the repetitive manual work that slows your team down, so the same people handle more business.', img: px(6804068), tags: ['Invoices', 'Order entry', 'Follow-ups'] },
  { title: 'AI agents', icon: 'ai', short: 'Agents that read documents, draft replies and handle routine requests.', text: 'AI agents inside your existing workflows that read documents, draft replies and handle routine requests.', img: px(12899153, 1000) },
  { title: 'Data & revenue insights', icon: 'data', short: 'Reports and alerts that show where money is made and lost.', text: 'Turns the data sitting in your tools into reports and alerts that show where money is made and lost.', img: px(577210, 1000) },
  { title: 'Custom software', icon: 'wrench', short: "The software you need when off-the-shelf tools don't fit.", text: "Builds the software your business needs when off-the-shelf tools don't fit.", img: px(12899191, 1000) }
];

export const industries = [
  { title: 'Manufacturing & fabrication', icon: 'factory', short: 'Quote intake, job requests and follow-up.', text: 'Quote intake, complete job requests and follow-up on every quote, so the shop floor stays busy.', img: px(4400533), alt: 'A welder working with sparks in a metal workshop' },
  { title: 'Event & party rental', icon: 'tent', short: 'Inquiries to quotes, followed up until booked.', text: 'Inquiries turned into priced quotes from your own catalog and stock, with follow-up until they book.', img: px(2788488), alt: 'Round tables and chairs with linens set up for an outdoor evening reception' },
  { title: 'Wholesale & distribution', icon: 'box', short: 'Orders and reorders without manual entry.', text: 'Orders, stock and reorders flowing into your systems without manual entry.', img: px(4487383), alt: 'Workers carrying parcels down a warehouse aisle' },
  { title: 'Professional services', icon: 'briefcase', short: 'Less admin, faster replies, clear numbers.', text: 'Less admin, faster replies to enquiries and clear numbers on where money is made.', img: px(5668492), alt: 'Professionals discussing a plan at an office table' }
];

// "at" is where each feature's step starts in the walkthrough video (seconds); the list doubles as its chapters
export const products = [
  {
    id: 'leadsmith',
    name: 'Leadsmith',
    for: 'Metal fabricators',
    menuTag: 'Quote follow-up · Metal fabrication',
    menuText: 'Quote intake and follow-up. Quotes it, chases it, wins it.',
    status: 'Quote follow-up',
    tagline: 'Quotes it. Chases it. Wins it.',
    text: 'Quote intake and follow-up for metal fabricators. Turns photo and sketch inquiries into complete job requests and follows up on every quote automatically.',
    features: [
      { title: 'Reads every message', text: 'Website forms, emails and phone notes, including photos and sketches.', at: 12 },
      { title: 'Writes the reply', text: "Asks only for what's missing, ready for you to approve and send.", at: 18 },
      { title: 'Quotes it and chases it', text: 'Check-ins go out on schedule until the customer replies.', at: 23 },
      { title: 'Shows the money', text: 'The value of every open quote, in plain sight.', at: 30 }
    ],
    end: 35,
    // the recording has black bars baked in top and bottom; this zoom crops them out
    crop: 1.09,
    site: 'https://leadsmith.vorcove.com',
    video: '/media/leadsmith.mp4',
    poster: '/media/leadsmith-poster.jpg'
  },
  {
    id: 'eventsmith',
    name: 'EventSmith',
    for: 'Event rental businesses',
    menuTag: 'AI quoting · Event rental',
    menuText: 'Inquiry in. Quote out. Quotes built from your catalog and stock.',
    status: 'AI quoting',
    tagline: 'Inquiry in. Quote out.',
    text: 'AI quoting for event rental businesses. EventSmith reads each inquiry, builds the quote from your own catalog and stock, and follows up for you.',
    features: [
      { title: 'Reads the inquiry', text: 'Picks out the date, venue, guest count and what the customer needs.', at: 4 },
      { title: 'Builds the quote', text: 'From your own catalog and live stock availability.', at: 9 },
      { title: 'Waits for your approval', text: 'Nothing goes out until you approve it.', at: 14 },
      { title: 'Follows up for you', text: 'Scheduled follow-ups on every open quote.', at: 18 },
      { title: "Shows what you're missing", text: 'Insights on lost demand, pricing signals and repeat events.', at: 22 }
    ],
    end: 29,
    site: 'https://eventsmith.vercel.app',
    video: '/media/eventsmith.mp4',
    poster: '/media/eventsmith-poster-quote.jpg'
  }
];

export const steps = [
  { title: 'Business review', text: 'We study your current setup and find where revenue is lost or capped.' },
  { title: 'Plan', text: 'You get a short list of fixes, ranked by revenue impact. Your project is scoped from it.' },
  { title: 'Build', text: 'We put them in place on top of what you already use: a working first version in about two weeks, for a one-time build fee.' },
  { title: 'Measure & improve', text: 'We track the impact and keep improving it. Ongoing support is an optional monthly plan.' }
];

export const reasons = [
  ['No rip-and-replace', 'We work with your current systems.'],
  ['Measured by revenue', 'Success means more money, not more features.'],
  ['You own everything', 'The code, the data and the IP are all yours.'],
  ['Direct access', 'You work directly with the people building your system.']
];

export const faqs = [
  ['Do we need to change our current software?', 'No. We build on top of the tools you already use.'],
  ['Who do you work with?', 'Businesses that already have customers, a team and tools in place, and want more revenue from them.'],
  ['How soon do we see results?', "You'll have a working first version within two weeks, and impact is measured from launch."],
  ['How is pricing structured?', 'Each project is scoped after the business review: a one-time build fee, with an optional monthly plan for support and improvements.'],
  ['Who owns what you build?', 'You do. All code, data and IP are transferred to your business.']
];

export const images = {
  about: px(1181370),
  menuLeadsmith: px(4400533, 700),
  menuIndustries: px(8377802, 700)
};
