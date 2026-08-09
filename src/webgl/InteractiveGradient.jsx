"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { memo } from "react";

const InteractiveGradient = ({ option, size }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const workerRef = useRef(null);
  const [screenSize, setScreenSize] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    console.log("Log this running");
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.opacity = "0";
    canvas.style.transition = "opacity 0.8s ease";
    container.appendChild(canvas);
    canvasRef.current = canvas;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const width = container.clientWidth;
    const height = container.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    // MUST transfer before any getContext() call on this canvas
    const offscreen = canvas.transferControlToOffscreen();

    const worker = new Worker(
      new URL("./workers/animation-worker.js", import.meta.url),
      { type: "module" }
    );
    workerRef.current = worker;

    worker.postMessage(
      {
        type: "init",
        canvas: offscreen,
        width,
        height,
        dpr,
        option,
      },
      [offscreen]
    );

    worker.onmessage = (e) => {
      if (e.data.type === "ready") {
        // canvas element is still in the DOM, so we can still style it
        requestAnimationFrame(() => {
          canvas.style.opacity = "1";
        });
      }
    };

    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      worker.postMessage({ type: "resize", width, height, dpr });
    });
    resizeObserver.observe(container);

    // Pause the render loop when scrolled off-screen
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        worker.postMessage({
          type: entry.isIntersecting ? "resume" : "pause",
        });
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      worker.terminate();
      container.removeChild(canvas);
    };
  }, [option]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        zIndex: 1,
      }}
      ref={containerRef}
    />
  );
};

export default memo(InteractiveGradient);
