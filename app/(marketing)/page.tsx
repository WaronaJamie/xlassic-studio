import { Loader } from "@/components/animations/loader";
import { DesktopNav, MobileMenu } from "@/components/layout/navbar";
import { WorkSection } from "@/components/sections/work-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { FAQSection } from "@/components/sections/faq-section";
import { MarqueeSection } from "@/components/sections/marquee-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <Loader />
      <MobileMenu />

      <div className="relative">
        {/* HERO */}
        <section className="flex flex-col md:min-h-[calc(100vh-5rem)] px-6 md:px-10 py-6 md:py-8">
          {/* Mobile header */}
          <div className="flex md:hidden items-start justify-between gap-4">
            <p className="font-display text-2xl tracking-wider text-white leading-none shrink-0">
              XlassicStudio
            </p>
            <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-white/70 leading-snug text-right pt-1">
              Code is craft
              <br />
              Design is intent.
            </p>
          </div>

          {/* Desktop header */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-6 md:items-start">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-white/70 leading-relaxed">
              Based In Botswana,
              <br />
              XlassicWebs for Everyone
            </p>
            <p className="font-display text-3xl tracking-wider text-white text-center leading-none">
              XlassicStudio
            </p>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-white/70 leading-relaxed text-right">
              Code is craft
              <br />
              Design is intent.
            </p>
          </div>

          {/* Statement */}
          <div className="mt-10 md:mt-0 md:flex-1 md:flex md:items-center">
            <h1 className="font-display text-[13vw] md:text-[10vw] leading-[0.85] uppercase tracking-tight text-white">
              Not just another
              <br />
              <span className="text-white/30">Creative studio</span>
            </h1>
          </div>
        </section>

        {/* DESKTOP STICKY NAV */}
        <DesktopNav />

        {/* WORK — horizontal scroll-jacked section */}
        <WorkSection />
        {/* WORK — horizontal scroll-jacked section */}
         <ServicesSection />
        
         {/* ABOUT — horizontal scroll-jacked section */}
           <AboutSection />
          
           {/* FAQ — horizontal scroll-jacked section */}
           <FAQSection />

           {/* Scroll Effect  */}
           <MarqueeSection />

           {/* Contact Section  */}
           <ContactSection />
              </div>
    </>
  );
}