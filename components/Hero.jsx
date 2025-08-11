'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);

export default function Hero() {
  const pathRef = useRef(null);

  useGSAP(() => {
    if (pathRef.current) {
      gsap.fromTo(
        pathRef.current,
        { drawSVG: '0%' },
        { drawSVG: '100%', duration: 2.5, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <section id='home' className="relative w-full min-h-screen bg-[#ffffff] text-black flex flex-col justify-center items-center px-6 py-12">
      {/* Main Title */}
      <h1 className="text-[17vw] md:text-[10vw] font-Epiitalic mt-12 text-center leading-none tracking-tight">
        SleekFrame{' '}
        <span className="mt-4 md:mt-0 relative inline-block">
          Studios
          {/* Draw-on-load SVG line */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 842.14 500"
            className="absolute top-1/2 left-0 w-[120%] -translate-y-1/2 -translate-x-[9%] rotate-[2deg] pointer-events-none"
          >
            <path
              ref={pathRef}
              d="M336.2,110.05C261.69,118,16.52,122,20.65,244.29c4.17,173,484.3,249.8,734.57,108.37,244-186.65-337.91-311-546.54-240.47"
              fill="none"
              stroke="#111"
              strokeWidth={3}
              className="draw"
            />
          </svg>
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-12 md:mt-10 text-center font-DMsemi text-base md:text-xl text-neutral-800 max-w-xs md:max-w-2xl">
        We don’t do average. We do brands with edge — visuals that slap, words that resonate, and digital that delivers.
        <br />
        <span className="font-Epiitalic font-bold">Built to stand out,</span> not blend in.
      </p>
    </section>
  );
}
