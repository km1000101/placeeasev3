import React, { useEffect, useRef, useState } from 'react';

function getCenter(el) {
  if (!el) return { x: 0, y: 0 };
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2 + window.scrollX,
    y: rect.top + rect.height / 2 + window.scrollY,
  };
}

function getEdgePoint(from, to, toEl) {
  if (!toEl) return to;
  const rect = toEl.getBoundingClientRect();
  // Direction vector
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len === 0) return to;
  // Find intersection with button edge (ellipse approx)
  const rx = rect.width / 2;
  const ry = rect.height / 2;
  // Parametric intersection with ellipse
  const t = 1 - Math.min(1, Math.max(0, (rx * ry) / Math.sqrt((ry * dx) ** 2 + (rx * dy) ** 2)));
  return {
    x: to.x - dx * t,
    y: to.y - dy * t,
  };
}

const AnimatedArrow = ({ fromRef, toRef }) => {
  const [path, setPath] = useState('');
  const [length, setLength] = useState(0);
  const pathRef = useRef(null);

  useEffect(() => {
    function updateArrow() {
      const from = getCenter(fromRef.current);
      const toCenter = getCenter(toRef.current);
      const toEdge = getEdgePoint(from, toCenter, toRef.current);
      // Hand-drawn style: wavy cubic Bezier
      const c1 = { x: from.x + 120, y: from.y + 40 };
      const c2 = { x: toEdge.x - 120, y: toEdge.y - 40 };
      const d = `M${from.x},${from.y} C${c1.x},${c1.y} ${c2.x},${c2.y} ${toEdge.x},${toEdge.y}`;
      setPath(d);
      setTimeout(() => {
        if (pathRef.current) setLength(pathRef.current.getTotalLength());
      }, 50);
    }
    updateArrow();
    window.addEventListener('resize', updateArrow);
    window.addEventListener('scroll', updateArrow);
    return () => {
      window.removeEventListener('resize', updateArrow);
      window.removeEventListener('scroll', updateArrow);
    };
  }, [fromRef, toRef]);

  // Animate stroke as you scroll
  const [draw, setDraw] = useState(0);
  useEffect(() => {
    function onScroll() {
      if (!fromRef.current || !toRef.current) return;
      const from = getCenter(fromRef.current);
      const toCenter = getCenter(toRef.current);
      const toEdge = getEdgePoint(from, toCenter, toRef.current);
      const winH = window.innerHeight;
      const start = from.y;
      const end = toEdge.y;
      const scroll = window.scrollY + winH / 2;
      const percent = Math.min(1, Math.max(0, (scroll - start) / (end - start)));
      setDraw(percent);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [fromRef, toRef]);

  return (
    <svg style={{position:'fixed', left:0, top:0, width:'100vw', height:'100vh', pointerEvents:'none', zIndex:10}}>
      <path
        ref={pathRef}
        d={path}
        stroke="#fff"
        strokeWidth={5}
        fill="none"
        strokeDasharray="2, 14"
        strokeLinecap="round"
        style={{filter:'drop-shadow(0 0 8px #00ffc6)'}}
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeOpacity={1}
        strokeDashoffset={length - length * draw}
      />
      {/* Arrowhead */}
      {length > 0 && draw > 0.98 && (
        (() => {
          if (!pathRef.current) return null;
          const l = length;
          const end = pathRef.current.getPointAtLength(l);
          const before = pathRef.current.getPointAtLength(l - 1);
          const angle = Math.atan2(end.y - before.y, end.x - before.x) * 180 / Math.PI;
          return (
            <polygon
              points="0,0 18,8 0,16"
              fill="#fff"
              style={{
                transform: `translate(${end.x - 9}px,${end.y - 8}px) rotate(${angle}deg)`
              }}
            />
          );
        })()
      )}
    </svg>
  );
};

export default AnimatedArrow; 