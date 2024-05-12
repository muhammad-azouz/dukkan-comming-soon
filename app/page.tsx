import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import HowToUse from "./components/how";
import Navbar from "./components/navbar";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <section className="w-vw h-vh bg-hero bg-no-repeat bg-cover">
        <Navbar />
        <Hero />
      </section>
      <Features />
      <div className="flex w-full justify-center relative top-[-100px]">
        <div className="h-2 w-10 bg-gradient-to-r from-pink-500 to-yellow-500 rounded"></div>
      </div>
      <HowToUse />
      <Footer />
    </main>
  );
}
