import type { Metadata } from "next";
import { DesktopNav, MobileMenu } from "@/components/layout/navbar";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactChannels } from "@/components/contact/contact-channels";
import { ContactForm } from "@/components/contact/contact-form";
import { AvailabilityStrip } from "@/components/contact/availability-strip";
import { ContactFAQ } from "@/components/contact/contact-faq";

export const metadata: Metadata = {
  title: "Contact — XlassicStudio",
  description:
    "Start a project, ask a question, or just say hi. Based in Botswana, working worldwide.",
};

export default function ContactPage() {
  return (
    <>
      <MobileMenu />
      <DesktopNav />
      <ContactHero />
      <AvailabilityStrip />
      <ContactChannels />
      <ContactForm />
      <ContactFAQ />
    </>
  );
}