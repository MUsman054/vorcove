import { Arrow, Use } from './Icons.jsx';
import { images, reasons } from '../data/content.js';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="about-media rv">
          <div className="img"><img src={images.about} alt="A business team working together around a meeting table" loading="lazy" /></div>
        </div>
        <div className="about-copy">
          <span className="eyebrow rv">The idea</span>
          <h2 className="h2 rv d1">The revenue is already inside your business.</h2>
          <p className="lead rv d2">Most businesses already have what they need to grow: customers, data, a team and tools. The revenue is stuck in slow processes, manual work and data nobody acts on. We find it and build the systems that unlock it.</p>
          <ul className="checks rv d3">
            {reasons.map(([title, text]) => (
              <li key={title}><i><Use id="tick" /></i><span><b>{title}</b>{text}</span></li>
            ))}
          </ul>
          <a href="#process" className="btn btn-navy rv d3">See how we work <Arrow /></a>
        </div>
      </div>
    </section>
  );
}
