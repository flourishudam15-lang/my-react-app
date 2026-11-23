import Magnetic from './Magnetic';

export default function Contact() {
  return (
    <section className="contact" id="contact" data-reveal>
      <p className="section-label" style={{ justifyContent: 'center' }}>let's talk</p>
      <h2>let's build<br /><span className="lime">something.</span></h2>
      <p className="contact-sub">
        got a role, a project, or just want to say hey? i reply fast — i'm actively looking for
        remote frontend / full-stack work.
      </p>

      <div className="contact-cta">
        <Magnetic as="a" href="mailto:contact.developer@outlook.com" strength={0.3}>
          <span className="email-btn">say hi →</span>
        </Magnetic>
      </div>

      <div className="contact-socials">
        <a href="#" target="_blank" rel="noreferrer">github ↗</a>
        <a href="#" target="_blank" rel="noreferrer">linkedin ↗</a>
        <a href="mailto:contact.developer@outlook.com">email</a>
      </div>

      <div className="contact-meta"><span className="dot" /> available worldwide · remote</div>
    </section>
  );
}
