import { projects } from '../data/projects';
import ecommerceShowcase from '../assets/ecommerce-showcase.jpg';
import ecommerceMobile from '../assets/ecommerce-mobile.jpg';

/* map the image keys in projects.js → real imported assets */
const imgMap = {
  showcase: ecommerceShowcase,
  mobile: ecommerceMobile,
};

export default function Projects() {
  return (
    <section className="work" id="work" data-reveal>
      <div className="work-head">
        <h2>real work,<br />not mockups.</h2>
        <span className="count">02 / shipped</span>
      </div>

      <div className="work-grid">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className={`project ${p.accent === 'pink' ? 'pink' : ''}`}
            data-reveal
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {p.images.length > 0 ? (
              <div className="project-img">
                <img src={imgMap[p.images[0]]} alt={`${p.title} — screenshot`} />
              </div>
            ) : (
              /* projects without a screenshot get a terminal vibe */
              <div className="project-terminal">
                <div className="term-bar"><i /><i /><i /></div>
                <div className="term-line"><span className="lime">$</span> npm run dev</div>
                <div className="term-line">server on :3000 <span className="lime">✓</span></div>
                <div className="term-line"><span className="pink">→</span> submissions api ready</div>
                <div className="term-line"><span className="pink">→</span> grading workflow up</div>
                <div className="term-line"><span className="lime">→</span> live<span className="caret" /></div>
              </div>
            )}

            <div className="project-body">
              <span className="project-type">{p.type} · {p.year}</span>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-tagline">{p.tagline}</p>
              <p className="project-desc">{p.description}</p>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.links.live}>live ↗</a>
                <a href={p.links.code}>code ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
