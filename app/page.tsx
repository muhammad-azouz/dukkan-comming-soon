import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <section className="w-vw h-vh bg-hero bg-no-repeat bg-cover">
        <Navbar />
        <Hero />
      </section>
      <Features />
      <Footer />
    </main>
  );
}
