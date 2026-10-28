import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import About from "./components/sections/About";
import Team from "./components/sections/Team";
import Pricing from "./components/sections/Pricing";
import Instagram from "./components/sections/Instagram";
import Reviews from "./components/sections/Reviews";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Team />
        <Pricing />
        <Instagram />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
