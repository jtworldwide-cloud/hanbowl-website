import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import Location from "@/components/Location";
import Order from "@/components/Order";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Location />
        <Order />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
