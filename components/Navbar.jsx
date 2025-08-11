'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useWindowScroll } from 'react-use';
import Effect from './Effect';
import Deffect from './Deffect';

/**
 * SleekFrame Header
 * - Keeps your original layout, classes, and <Effect/> links
 * - Adds "floating" glassy style when scrolled
 * - Hides on scroll down, shows on scroll up (GSAP animated)
 */
export default function Header() {
  const navContainerRef = useRef(null);

  // scroll tracking (react-use)
  const { y: currentScrollY } = useWindowScroll();
  const prevScrollY = useRef(0);

  // visibility state
  const [isNavVisible, setIsNavVisible] = useState(true);

  // Decide when to show/hide and when to toggle floating style
  useEffect(() => {
    const el = navContainerRef.current;
    if (!el) return;

    if (currentScrollY === 0) {
      // back at top — show and remove floating chrome
      setIsNavVisible(true);
      el.classList.remove('floating-nav');
    } else if (currentScrollY > prevScrollY.current) {
      // scrolling down — hide
      setIsNavVisible(false);
      el.classList.add('floating-nav');
    } else if (currentScrollY < prevScrollY.current) {
      // scrolling up — show
      setIsNavVisible(true);
      el.classList.add('floating-nav');
    }

    prevScrollY.current = currentScrollY;
  }, [currentScrollY]);

  // Animate the container in/out with GSAP
  useEffect(() => {
    const el = navContainerRef.current;
    if (!el) return;

    gsap.to(el, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.25,
      ease: 'power2.out',
      overwrite: true,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-2 top-2 md:top-3 z-40 h-12 sm:h-16 border-none font-DMregular transition-all duration-700 md:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex justify-between items-center py-4 md:py-6 px-4 md:px-6">
          {/* Brand */}
          <a href="#home">
            <h2 className="text-base font-DMregular md:text-lg">SleekFrame Studio</h2>
          </a>

          {/* Mobile CTA (kept exactly like your original) */}
          <h2 className="md:hidden text-sm md:text-lg nav-hover-btn font-DMregular group">
            <Effect title="Book a Call"  href="mailto:contact.sleekframe@gmail.com?subject=Book%20a%2015-min%20call%20with%20SleekFrame&body=Hi%20SleekFrame%2C%0A%0AI%27d%20like%20to%20book%20a%2015-min%20call%20about%20my%20project.%20Here%20are%20a%20few%20details%3A%0A%0AName%3A%0ACompany%3A%0AProject%20type%3A%20Website%20%7C%20Brand%20%7C%20App%0ABudget%20range%3A%0ATimeline%3A%0ALinks%2FReferences%3A%0A%0AThanks%21"
                   />
          </h2>

          {/* Desktop nav (kept exactly like your original) */}
          <div className="hidden md:flex h-full font-DMregular items-center text-base md:text-lg gap-2">
            <Deffect title="Services," link="#services" />
            <Deffect title="work," link="#work" />
            <Deffect title="about," link="#about" />
            <Deffect title="contact" link="#footer" />
          </div>
        </nav>
      </header>

      {/* Minimal floating style (scoped). Move to globals.css if you prefer. */}
      <style jsx global>{`
        .floating-nav {
  /* light glass / frosted white */
  background: rgba(255, 255, 255, 0.58);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  backdrop-filter: saturate(180%) blur(14px);
  border-radius: 9999px; /* full pill */
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

/* Optional: subtle lift on hover */
.floating-nav:hover {
  background: rgba(255, 255, 255, 0.66);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.14);
}

/* Optional: prefer-reduced-motion users get instant toggles */
@media (prefers-reduced-motion: reduce) {
  .floating-nav { transition: none !important; }
}
      `}</style>
    </div>
  );
}
