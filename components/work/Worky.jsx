'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function OurWork() {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const headingRef = useRef(null); // NEW
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.set([cardRef1.current, cardRef2.current, cardRef3.current, headingRef.current], {
      willChange: 'transform',
      force3D: true,
      transformOrigin: 'center',
    });

    // cards
    const x1 = gsap.quickTo(cardRef1.current, 'x', { duration: 0.35, ease: 'power2.out' });
    const y1 = gsap.quickTo(cardRef1.current, 'y', { duration: 0.35, ease: 'power2.out' });
    const x2 = gsap.quickTo(cardRef2.current, 'x', { duration: 0.35, ease: 'power2.out' });
    const y2 = gsap.quickTo(cardRef2.current, 'y', { duration: 0.35, ease: 'power2.out' });
    const x3 = gsap.quickTo(cardRef3.current, 'x', { duration: 0.35, ease: 'power2.out' });
    const y3 = gsap.quickTo(cardRef3.current, 'y', { duration: 0.35, ease: 'power2.out' });

    // heading (inverse)
    const hx = gsap.quickTo(headingRef.current, 'x', { duration: 0.45, ease: 'power2.out' });
    const hy = gsap.quickTo(headingRef.current, 'y', { duration: 0.45, ease: 'power2.out' });

    let rect = section.getBoundingClientRect();
    const refreshRect = () => { rect = section.getBoundingClientRect(); };

    const handlePointerMove = (e) => {
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;
      const dx = (relX - 0.5) * 2;
      const dy = (relY - 0.5) * 2;

      const s1 = 40, s2 = 55, s3 = 70; // cards strength
      const sH = 25;                   // heading strength (inverse)

      x1(dx * s1); y1(dy * s1);
      x2(dx * s2); y2(dy * s2);
      x3(dx * s3); y3(dy * s3);

      // inverse parallax for heading
      hx(-dx * sH);
      hy(-dy * sH);
    };

    const handlePointerLeave = () => {
      [x1, y1, x2, y2, x3, y3, hx, hy].forEach(fn => fn(0));
    };

    section.addEventListener('pointerenter', refreshRect);
    section.addEventListener('pointermove', handlePointerMove, { passive: true });
    section.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('resize', refreshRect);

    return () => {
      section.removeEventListener('pointerenter', refreshRect);
      section.removeEventListener('pointermove', handlePointerMove);
      section.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', refreshRect);
    };
  }, []);

  return (
    <section
      id='work'
      ref={sectionRef}
      className="relative h-screen flex flex-col items-center font-DMregular overflow-hidden justify-center px-6 py-12"
    >
      {/* Heading Section */}
      <h1
        ref={headingRef} // NEW
        className="absolute text-7xl md:text-9xl font-DMbold text-center text-black z-0"
      >
        Our Work
      </h1>

      {/* Projects Container */}
      <div className="relative h-screen w-full max-w-7xl z-0">
        {/* Project 1 */}
        <article
          ref={cardRef1}
          className="absolute top-[65%] md:top-[60%] left-[-12%] md:left-[-6%] w-[70vw] md:w-[calc(45.33%-1rem)] h-[20vh] md:h-[40vh] overflow-hidden bg-[#F0CCDF] p-2 md:p-4 rounded-3xl flex items-center justify-between cursor-pointer transform transition-all z-20"
        >
          <div className="flex-shrink-0 overflow-hidden w-1/2">
            <Image
              src="/images/6.jpg"
              alt="Pink Gellac"
              width={150}
              height={200}
              className="rounded-2xl object-cover px-3 md:px-1 overflow-hidden w-full md:h-[37vh]"
            />
          </div>
          <div className="flex flex-col justify-between items-start h-full w-1/2 pl-2 md:pl-4 py-4 md:py-0">
            <div className="text-lg md:text-5xl font-DMsemi text-[#C56386]">
              Disco Den
            </div>
            <div className="mt-2">
              <span className="text-sm md:text-xl text-white bg-[#C56386] rounded-full px-2 py-1 md:px-4 md:py-2">Animations</span>
            </div>
          </div>
        </article>

        {/* Project 2 */}
        <article
          ref={cardRef2}
          className="absolute top-[-1%] left-[calc(-15%+2%)] md:top-[0%] md:left-[calc(55%+2%)] w-[70vw] md:w-[calc(45.33%-1rem)] h-[20vh] md:h-[40vh] overflow-hidden bg-[#D0231B] p-2 md:p-4 rounded-3xl flex items-center justify-between cursor-pointer transform transition-all z-20"
        >
          <div className="flex-shrink-0 overflow-hidden w-1/2">
            <Image
              src="/images/3.jpg"
              alt="Pink Gellac"
              width={150}
              height={200}
              className="rounded-2xl px-3 md:px-1 overflow-hidden object-cover w-full md:h-[37vh]"
            />
          </div>
          <div className="flex flex-col justify-between items-start h-full w-1/2 pl-2 md:pl-4 py-4 md:py-0">
            <div className="text-lg md:text-5xl font-DMsemi text-[#ADB8CF]">
              P Motosport
            </div>
            <div className="mt-2">
              <span className="text-sm md:text-xl text-red-500 bg-[#ADB8CF] rounded-full px-2 py-1 md:px-4 md:py-2">Next.js + CMS</span>
            </div>
          </div>
        </article>

        {/* Project 3 */}
        <article
          ref={cardRef3}
          className="absolute top-[20%] left-[calc(40%+3%)] md:top-[60%] md:left-[calc(65%+3%)] w-[70vw] md:w-[calc(45.33%-1rem)] h-[20vh] md:h-[40vh] bg-[#FAF8F7] p-2 md:p-4 rounded-3xl flex items-center justify-between cursor-pointer transform transition-all z-20"
        >
          <div className="flex-shrink-0 overflow-hidden w-1/2">
            <Image
              src="/images/S1.png"
              alt="Filling Pieces"
              width={150}
              height={200}
              className="rounded-2xl px-1 object-cover overflow-hidden w-full md:h-[37vh]"
            />
          </div>
          <div className="flex flex-col justify-between items-start h-full w-1/2 pl-2 md:pl-4 py-4 md:py-0">
            <div className="text-lg md:text-5xl font-DMsemi text-[#745338]">
              K Casa
            </div>
            <div className="mt-2">
              <span className="text-sm md:text-xl text-white bg-[#745338] rounded-full px-2 py-1 md:px-4 md:py-2">Frontend + Design</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
