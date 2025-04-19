"use client";

import { useState, useEffect, useRef } from "react";

export default function QuizPrompt({ onDone }) {
  const lines = [
    "> Loading PROFILE_QUIZ.BIN",
    "> Initiating Compatibility Assessment...",
    "> Can you guess my favorite things?",
    "> PRESS START to continue..."
  ];

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);
  const charIndexRef = useRef(0);

  // Handle visibility (trigger typewriter on scroll into view)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Typewriter effect logic
  useEffect(() => {
    if (!isVisible || currentLineIndex >= lines.length) return;

    const currentText = lines[currentLineIndex];
    let timeoutId;

    const typeNextChar = () => {
      if (charIndexRef.current < currentText.length) {
        setCurrentLine(currentText.substring(0, charIndexRef.current + 1));
        charIndexRef.current++;
        timeoutId = setTimeout(typeNextChar, 80);
      } else {
        // Line complete
        setDisplayedLines((prev) => [...prev, currentText]);
        setCurrentLine("");
        charIndexRef.current = 0;

        // Next line after a short pause
        timeoutId = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
        }, 500);
      }
    };

    typeNextChar();

    return () => clearTimeout(timeoutId);
  }, [isVisible, currentLineIndex]);

  // Trigger onDone callback when finished
  useEffect(() => {
    if (currentLineIndex === lines.length && onDone) {
      const timeoutId = setTimeout(onDone, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [currentLineIndex, lines.length, onDone]);

  return (
    <div
      ref={ref}
      className="font-bold text-black bg-gray-200 p-4 w-[90%] whitespace-pre-wrap glitch-1"
    >
      {displayedLines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      {currentLine && <div>{currentLine}</div>}
    </div>
  );
}
