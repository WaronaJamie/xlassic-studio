import type { Metadata } from "next";
import { DesktopNav, MobileMenu } from "@/components/layout/navbar";
import { PlaygroundHero } from "@/components/playground/playground-hero";
import { PlaygroundCards } from "@/components/playground/playground-cards";

export const metadata: Metadata = {
  title: "Playground — XlassicStudio",
  description:
    "A live archive of things I've shipped, scrapped, and shipped again.",
};

export default function PlaygroundPage() {
  return (
    <>
      <MobileMenu />
      <DesktopNav />
      <PlaygroundHero />
      <PlaygroundCards />
    </>
  );
}