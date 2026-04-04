"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import useMediaQuery from '../../src/hooks/useMediaQuery'
import Image from 'next/image'
import { useEffect, useState, useMemo } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  drop: boolean;
  link: string
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const isSmallDevice = useMediaQuery("(min-width: 320px) and (max-width: 425px)");

  // Memoized rotation values — generated once per testimonial, never change on re-render
  const rotations = [-8, 4, -3, 7, -5, 2, 9, -6]


  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid justify-center grid-cols-1 gap-8 md:gap-20 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            viewport={{ amount: 0.1, once: isSmallDevice ? true : true }}
            transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.3 }}
            initial={{ rotate: -30, x: -60, opacity: 0 }}
            whileInView={{ rotate: 0, x: 0, opacity: 1 }}
            style={{ width: isSmallDevice ? "200px" : "", height: isSmallDevice ? "200px" : "320px" }}
            className="relative self-center h-80 w-full"
          >
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.src}-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotations[index],
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotations[index],
                    zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotations[index],
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute group inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    fill
                    style={{ objectFit: "cover" }}
                    draggable={false}
                    className="h-full w-full transition-all group-hover:blur-sm rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          viewport={{ amount: 0.5, once: true }}
          transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.3 }}
          initial={{ rotate: 30, x: 60, opacity: 0 }}
          whileInView={{ rotate: 0, x: 0, opacity: 1 }}
          className="flex flex-col justify-between py-4"
        >
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-[#49cdcd] dark:text-[#49cdcd]">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-300 dark:text-neutral-300">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-3 text-lg h-36 overflow-visible text-[#c8c8c8] dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Arrow Buttons */}
          <div className="flex gap-4 md:mt-5 mt-1 pt-6 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button active:bg-[#4dc9c9] active:scale-95 cursor-pointer flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button cursor-pointer flex h-7 w-7 items-center active:bg-[#4dc9c9] justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black  transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
            
            <button
              className={`group/button active:bg-[#4dc9c9] active:scale-95 flex h-12.5 w-50 ${testimonials[active].drop ? 'bg-black hover:bg-teal-200' : 'bg-gray-500 hover:bg-gray-200'} text-white items-center justify-center rounded-md transition-all dark:bg-neutral-800`}
            >
              {testimonials[active].drop ? <span className="w-full h-full flex items-center  rounded-md justify-center"><a href={testimonials[active].link} target="_blank" rel="noopener noreferrer" className=" rounded-md w-full h-full justify-center items-center flex">View</a></span> : <span>Coming Soon</span>}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};