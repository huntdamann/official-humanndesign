"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "../css/WhoWeAre.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    label: "1. Ideas",
    className: "word-1",
    header: "Ideas",
    description:
      "We treat every idea and perspective with equal importance. Sometimes, all it takes is the right spark to achieve something amazing. At HumannDesign, we provide your brand with an in-house incubator to bring those ideas to life.",
  },
  {
    label: "2. Instinct",
    className: "word-2",
    header: "Instinct",
    description:
      "We use instinct to elevate the services we offer. At HumannDesign, we break instinct down into three parts—the 3 E's: Education, Experience, and Exposure. We leverage what our team has learned, lived, and been exposed to in order to help your brand reach its full potential.",
  },
  {
    label: "3. Drive",
    className: "word-4",
    header: "Drive",
    description:
      "We approach every project with motivation and determination, seeing it through to maximize the impact it can have on your brand.",
  },
  {
    label: "4. Emotion",
    className: "word-5",
    header: "Emotion",
    description:
      "While we take pride in our analytical thinking and problem-solving methods, we never forget the human element. Emotion matters in marketing and branding, and we make it a priority to keep your customers’ wants and needs at the forefront of every decision.",
  },
  {
    label: "5. Love",
    className: "word-3",
    header: "Love",
    description:
      "We treat your brand with the same care and passion that you do. Your success is our passion, and we’re committed to achieving the best possible outcome for your brand.",
  },
];

export default function WhoWeAre() {
  const [activePillar, setActivePillar] = useState<(typeof pillars)[0] | null>(
    null
  );
  const testRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!testRef.current) return;

    const split = new SplitText(testRef.current, { type: "words" });
    gsap.from(split.words, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".who-am-i",
        start: "top 80%",
        once: true,
      },
    });
  });

  return (
    <section ref={testRef} className="who-am-i">
      <p className="essence">The ESSENCE of HUMANNDESIGN</p>
      <p className="second-line">
        where <span className="second-word">Creativity</span>
      </p>
      <p className="second-line">
        meets <span className="second-word"> Engineering</span>
      </p>
    </section>
  );
}
