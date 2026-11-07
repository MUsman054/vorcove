import { useEffect, useRef, useState } from 'react';
import { steps } from '../data/content.js';

// desktop lays the steps out side by side; tablets and phones stack them
const SIDE_BY_SIDE = '(min-width: 961px)';

export default function Process() {
  const dots = useRef([]);
  const [last, setLast] = useState(-1);
  const [fill, setFill] = useState(0);
  const [across, setAcross] = useState(false);

  // the line fills step by step as the section scrolls into view:
  // across the row on desktop, down the column on smaller screens
  useEffect(() => {
    const mq = window.matchMedia(SIDE_BY_SIDE);
    const paint = () => {
      const ds = dots.current.filter(Boolean);
      if (!ds.length) return;
      const vh = window.innerHeight;
      const wide = mq.matches;
      const boxes = ds.map(d => d.getBoundingClientRect());
      let on = -1;
      if (wide) {
        const top = boxes[0].top;
        if (top < vh * 0.85) {
          const p = Math.min(1, (vh * 0.85 - top) / (vh * 0.35));
          on = Math.round(p * (ds.length - 1));
        }
        setFill(on >= 0 ? boxes[on].left - boxes[0].left : 0);
      } else {
        boxes.forEach((b, i) => { if (b.top < vh * 0.6) on = i; });
        setFill(on >= 0 ? Math.max(0, boxes[on].top - boxes[0].top) : 0);
      }
      setAcross(wide);
      setLast(on);
    };
    paint();
    window.addEventListener('scroll', paint, { passive: true });
    window.addEventListener('resize', paint);
    return () => { window.removeEventListener('scroll', paint); window.removeEventListener('resize', paint); };
  }, []);

  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="proc-head">
          <div>
            <span className="eyebrow rv">How we work</span>
            <h2 className="h2 rv d1">Four steps, measured in revenue.</h2>
          </div>
          <p className="lead rv d2">Every project starts with one conversation about where your revenue could grow.</p>
        </div>
        <div className="steps rv d2">
          <span className="fill" style={across ? { width: fill } : { height: fill }} />
          <ol>
            {steps.map((s, i) => (
              <li key={s.title} className={`step${i <= last ? ' on' : ''}`}>
                <span className="dot" ref={el => (dots.current[i] = el)}>0{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
