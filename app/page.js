import About from "@/components/About";
import Hero from "@/components/Hero";
import Header from "@/components/Navbar";

export default function Home() {
  return (
   <main className="min-h-screen w-full font-DMregular">
    <Header />
    <Hero />
    <About />
   </main>
  );
}
