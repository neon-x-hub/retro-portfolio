"use client";

import { useState, useEffect } from "react";

export default function NavigateButton({
  children,
  prompt,
  onNavigate,
  disabled = false,
  showLoadingAnimation = true,
  autoDisable = true,
}) {
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    let interval;
    if (loading && showLoadingAnimation) {
      interval = setInterval(() => {
        setDots((prevDots) => (prevDots.length === 3 ? "." : prevDots + "."));
      }, 300);
    } else {
      setDots("");
    }

    return () => clearInterval(interval);
  }, [loading, showLoadingAnimation]);

  const handleClick = async () => {
    if (autoDisable) setLoading(true);

    try {
      const result = onNavigate?.();
      if (result instanceof Promise) {
        await result;
      }
    } finally {
      if (autoDisable) setLoading(false);
    }
  };

  return (
    <button
      type="button"
      className="nes-btn flex-1 h-16 font-bold !text-[4vw]"
      onClick={handleClick}
      disabled={autoDisable ? loading || disabled : disabled}
    >
      {autoDisable && loading && showLoadingAnimation ? `Loading${dots}` : children}
    </button>
  );
}
