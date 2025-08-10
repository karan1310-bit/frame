import About from "@/components/About";
import SplitCTA from "@/components/CTA";
import ContactFooter from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Navbar";
import Services from "@/components/Services";
import SmoothScroll from "@/components/SmoothScroll";
import OurWork from "@/components/work/Worky";
import MainContent from "@/components/work/Worky";

export default function Home() {
  return (
   <main className="min-h-screen w-full font-DMregular">
    <SmoothScroll />
    <Header />
    <Hero />
    <About />
    <OurWork />
    <Services />
    <SplitCTA />
    <ContactFooter />
   </main>
  );
}
