import { useEffect, useRef } from 'react';
import Magnetic from './Magnetic';
import Marquee from './Marquee';
import portrait from '../assets/developer-portrait.jpg';
import { techStack } from '../data/projects';

const techNames = techStack.map((t) => t.name);

export default function Hero() {
  const nameRef = useRef(null);

  /* scramble-decode the name on mount */
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = 'flourish';
      return;
    }
    const chars = 'abcdefghijklmnopqrstuvwxyz!<>-_\\/[]{}=+*^?#';
    const text = 'flourish';
    const per = 7;
    let frame = 0;
    const id = setInterval(() => {
      el.textContent = text
        .split('')
        .map((c, i) => (i < frame / per ? text[i] : chars[Math.floor(Math.random() * chars.length)]))
        .join('');
      frame++;
      if (frame >= text.length * per + per) {
        clearInterval(id);
        el.textContent = text;
      }
    }, 45);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div>
          <p className="hero-eyebrow">full-stack developer · mern</p>
          <h1 className="hero-name">
            <span ref={nameRef} data-hover>flourish</span>
            <span className="accent">.</span>
          </h1>
          <p className="hero-tagline">
            <span className="hl">i turn ideas into things that actually ship.</span> react on the
            front, node + mongo on the back, and a real dislike for half-finished work.
          </p>
          <div className="hero-actions">
            <Magnetic as="a" href="#work" strength={0.4}>
              <span className="btn btn-primary">see my work <span aria-hidden="true">↓</span></span>
            </Magnetic>
            <Magnetic as="a" href="#contact" strength={0.4}>
              <span className="btn btn-ghost">let's talk</span>
            </Magnetic>
          </div>
          <div className="hero-status">
            <span className="dot" /> open to work · remote worldwide
          </div>
        </div>

        <div className="hero-portrait">
          <div className="frame">
            <img src={portrait} alt="flourish — developer portrait" />
          </div>
          <span className="sticker">that's me ↑</span>
        </div>
      </div>

      <div className="hero-marquee">
        <Marquee items={techNames} />
      </div>
    </section>
  );
}
