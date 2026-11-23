/**
 * marquee — seamless infinite ticker. content is duplicated so the
 * translateX(-50%) loop has no visible seam. pauses on hover.
 */
export default function Marquee({ items = [], sep = '✦', className = '' }) {
  const block = (
    <span className="marquee-group" aria-hidden={false}>
      {items.map((t, i) => (
        <span key={i} className="marquee-item">
          {t}
          <span className="marquee-sep">{sep}</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div className="marquee-track">
        {block}
        {block}
      </div>
    </div>
  );
}
