import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Products from "@/components/home/products";
import Footer from "@/components/home/footer";
import { NavbarMenu } from "@/components/home/navbar";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <main>
      <NavbarMenu />
      <Hero />
      <Features />
      <Products />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
