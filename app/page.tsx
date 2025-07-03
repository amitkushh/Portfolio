"use client";

import LogoSection from "@/components/LogoSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import QuoteSection from "@/components/QuoteSection";
import Social from "@/components/Social";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="pt-10">
      <LogoSection />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <QuoteSection />
      <Social/>
    </div>
  );
}
