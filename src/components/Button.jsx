import React from "react";
import "../styles/Button.css";

export default function HireButton({
  targetId = "contact",
  children = "Hire Me",
  onClick,
}) {
  const handleClick = (e) => {
    
    onClick?.(e);

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: if not found, update URL hash
      window.location.hash = `#${targetId}`;
    }
  };

  return (
    <button type="button" className="button" onClick={handleClick}>
      <span className="fold" />

      <div className="points_wrapper" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <i key={i} className="point" />
        ))}
      </div>

      <span className="inner">
       <svg
  className="icon"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2.5"
>
  <polyline points="16 18 22 12 16 6" />
  <polyline points="8 6 2 12 8 18" />
</svg>

        {children}
      </span>
    </button>
  );
}
