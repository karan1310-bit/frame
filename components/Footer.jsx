// app/components/ContactFooter.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Effect from './Effect';

export default function ContactFooter() {
  return (
    <footer className="w-full font-DMregular text-white">
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
                  href="mailto:hello@kreyda."
                  className="block text-[5vw] sm:text-[6vw] lg:text-[2rem] text-neutral-900 font-DMsemi tracking-tight hover:opacity-90"
                >
                  contact.sleekframe@gmail.com
                </Link>
             
              </div>

              {/* Right: link columns */}
              <nav className="lg:col-span-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6 text-base md:text-lg leading-7">
                  <ul className="md:space-y-1 font-DMregular">
                    <li>
                       <Effect title="Services" link="mailto:kfreelance131@gmail.com" />
                    </li>
                    <li>
                       <Effect title="About" link="mailto:kfreelance131@gmail.com" />
                    </li>
                    <li>
                      <Effect title="Work" link="mailto:kfreelance131@gmail.com" />
                    </li>
                    <li>
                      <Effect title="Contact us" link="mailto:kfreelance131@gmail.com" />
                    </li>
                  </ul>

                  <ul className="md:space-y-1 font-DMregular">
                    <li>
                      <Effect title="Instagram" link="mailto:kfreelance131@gmail.com" />
                    </li>
                    <li>
                      <Effect title="WhatsApp" link="mailto:kfreelance131@gmail.com" />
                    </li>
                    <li>
                      <Effect title="X" link="mailto:kfreelance131@gmail.com" />
                    </li>
                    <li>
                      <Effect title="LinkedIn" link="mailto:kfreelance131@gmail.com" />
                    </li>
                  </ul>

                  <ul className="md:space-y-1 font-DMregular">
                    <li>
                      <Effect title="Behance" link="mailto:kfreelance131@gmail.com" />
                    </li>
                    <li>
                      <Effect title="Dribbble" link="mailto:kfreelance131@gmail.com" />
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

              <p className="text-neutral-500 text-sm md:text-lg">© Sleek 2025</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
