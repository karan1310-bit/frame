'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function OurWork() {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Handle mouse movement to get the relative position
    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;

      const centerX = section.offsetWidth / 2;
      const centerY = section.offsetHeight / 2;

      // Get the difference between the mouse and center position
      const deltaX = (mouseX - centerX) / centerX;
      const deltaY = (mouseY - centerY) / centerY;

      // Apply GSAP animation to each card with added position movement
      gsap.to(cardRef1.current, {
        x: deltaX * 50, // Increased movement along X
        y: deltaY * 50, // Increased movement along Y
        ease: 'power2.out',
        duration: 0.5,
        transformOrigin: 'center',
      });

      gsap.to(cardRef2.current, {
        x: deltaX * 50,
        y: deltaY * 50,
        ease: 'power2.out',
        duration: 0.5,
        transformOrigin: 'center',
      });

      gsap.to(cardRef3.current, {
        x: deltaX * 50,
        y: deltaY * 50,
        ease: 'power2.out',
        duration: 0.5,
        transformOrigin: 'center',
      });
    };

    // Add event listener for mouse move
    section.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex flex-col items-center font-DMregular overflow-hidden justify-center px-6 py-12"
    >
      {/* Heading Section */}
      <h1 className="absolute text-7xl md:text-9xl font-DMbold text-center text-black z-0">
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
              src="/images/6.jpg"  // Replace with actual image path
              alt="Pink Gellac"
              width={150}
              height={200}
              className="rounded-2xl object-cover px-3 md:px-1 overflow-hidden w-full md:h-[37vh]"
            />
          </div>
          <div className="flex flex-col justify-between items-start h-full w-1/2 pl-2 md:pl-4 py-4 md:py-0">
            <div className="text-lg md:text-5xl font-DMsemi text-[#C56386]">
              Pink Gellac
            </div>
            <div className="mt-2">
              <span className="text-sm md:text-xl text-white bg-[#C56386] rounded-full px-2 py-1 md:px-4 md:py-2">Shopify Plus</span>
            </div>
          </div>
        </article>

        {/* Project 2 */}
        <article
          ref={cardRef2}
          className="absolute top-[-1%] left-[calc(-15%+2%)] md:top-[2%] md:left-[calc(50%+2%)] w-[70vw] md:w-[calc(45.33%-1rem)] h-[20vh] md:h-[40vh] overflow-hidden bg-[#D0231B] p-2 md:p-4 rounded-3xl flex items-center justify-between cursor-pointer transform transition-all z-20"
        >
          <div className="flex-shrink-0 overflow-hidden w-1/2">
            <Image
              src="/images/5.jpg"  // Replace with actual image path
              alt="Pink Gellac"
              width={150}
              height={200}
              className="rounded-2xl px-3 md:px-1 overflow-hidden object-cover w-full md:h-[37vh]"
            />
          </div>
          <div className="flex flex-col justify-between items-start h-full w-1/2 pl-2 md:pl-4 py-4 md:py-0">
            <div className="text-lg md:text-5xl font-DMsemi text-[#ADB8CF]">
              Obey
            </div>
            <div className="mt-2">
              <span className="text-sm md:text-xl text-red-500 bg-[#ADB8CF] rounded-full px-2 py-1 md:px-4 md:py-2">Shopify Plus</span>
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
              src="/logos/1.png"  // Replace with actual image path
              alt="Filling Pieces"
              width={150}
              height={200}
              className="rounded-2xl px-1 object-cover overflow-hidden w-full md:h-[37vh]"
            />
          </div>
          <div className="flex flex-col justify-between items-start h-full w-1/2 pl-2 md:pl-4 py-4 md:py-0">
            <div className="text-lg md:text-5xl font-DMsemi text-[#745338]">
              Filling Pieces
            </div>
            <div className="mt-2">
              <span className="text-sm md:text-xl text-white bg-[#745338] rounded-full px-2 py-1 md:px-4 md:py-2">Shopify Plus</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
