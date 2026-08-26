"use client";

import React from "react";
import { useRef } from "react";

export default function VibePicker({ openHandle }) {
  const mRef = useRef(null);

  const pRef = useRef(null);
  const dRef = useRef(null);
  const vibeRef = useRef(null);

  const toggleMenu = () => {
    if (openHandle) {
      //   setIsOpen(!openHandle);
      console.log("Menu Open");
    } else {
      //   setIsOpen(true);
      console.log("Menu Closed");
    }
  };

  const handleVibeClick = (e) => {
    const vibe = e.dataset.vibe;
    if (!vibe) return;
    if (vibe === "dark") {
      setVibeSelect("dark");
      dRef.current?.classList.add("vibe-highlight");

      pRef.current?.classList.remove("vibe-highlight");
      mRef.current?.classList.remove("vibe-highlight");

      console.log("Vibeset:", vibe);
    } else if (vibe === "main") {
      setVibeSelect("main");
      mRef.current?.classList.add("vibe-highlight");
      pRef.current?.classList.remove("vibe-highlight");
      dRef.current?.classList.remove("vibe-highlight");
    } else if (vibe === "hustle") {
      setVibeSelect("hustle");
      pRef.current?.classList.add("vibe-highlight");
      mRef.current?.classList.remove("vibe-highlight");
      dRef.current?.classList.remove("vibe-highlight");
    }
  };

  return (
    <>
      <div ref={vibeRef} className="vibe-select-container">
        <ul className="vibe-select">
          <li
            ref={mRef}
            onClick={handleVibeClick}
            className="vibe vibe-highlight"
            data-vibe="main"
          >
            M-Mode
          </li>
          <li
            ref={pRef}
            onClick={handleVibeClick}
            className="vibe"
            data-vibe="hustle"
          >
            H-Mode
          </li>
          <li
            ref={dRef}
            onClick={handleVibeClick}
            className="vibe"
            data-vibe="dark"
          >
            D-Mode
          </li>
        </ul>
        <button onClick={toggleMenu} className="vibe-o-c">
          Click
        </button>
      </div>
    </>
  );
}
