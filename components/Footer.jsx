// app/components/ContactFooter.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function ContactFooter() {
  return (
    <footer className="w-full bg-black font-DMregular text-white">
      {/* Top black band */}
      {/* Rounded white contact panel */}
      <section className="relative bg-white text-black">
        {/* Rounded corners on top */}
        <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-t-[2.5rem] bg-white px-4 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left: get in touch */}
              <div className="lg:col-span-6">
                <p className="text-base md:text-lg text-neutral-600 mb-4">get in touch</p>
                <a
                  href="mailto:hello@kreyda.art"
                  className="block text-[clamp(1.75rem,6vw,3.25rem)] font-semibold tracking-tight hover:opacity-90"
                >
                  Sleekframe@gmail.com
                </a>
              </div>

              {/* Right: link columns */}
              <nav className="lg:col-span-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6 text-[15px] leading-7">
                  <ul className="space-y-1">
                    <li>
                      <Link className="hover:underline" href="#">
                        portfolio
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="#">
                        about
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="#expertise_section">
                        expertise
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="#">
                        contact us
                      </Link>
                    </li>
                  </ul>

                  <ul className="space-y-1">
                    <li>
                      <Link className="hover:underline" href="#">
                        telegram
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="#">
                        whatsapp
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="#">
                        x
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="#">
                        linkedin
                      </Link>
                    </li>
                  </ul>

                  <ul className="space-y-1">
                    <li>
                      <Link className="hover:underline" href="#">
                        behance
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:underline" href="#">
                        dribbble
                      </Link>
                    </li>
                    {/* add more if needed */}
                  </ul>
                </div>
              </nav>
            </div>

            {/* Bottom row: brand + copyright */}
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="text-[18px] font-semibold">Sleekframe</span>
                {/* tiny 🇺🇦 dot */}
                <span className="h-3.5 w-3.5 rounded-full bg-[linear-gradient(90deg,#2563EB_50%,#FACC15_50%)] ring-1 ring-black/10" />
              </div>

              <p className="text-neutral-500 text-sm">© Sleek 2024</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
