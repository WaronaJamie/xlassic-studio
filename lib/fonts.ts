import {
  Bangers,
  Share_Tech,
  Zeyada,
  Palanquin_Dark,
  JetBrains_Mono,
  Aboreto,
  Rubik_Lines,
} from "next/font/google";

export const displayFont = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const navFont = Share_Tech({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nav",
  display: "swap",
});

export const scriptFont = Zeyada({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const bodyFont = Palanquin_Dark({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const monoFont = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const aboretoFont = Aboreto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aboreto",
  display: "swap",
});

export const rubikLinesFont = Rubik_Lines({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-lines",
  display: "swap",
});