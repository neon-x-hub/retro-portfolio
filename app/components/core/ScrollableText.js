import React, { useEffect, useRef, useState } from 'react';

export default function ScrollableText({ text, selected, step = 5, delay = 50 }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!selected) {
      clearInterval(intervalRef.current);
      setTranslateX(0);
      return;
    }

    const container = containerRef.current;
    const textEl = textRef.current;
    if (!container || !textEl) return;

    const containerWidth = container.offsetWidth;
    const textWidth = textEl.scrollWidth;
    const maxScroll = textWidth - containerWidth;

    clearInterval(intervalRef.current);
    let currentX = 0;

    intervalRef.current = setInterval(() => {
      currentX -= step;
      if (-currentX >= maxScroll) {
        clearInterval(intervalRef.current);
      } else {
        setTranslateX(currentX);
      }
    }, delay);

    return () => clearInterval(intervalRef.current);
  }, [selected, text, step, delay]);

  return (
    <div
      className="w-full overflow-hidden whitespace-nowrap relative flex justify-items-start"
      ref={containerRef}
      style={{ textOverflow: 'ellipsis' }}
    >
      <div
        ref={textRef}
        className="inline-block"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: 'none', // disables smooth animation
        }}
      >
        {text}
      </div>
    </div>
  );
}
