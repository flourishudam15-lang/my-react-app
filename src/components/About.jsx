export default function About() {
  return (
    <section className="about" id="about" data-reveal>
      <p className="section-label">about</p>
      <div className="about-grid">
        <p className="about-text">
          hey, i'm flourish — a <span className="hl">full-stack developer</span> with an advanced
          diploma in software engineering from aptech. i build <span className="pink">real
          products</span>, not demos: a live e-commerce store and an institutional academic portal.
          right now i also teach, which keeps me sharp and forces me to actually understand what i
          build instead of just shipping it.
        </p>
        <div className="currently">
          <div className="currently-item">
            <span className="lbl">currently building</span>
            <span className="val">a <span className="lime">dropshipping platform</span></span>
          </div>
          <div className="currently-item">
            <span className="lbl">currently learning</span>
            <span className="val">typescript &amp; next.js</span>
          </div>
          <div className="currently-item">
            <span className="lbl">currently teaching</span>
            <span className="val">at techterminal</span>
          </div>
          <div className="currently-item">
            <span className="lbl">currently open to</span>
            <span className="val"><span className="lime">remote roles worldwide</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
