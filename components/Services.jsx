'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const items = [
  {
    id: '01',
    title: 'Web design',
    tags: ['Landing page', 'Corporate website', 'Online store'],
    openBgClass: 'bg-[#D8CCB5]',
    hoverBgClass:
      'hover:bg-[#D8CCB5] focus:bg-[#D8CCB5] focus-within:bg-[#D8CCB5] active:bg-[#D8CCB5]',
    ringClass: 'ring-[#D8CCB5]',
    hoverTextClass: 'group-hover:text-[#392420]',
    openTextClass: 'text-[#392420]',
  },
  {
    id: '02',
    title: 'Product design',
    tags: ['UX UI design', 'SaaS platforms', 'Web applications', 'Mobile apps'],
    openBgClass: 'bg-[#EAF7FF]',
    hoverBgClass:
      'hover:bg-[#EAF7FF] focus:bg-[#EAF7FF] focus-within:bg-[#EAF7FF] active:bg-[#EAF7FF]',
    ringClass: 'ring-[#1D9BF0]',
    hoverTextClass: 'group-hover:text-[#0F3D68]',
    openTextClass: 'text-[#0F3D68]',
  },
  {
    id: '03',
    title: 'Web development',
    tags: ['Webflow', 'Frontend development'],
    openBgClass: 'bg-[#DEE9CF]',
    hoverBgClass:
      'hover:bg-[#DEE9CF] focus:bg-[#DEE9CF] focus-within:bg-[#DEE9CF] active:bg-[#DEE9CF]',
    ringClass: 'ring-[#4B6B27]',
    hoverTextClass: 'group-hover:text-[#2B4B1E]',
    openTextClass: 'text-[#2B4B1E]',
  },
  {
    id: '04',
    title: 'Branding',
    tags: ['Logo', 'Packaging', 'Naming', 'Corporate identity'],
    openBgClass: 'bg-[#FFF4D6]',
    hoverBgClass:
      'hover:bg-[#FFF4D6] focus:bg-[#FFF4D6] focus-within:bg-[#FFF4D6] active:bg-[#FFF4D6]',
    ringClass: 'ring-[#C68B00]',
    hoverTextClass: 'group-hover:text-[#8B5E00]',
    openTextClass: 'text-[#8B5E00]',
  },
  {
    id: '05',
    title: 'Mobile apps',
    tags: ['iOS', 'Android', 'Cross-platform'],
    openBgClass: 'bg-[#FCE7F3]',
    hoverBgClass:
      'hover:bg-[#FCE7F3] focus:bg-[#FCE7F3] focus-within:bg-[#FCE7F3] active:bg-[#FCE7F3]',
    ringClass: 'ring-[#BE185D]',
    hoverTextClass: 'group-hover:text-[#9D174D]',
    openTextClass: 'text-[#9D174D]',
  },
];

export default function Services() {
  const [openId, setOpenId] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  const itemRefs = useRef({});
  const titlePathRefs = useRef({});
  const headingWrapRef = useRef(null);
  const headingCircleRef = useRef(null); // halo path

  // detect touch/coarse pointer
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const touch =
      (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) ||
      'ontouchstart' in window ||
      (navigator && navigator.maxTouchPoints > 0);
    setIsTouch(!!touch);
  }, []);

  // close on outside tap (mobile)
  useEffect(() => {
    if (!isTouch) return;
    const handlePointerDown = (e) => {
      if (!openId) return;
      const el = itemRefs.current[openId];
      if (!el) return;
      if (!el.contains(e.target)) setOpenId(null);
    };
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, [isTouch, openId]);

  // Services: draw the halo on scroll (underline removed)
  useEffect(() => {
    if (!headingWrapRef.current || !headingCircleRef.current) return;

    gsap.set(headingCircleRef.current, { drawSVG: '0%' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingWrapRef.current,
        start: 'top 85%',
        end: 'bottom 65%',
        scrub: 1.1,
      },
    });

    tl.to(headingCircleRef.current, {
      drawSVG: '100%',
      duration: 1.6,
      ease: 'power2.out',
    });

    return () => tl.kill();
  }, []);

  // Per-row title squiggle: draw on scroll (once)
  useEffect(() => {
    const triggers = [];

    items.forEach((it) => {
      const row = itemRefs.current[it.id];
      const path = titlePathRefs.current[it.id];
      if (!row || !path) return;

      gsap.set(path, { drawSVG: '0%' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: 'top 80%',
          end: 'bottom 70%',
          once: true,
        },
      });

      tl.to(path, { drawSVG: '100%', duration: 1.05, ease: 'power2.out' });
      triggers.push(tl.scrollTrigger);
    });

    return () => {
      triggers.forEach((st) => st && st.kill());
    };
  }, []);

  return (
    <section
      id="expertise_section"
      aria-labelledby="expertise_heading"
      className="w-full bg-[#FFFFFF] py-4 md:py-20 font-DMregular"
    >
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-t-[2.25rem] bg-[#FFFFFF] shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
          {/* Heading with animated HALO only */}
          <div
            ref={headingWrapRef}
            className="px-4 sm:px-8 text-center lg:px-16 pt-12 sm:pt-12 lg:pt-12 pb-10 relative"
          >
            <p
              className="text-3xl sm:text-7xl text-center font-Epiitalic relative inline-block"
              id="expertise_heading"
            >
              <span className="relative inline-block z-10">
                Services
                {/* Round/organic halo behind the word (your path) */}
                <svg
                  className="absolute top-1/2 left-1/2 w-[180%] max-w-[800px] h-auto -translate-x-1/2 -translate-y-1/2 z-[-1] pointer-events-none"
                  viewBox="0 0 800 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
               <path
  ref={headingCircleRef}
  d="M340.96,110.528C289.352,98.9,93.216,157.1,96.52,215.4c3.336,64.9,387.44,101.75,587.656,41.8,195.2,-93.5,-270.328,-156.75,-437.232,-117.7"
  stroke="currentColor"
  strokeWidth="1.2"
  vectorEffect="non-scaling-stroke"
  fill="none"
/>
                </svg>
              </span>
            </p>

            <h2 className="mt-8 mb-4 max-w-2xs md:max-w-3xl mx-auto text-base font-DMsemi sm:text-xl lg:text-xl leading-tight tracking-tight text-slate-900">
              Our vast experience and range of services help solve complex business
              problems with a personalized approach to each task
            </h2>
          </div>

          <ul role="list" className="divide-y divide-slate-200">
            {items.map((item) => {
              const isOpen = openId === item.id;

              const bgClasses = [
                'bg-white',
                item.hoverBgClass,              // desktop hover/focus
                isOpen ? item.openBgClass : '', // mobile open
              ].join(' ');

              const openLift = isOpen ? 'py-12 sm:py-12 lg:py-14 -translate-y-[2px]' : '';
              const ctaState = isOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-2 pointer-events-none';
              const ringState = isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50';

              const numText = [
                'text-sm sm:text-lg tracking-wider',
                'text-slate-900',
                item.hoverTextClass,
                isOpen ? item.openTextClass : '',
              ].join(' ');

              const titleText = [
                'text-2xl sm:text-5xl lg:text-[2.8rem] leading-tight tracking-tight',
                'text-slate-900',
                'transition-transform duration-300 ease-out group-hover:translate-x-[2px]',
                item.hoverTextClass,
                isOpen ? item.openTextClass : '',
              ].join(' ');

              const tagText = [
                'text-xs sm:text-sm uppercase tracking-wide',
                'text-slate-900',
                item.hoverTextClass,
                isOpen ? item.openTextClass : '',
              ].join(' ');

              return (
                <li key={item.id}>
                  <article
                    ref={(el) => (itemRefs.current[item.id] = el)}
                    tabIndex={isTouch ? -1 : 0}
                    onClick={() => {
                      if (!isTouch) return; // tap-to-open only on touch
                      setOpenId((prev) => (prev === item.id ? null : item.id));
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setOpenId((prev) => (prev === item.id ? null : item.id));
                      }
                    }}
                    className={[
                      'relative group grid grid-cols-12 items-start',
                      'px-4 sm:px-8 lg:px-16',
                      'py-4 sm:py-6 lg:py-8',
                      'cursor-pointer touch-manipulation',
                      bgClasses,
                      'transition-all duration-300 ease-out',
                      'hover:py-5 sm:hover:py-8 lg:hover:py-10',
                      'hover:-translate-y-[2px]',
                      openLift,
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10',
                    ].join(' ')}
                    aria-expanded={isOpen}
                  >
                    {/* number */}
                    <div className="hidden sm:block col-span-12 sm:col-span-2 lg:col-span-2 order-1 sm:order-none font-DMsemi">
                      <span className={numText}>{item.id}</span>
                    </div>

                    {/* main */}
                    <div className="col-span-12 sm:col-span-10 lg:col-span-10">
                      <div className="flex flex-col gap-3 lg:gap-4 font-DMregular">
                        <h3 className={titleText}>
                          <span className="relative inline-block">
                            {item.title}
                            {/* per-title squiggle (scroll only) */}
                            <svg
                              className="absolute -bottom-2 left-0 w-full h-[18px] pointer-events-none"
                              viewBox="0 0 300 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden
                            >
                              <path
                                ref={(el) => (titlePathRefs.current[item.id] = el)}
                                d="M0 10 C 90 22, 210 -2, 300 10"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                fill="none"
                              />
                            </svg>
                          </span>
                        </h3>

                        {item.tags?.length > 0 && (
                          <p className={tagText}>
                            {item.tags.map((t, i) => (
                              <span key={t} className="inline">
                                {t}
                                {i < item.tags.length - 1 && (
                                  <span aria-hidden className="mx-2">•</span>
                                )}
                              </span>
                            ))}
                          </p>
                        )}

                        {/* Start a project — hover on desktop, open on mobile */}
                        <div
                          className={[
                            'md:pt-1 transition-all duration-300 ease-out',
                            'group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto',
                            ctaState,
                          ].join(' ')}
                        >
                          <button
                            type="button"
                            className="rounded-full border border-slate-900 px-5 py-2 text-sm sm:text-base font-medium text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
                          >
                            Start a project
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* right-side tiny ring */}
                    <span
                      aria-hidden
                      className={[
                        'pointer-events-none absolute right-8 sm:right-10 lg:right-16 top-1/2 hidden -translate-y-1/2 md:inline-block h-4 w-4 rounded-full',
                        item.ringClass,
                        'transition-all duration-300 ease-out',
                        'group-hover:opacity-100 group-hover:scale-100',
                        ringState,
                      ].join(' ')}
                      style={{ boxShadow: 'inset 0 0 0 2px currentColor' }}
                    />
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
