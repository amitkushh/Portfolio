"use client";

import LogoSection from "@/components/LogoSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import QuoteSection from "@/components/QuoteSection";
import Social from "@/components/Social";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}

      <div className="fixed inset-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#ff0080_100%)]"></div>
      <div className="px-5 py-20 lg:px-64 md:py-24">
        <LogoSection />
        <About />
        <Skills />
        <Projects />
        <QuoteSection />
        <Social />
      </div>
    </div>
  );
}
