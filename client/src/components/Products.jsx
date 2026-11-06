import { useEffect, useRef, useState } from 'react';
import { Arrow, Use, glyphs } from './Icons.jsx';
import { products } from '../data/content.js';
import { getLenis, playVideo, reduceMotion, refreshScroll } from '../lib/motion.js';

// only one product video plays sound at a time
const SOUND_EVENT = 'vorcove:sound';
const isPhone = () => window.matchMedia('(max-width: 640px)').matches;
const clock = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

export default function Products() {
  const [active, setActive] = useState(products[0].id);
  const tabs = useRef([]);

  // links elsewhere on the page (#eventsmith, #leadsmith) open that product's tab
  useEffect(() => {
    const pick = id => { if (products.some(p => p.id === id)) setActive(id); };
    pick(window.location.hash.slice(1));
    const onClick = e => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (a) pick(a.getAttribute('href').slice(1));
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // the newly shown panel has layout now; let scroll effects re-measure
  useEffect(() => { requestAnimationFrame(refreshScroll); }, [active]);

  const onTabKey = (e, i) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (i + step + products.length) % products.length;
    setActive(products[next].id);
    tabs.current[next]?.focus();
  };

  return (
    <section className="products on-dark" id="products">
      <div className="wrap">
        <div className="prod-intro">
          <div>
            <span className="eyebrow rv">Our products</span>
            <h2 className="h2 rv d1">Revenue systems,<br />built for specific trades.</h2>
          </div>
        </div>

        <div className="prod-tabs rv d2" role="tablist" aria-label="Products">
          {products.map((p, i) => (
            <button
              key={p.id} id={p.id} ref={el => (tabs.current[i] = el)}
              type="button" role="tab" className="prod-tab"
              aria-selected={active === p.id} aria-controls={`${p.id}-panel`} tabIndex={active === p.id ? 0 : -1}
              onClick={() => setActive(p.id)} onKeyDown={e => onTabKey(e, i)}
            >
              <b>{p.name}</b>
            </button>
          ))}
        </div>

        {products.map(p => <Product key={p.id} p={p} active={active === p.id} />)}
      </div>
    </section>
  );
}

function Product({ p, active }) {
  const frame = useRef(null);
  const video = useRef(null);
  const userPaused = useRef(false);
  const seen = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // chapter i runs from its "at" to the next one's (the last one runs to p.end)
  const starts = p.features.map(f => f.at);
  const ends = [...starts.slice(1), p.end];
  const current = starts.reduce((cur, s, i) => (time >= s && time < ends[i] ? i : cur), -1);

  // autoplay muted once most of the video is on screen, from the start the first time;
  // phones get the poster and a play button instead (the interface is unreadable that small)
  useEffect(() => {
    const v = video.current;
    if (!active) { v.pause(); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (userPaused.current || reduceMotion || isPhone()) return;
        if (!seen.current) { seen.current = true; v.currentTime = 0; }
        playVideo(v);
      } else v.pause();
    }, { threshold: 0.6 });
    io.observe(frame.current);
    return () => io.disconnect();
  }, [active]);

  useEffect(() => {
    const v = video.current;
    const onOtherSound = e => { if (e.detail !== p.id) { v.muted = true; setMuted(true); } };
    window.addEventListener(SOUND_EVENT, onOtherSound);
    return () => window.removeEventListener(SOUND_EVENT, onOtherSound);
  }, [p.id]);

  const bringIntoView = () => {
    const r = frame.current.getBoundingClientRect();
    if (r.top >= 80 && r.bottom <= window.innerHeight) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(frame.current, { offset: -110 });
    else frame.current.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
  };

  const start = v => {
    userPaused.current = false;
    seen.current = true;
    const pr = v.play();
    if (pr) pr.catch(() => {});
  };

  // the visitor asked for it, so this plays with sound, from the start, even under reduced motion
  const watch = () => {
    const v = video.current;
    v.currentTime = 0;
    v.muted = false;
    setMuted(false);
    window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: p.id }));
    start(v);
    if (isPhone()) {
      const req = v.requestFullscreen || v.webkitRequestFullscreen || v.webkitEnterFullscreen;
      if (req) Promise.resolve(req.call(v)).then(() => screen.orientation?.lock?.('landscape')).catch(() => {});
    } else bringIntoView();
  };

  const seek = t => {
    const v = video.current;
    v.currentTime = t;
    start(v);
    bringIntoView();
  };

  const togglePlay = () => {
    const v = video.current;
    if (v.paused) start(v);
    else { userPaused.current = true; v.pause(); }
  };

  const toggleSound = () => {
    const v = video.current;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) {
      window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: p.id }));
      if (v.paused) start(v);
    }
  };

  const fullScreen = () => {
    const v = video.current;
    const req = v.requestFullscreen || v.webkitRequestFullscreen || v.webkitEnterFullscreen;
    if (req) req.call(v);
  };

  return (
    <article className="prod" id={`${p.id}-panel`} role="tabpanel" aria-labelledby={p.id} hidden={!active}>
      <div className="prod-head">
        <div>
          <div className="prod-badges"><span className="b1">{p.status}</span><span>{p.for}</span></div>
          <h3 className="prod-name">{p.name}</h3>
          <p className="prod-tagline">{p.tagline}</p>
          <p className="lead">{p.text}</p>
        </div>
        <div className="prod-actions">
          <a href={p.site} target="_blank" rel="noopener noreferrer" className="btn btn-mint">
            See it working <Use id="arrow-ne" />
          </a>
          <a href="#contact" className="btn btn-ghost">Book a demo <Arrow /></a>
        </div>
      </div>

      <div className="prod-body">
        <figure className="frame" data-zoom ref={frame}>
          <div className="screen">
            <video
              ref={video} muted playsInline loop preload="metadata" poster={p.poster}
              style={p.crop ? { transform: `scale(${p.crop})` } : undefined}
              aria-label={`${p.name} product walkthrough video`}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onLoadedMetadata={e => setDuration(e.currentTarget.duration || 0)}
              onTimeUpdate={e => setTime(e.currentTarget.currentTime)}
            >
              <source src={p.video} type="video/mp4" />
            </video>
            {!playing && (
              <button type="button" className="vplay" onClick={watch} aria-label={`Watch the ${p.name} demo`}>
                <span>{glyphs.play}</span>Watch the demo{duration ? ` · ${clock(duration)}` : ''}
              </button>
            )}
            <div className="vctrl">
              <button type="button" aria-label={playing ? 'Pause video' : 'Play video'} onClick={togglePlay}>
                {playing ? glyphs.pause : glyphs.play}<span>{playing ? 'Pause' : 'Play'}</span>
              </button>
              <button type="button" aria-label={muted ? 'Turn sound on' : 'Turn sound off'} onClick={toggleSound}>
                {muted ? glyphs.soundOff : glyphs.soundOn}<span>{muted ? 'Sound off' : 'Sound on'}</span>
              </button>
              <button type="button" aria-label="Watch full screen" onClick={fullScreen}>
                {glyphs.full}<span>Full screen</span>
              </button>
            </div>
          </div>
          <div className="vbar" aria-hidden="true">
            <i style={{ width: duration ? `${(time / duration) * 100}%` : 0 }} />
            {duration > 0 && starts.map(s => <b key={s} style={{ left: `${(s / duration) * 100}%` }} />)}
          </div>
          <figcaption className="frame-cap">
            <span>{p.name} walkthrough{duration ? ` · ${clock(duration)}` : ''}</span>
          </figcaption>
        </figure>

        <ol className="chapters" aria-label={`${p.name}: what it does`}>
          {p.features.map((f, i) => {
            const on = i === current;
            const fill = on ? Math.min(1, (time - starts[i]) / (ends[i] - starts[i])) : 0;
            return (
              <li key={f.title} className={on ? 'on' : undefined}>
                <button type="button" onClick={() => seek(f.at)} aria-current={on ? 'step' : undefined}>
                  <span className="n">0{i + 1}</span>
                  <span className="t"><b>{f.title}</b><span>{f.text}</span></span>
                  <i className="fill" style={{ transform: `scaleX(${fill})` }} />
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </article>
  );
}
