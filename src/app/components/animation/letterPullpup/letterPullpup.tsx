"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export default function LetterPullup({
  className,
  words,
  delay = 0.05,
}: LetterPullupProps) {
  const letters = words.split("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * delay,
      },
    }),
  };

  const containerClassName = words === "Meus Contatos" ? "flex justify-center" : "flex justify-start";

  return (
    <div ref={ref} className={containerClassName}>
      {isVisible &&
        letters.map((letter, i) => (
          <motion.h1
            key={i}
            variants={pullupVariant}
            initial="initial"
            animate="animate"
            custom={i}
            className={`font-display text-center text-xl md:text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm text-white md:leading-[5rem] ${className}`}
          >
            {letter === " " ? <span>&nbsp;</span> : letter}
          </motion.h1>
        ))}
    </div>
  );
}
