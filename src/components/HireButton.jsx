import React, { useId, useMemo } from "react";
import "../styles/HireButton.css";

export default function HireButton({
  targetId = "contact",
  children = "Hire Me",
  onClick,
}) {
  const uid = useId();

 const particles = useMemo(() => {
  const lefts = [10, 30, 25, 44, 50, 75, 88, 58, 98, 65];
  const opac = [1, 0.7, 0.8, 0.6, 1, 0.5, 0.9, 0.8, 0.6, 1];
  const dur = [2.35, 2.5, 2.2, 2.05, 1.9, 1.5, 2.2, 2.25, 2.6, 2.5];
  const del = [0.2, 0.5, 0.1, 0, 0, 1.5, 0.2, 0.2, 0.1, 0.2];

  return Array.from({ length: 10 }).map((_, i) => ({
    key: `${uid}-p-${i}`,
    left: `${lefts[i]}%`,
    opacity: opac[i],
    duration: `${dur[i]}s`,
    delay: `${del[i]}s`,
    char: Math.random() > 0.5 ? "1" : "0",
  }));
}, [uid]);


  const handlePress = (e) => {
    onClick?.(e);

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.location.hash = `#${targetId}`;
  };

  return (
    <button type="button" className="ghbRoot" onClick={handlePress}>
      <span className="ghbSheen" aria-hidden="true" />
      <span className="ghbFold" aria-hidden="true" />
  <span className="ghbSparkField" aria-hidden="true">
    {particles.map((p) => (
      <i
        key={p.key}
        className="ghbSpark"
        style={{
          left: p.left,
          opacity: p.opacity,
          animationDuration: p.duration,
          animationDelay: p.delay,
        }}
      >
        {p.char}
      </i>
    ))}
  </span>


      <span className="ghbContent">
        <svg
          className="ghbMark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
        <span className="ghbText">{children}</span>
      </span>
    </button>
  );
}
