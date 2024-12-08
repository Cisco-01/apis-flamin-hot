"use client";

import { useEffect, useRef, useState } from "react";
import { Cartoons } from "./Cartoons";
import Cards from "../utils/cards";
import { Crown, Pyramid } from "lucide-react";
import Link from "next/link";

export const ScrollAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current?.offsetHeight || 0;

      if (sectionHeight === 0) {
        return;
      } // Prevent division by zero

      const progress = Math.min(
        scrollPosition / (sectionHeight - windowHeight),
        1
      );
      setScrollProgress(isNaN(progress) ? 0 : progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, Math.min(1, 1 - scrollProgress));
  const scale = 1 + scrollProgress * 0.5; // Aumenta la escala en un 50% durante el scroll

  const handleScroll = (e: any) => {
    e.preventDefault(); // Prevenir la acción predeterminada del enlace
    document.querySelector("#explore")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden font-sans font-bold">
      <section
        ref={sectionRef}
        className="relative min-h-screen grid place-items-center overflow-hidden"
      >
        <div
          className="w-full max-w-[800px] px-4 transition-all duration-300 ease-in-out"
          style={{
            opacity: opacity,
            transform: `scale(${scale})`,
            maxWidth: `${Math.max(60, 100 - scrollProgress * 40)}%`, // Reduce el maxWidth de 100% a 60% del ancho de la pantalla
          }}
        >
          <h1 className="text-[clamp(2.5rem,7vw+1rem,10rem)] text-center leading-none w-screen grid">
            <span className="text-[#09f] text-[0.35em]">🔥</span>
            <span>APIs Flamin Hot</span>
          </h1>
        </div>
        <div className="animate-pulse">
          <Link href="#explore" onClick={handleScroll}>
            <Crown className=" mx-auto cursor-pointer stroke-amber-500" />
            <Pyramid className="rotate-180 mx-auto cursor-pointer stroke-amber-500" />
          </Link>
        </div>
      </section>

      <Cartoons cards={Cards} />
    </main>
  );
};
