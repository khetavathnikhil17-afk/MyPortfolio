import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import TechLogos from "@/components/ui/TechLogos";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import SectionTransition from "@/components/transitions/SectionTransition";

export default function Home() {
  return (
    <main>
      <Hero />

      <SectionTransition>
        <About />
      </SectionTransition>

      <SectionTransition>
        <Projects />
      </SectionTransition>

      <TechLogos />

      <SectionTransition>
        <Services />
      </SectionTransition>

      <SectionTransition>
        <CTA />
      </SectionTransition>
    </main>
  );
}