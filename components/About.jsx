'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function About() {
  const underlineRef = useRef(null);
  const circleRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: 1.2,
        // markers: true,
      },
    });

    timeline
      .fromTo(circleRef.current, { drawSVG: '0%' }, { drawSVG: '100%', duration: 2, ease: 'power2.out' })
      .fromTo(underlineRef.current, { drawSVG: '0%' }, { drawSVG: '100%', duration: 2, ease: 'power2.out' }, '<'); // sync start
  }, []);

  return (
    <section id='about' className="bg-[#ffffff] flex items-center font-DMsemi justify-center px-6 py-24">
      <div className="max-w-5xl text-center">
        <h1
          ref={headingRef}
          className="text-[clamp(2.2rem,6vw,4rem)] leading-tight font-DMsemi tracking-tight"
        >
          we are{' '}
          <span className="relative inline-block font-Epiitalic leading-none align-middle z-10 ml-4 mr-4">
  young
  <svg
    className="absolute top-1/2 left-1/2 w-[170%] h-auto -translate-x-1/2 -translate-y-1/2 z-[-1]"
    viewBox="0 0 400 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      ref={circleRef}
      d="M50 100 C 70 30, 330 30, 350 100 C 330 170, 70 170, 50 100 Z"
      stroke="black"
      strokeWidth="2"
      fill="none"
    />
  </svg>
</span>

          , <span className="">internet kids</span> <br />
          team <span className="">with good taste</span>{' '} and
          <span className="relative inline-block italic font-Epiitalic ml-3 sm:ml-0">
             design delulu.
            <svg
              className="absolute -bottom-2 left-0 w-full h-[20px] pointer-events-none"
              viewBox="0 0 300 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={underlineRef}
                d="M0 10 C100 25, 200 -5, 300 10"
                stroke="#000000"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </span>{' '}
          <span className="block mt-1">no cap!</span>
        </h1>

        <p className="mt-12 md:mt-10 text-center font-DMsemi text-base md:text-xl text-neutral-800 max-w-xs md:max-w-4xl mx-auto leading-relaxed">
  a creative agency building bold brands and high-impact websites. From identity to execution, we blend design and dev to craft digital experiences that actually connect.
  <br />
  <span className="font-Epiitalic font-semibold">
    Clean. Fast. Unforgettable.
  </span>
</p>
      </div>
    </section>
  );
}
