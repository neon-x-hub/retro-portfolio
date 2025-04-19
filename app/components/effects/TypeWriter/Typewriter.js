"use client";

import { useState, useEffect } from "react";
import './Typewriter.css'
export default function Typewriter  ({ texts, speed = 100, delay = 1000 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index % texts.length];

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, speed / 2);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), delay);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
    }
  }, [charIndex, isDeleting, index, texts, speed, delay]);

  return (
    <span className="text-nowrap">
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
};
