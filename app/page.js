import About from "@/components/About";
import Hero from "@/components/Hero";
import Header from "@/components/Navbar";
import Services from "@/components/Services";
import OurWork from "@/components/work/Worky";
import MainContent from "@/components/work/Worky";

export default function Home() {
  return (
   <main className="min-h-screen w-full font-DMregular">
    <Header />
    <Hero />
    <About />
    <OurWork />
    <Services />
   </main>
  );
}
