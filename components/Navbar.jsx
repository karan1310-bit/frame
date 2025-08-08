'use client';

import React, { useRef } from 'react';
import Effect from './Effect';

const navItems = ['Projects', 'Services', 'Studio', 'Sectors', 'Insights'];

export default function Header() {
  const navContainerRef = useRef(null);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-2 md:top-1 z-40 h-12 sm:h-16 border-none font-DMregular transition-all duration-700 md:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex justify-between items-center py-4 md:py-6 px-6 md:px-6">
          <a href="#home">
            <h2 className="text-base md:text-lg">SleekFrame Studio</h2>
          </a>

          {/* Nav Links */}
          

          {/* CTA */}
          
            <h2 className="md:hidden text-sm md:text-lg nav-hover-btn group">
               <Effect title="Let's Talk" link="mailto:kfreelance131@gmail.com" />
            </h2>

<div className="hidden md:flex h-full items-center text-base md:text-lg gap-2">
            <Effect title="Services," link="mailto:kfreelance131@gmail.com" />
            <Effect title="work," link="mailto:kfreelance131@gmail.com" />
            <Effect title="about," link="mailto:kfreelance131@gmail.com" />
            <Effect title="contact," link="mailto:kfreelance131@gmail.com" />
          </div>
        </nav>
      </header>
    </div>
  );
}
