const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {CURRENT_YEAR} flourish — built with <span className="lime">react</span> &amp; caffeine</span>
      <a href="#top">back to top ↑</a>
    </footer>
  );
}
