import { Fragment, useEffect, useRef } from 'react';
import { Arrow } from './Icons.jsx';
import { hero } from '../data/content.js';
import { playVideo } from '../lib/motion.js';

const Line = ({ parts }) => (
  <span className="ln"><span>{parts.map((p, i) => (typeof p === 'string' ? p : <em key={i}>{p.em}</em>))}</span></span>
);

export default function Hero() {
  const video = useRef(null);

  useEffect(() => { playVideo(video.current); }, []);

  return (
    <section className="hero" id="top">
      <div className="slide active">
        <video ref={video} muted loop playsInline preload="auto" poster={hero.poster} aria-hidden="true">
          <source src={hero.video} type="video/mp4" />
        </video>
        <div className="wrap slide-inner">
          <div className="slide-copy">
            <h1>{hero.lines.map((l, k) => <Fragment key={k}>{k > 0 && ' '}<Line parts={l} /></Fragment>)}</h1>
            <p>{hero.text}</p>
            <div className="actions">
              <a href={hero.primary.href} className="btn btn-mint">{hero.primary.label} <Arrow /></a>
              <a href={hero.secondary.href} className="btn btn-ghost">{hero.secondary.label}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
