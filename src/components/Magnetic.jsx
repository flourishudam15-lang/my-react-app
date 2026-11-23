import { useRef } from 'react';

/**
 * magnetic — wraps a child and pulls it toward the cursor on hover.
 * use it around buttons / links for that sticky, playful feel.
 */
export default function Magnetic({ children, strength = 0.35, as = 'span', ...props }) {
  const ref = useRef(null);
  const Tag = as;

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <Tag
      ref={ref}
      className="magnetic"
      onMouseMove={onMove}
      onMouseLeave={reset}
      {...props}
    >
      {children}
    </Tag>
  );
}
