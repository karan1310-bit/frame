'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Effect from './Effect';
import Deffect from './Deffect';

gsap.registerPlugin(ScrollTrigger);

export default function ContactFooter() {
  const underlineRef = useRef(null);
  const emailWrapRef = useRef(null);

  useEffect(() => {
    const path = underlineRef.current;
    const triggerEl = emailWrapRef.current;
    if (!path || !triggerEl) return;

    // Plugin-free draw effect using stroke-dasharray/offset
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top 85%',
        end: 'bottom 65%',
        scrub: 1.1,
        // markers: true,
      },
    });

    tl.to(path, { strokeDashoffset: 0, duration: 2, ease: 'power2.out' });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <footer id='footer' className="w-full font-DMregular text-white">
      {/* Top black band */}
      {/* Rounded white contact panel */}
      <section className="relative bg-white text-black">
        {/* Rounded corners on top */}
        <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-t-[4rem] bg-[#ffffff] px-4 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left: get in touch */}
              <div className="lg:col-span-6">
                <p className="text-base md:text-lg text-neutral-600 mb-2">Get in touch</p>
                <Link
                  href="mailto:contact.sleekframe@gmail.com?subject=Quick%2010-min%20call%20about%20my%20project&body=Hi%20SleekFrame%2C%20I%20just%20saw%20your%20work%20and%20loved%20it.%20I%27d%20love%20to%20book%20a%2010-minute%20call%20to%20discuss%20my%20project.%20Thanks!"
                  className="block text-[5vw] sm:text-[6vw] lg:text-[2rem] text-neutral-900 font-DMsemi tracking-tight hover:opacity-90"
                >
                  <span ref={emailWrapRef} className="relative inline-block pr-2">
                    contact.sleekframe@gmail.com
                    {/* Animated underline */}
                    <svg
                      className="absolute -bottom-3 left-0 w-full h-[20px] pointer-events-none"
                      viewBox="100 0 300 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        ref={underlineRef}
                        d="M0 10 L300 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                        fill="none"
                      />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Right: link columns */}
              <nav className="lg:col-span-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6 text-base md:text-lg leading-7">
                  <ul className="md:space-y-1 font-DMregular">
                    <li>
                      <Deffect title="Home" link="#home" />
                    </li>
                    <li>
                      <Deffect title="Services" link="#services" />
                    </li>
                    <li>
                      <Deffect title="About" link="#about" />
                    </li>
                    <li>
                      <Deffect title="Work" link="#work" />
                    </li>
                    
                  </ul>

                  <ul className="md:space-y-1 font-DMregular">
                    <li>
                      <Effect title="Instagram" link="https://www.instagram.com/sleekframestudios?igsh=MWI3enl0a2dneHhucA%3D%3D" />
                    </li>
                    <li>
                      <Effect title="WhatsApp" link="https://wa.me/+917225928721?text=Hi%20SleekFrame%2C%20I%20just%20saw%20your%20work%20and%20loved%20it.%20I%27d%20love%20to%20book%20a%2010-minute%20call%20to%20discuss%20my%20project." />
                    </li>
                  
                    <li>
                      <Effect title="LinkedIn" link="https://www.linkedin.com/company/sleekframestudios/" />
                    </li>
                    
                  </ul>

                  <ul className="md:space-y-1 font-DMregular">
                    <li>
                      <Effect title="+1 (778) 961-0904" link="mailto:contact.sleekframe@gmail.com" />
                    </li>
                    <li>
                      <Effect title="Surrey BC" link="mailto:contact.sleekframe@gmail.com" />
                    </li>
                    {/* add more if needed */}
                  </ul>
                </div>
              </nav>
            </div>

            {/* Bottom row: brand + copyright */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="h-3.5 w-3.5 rounded-full bg-[linear-gradient(90deg,_#06B6D4_50%,_#A78BFA_50%)] ring-1 ring-black/10" />
              </div>

              <p className="text-neutral-500 text-sm md:text-lg">© SleekFrameStudios 2025</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
