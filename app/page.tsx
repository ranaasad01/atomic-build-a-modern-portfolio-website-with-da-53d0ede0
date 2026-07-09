"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F0EDE8]">
      {/* Navigation */}
      <Navbar />

      {/* Hero — full-screen intro with headline, stats, and CTA */}
      <HeroSection />

      {/* Work — bento-grid portfolio showcase */}
      <WorkSection />

      {/* Services — sticky split layout listing AI engineering capabilities */}
      <ServicesSection />

      {/* About — personal background, team, and key metrics */}
      <AboutSection />

      {/* Testimonials — client quotes in card grid */}
      <TestimonialsSection />

      {/* Contact — split layout with form and office details */}
      <ContactSection />

      {/* Footer — brand, links, and social */}
      <FooterSection />
    </main>
  );
}
