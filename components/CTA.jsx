// app/components/SplitCTA.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Effect from './Effect';

export default function SplitCTA() {
  return (
    <section className="w-full bg-white text-black font-DMregular">
      <div className="mx-auto max-w-9xl px-4 sm:px-10 lg:px-12 py-10 sm:py-8 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-8 lg:gap-x-8">
          {/* Left: BIG brand word (placeholder) */}
          <div className="lg:col-span-7">
            <h1
              aria-label="Brand"
              className="font-Epiitalic tracking-tight leading-none text-[clamp(3.2rem,18vw,12rem)]"
            >
              Sleek
            </h1>
          </div>

          {/* Right: CTA copy */}
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-DMsemi leading-tight tracking-tight">
              Ready to Rock?
              <br />
              <Link
                href="#contact"
                className="relative inline-block mt-1 underline-offset-[10px] text-[clamp(1.75rem,4.5vw,3.25rem)]"
              >
                <span className="relative">
                  <Effect title="Get In Touch," link="mailto:kfreelance131@gmail.com" />
                  {/* custom underline (thick) */}
                  <span
                    aria-hidden
                    className="absolute left-0 -bottom-1 h-[3px] w-full bg-black"
                  />
                </span>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
