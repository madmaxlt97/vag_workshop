import Services from "@/components/sections/Services";
import Hero from "../components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Workshop from "@/components/sections/Workshop";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Workshop />
    </main>
  );
}
