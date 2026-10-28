import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import About from "./components/sections/About";
import Team from "./components/sections/Team";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Team />
      </main>
    </>
  );
}
