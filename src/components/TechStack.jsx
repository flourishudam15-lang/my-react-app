import { techStack } from '../data/projects';

export default function TechStack() {
  return (
    <section className="tech" id="tech" data-reveal>
      <p className="section-label">the stack</p>
      <div className="tech-grid">
        {techStack.map((t, i) => (
          <div
            key={t.name}
            className={`tech-card ${t.span === 2 ? 'span-2' : ''} ${i % 2 === 0 ? 'lime' : 'pink'}`}
            data-reveal
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="name">{t.name}</div>
            <div className="desc">{t.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
