import type { Metadata } from "next";
import {
  displayFont,
  navFont,
  scriptFont,
  bodyFont,
  monoFont,
  aboretoFont,
  rubikLinesFont,
} from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "XlassicStudio — Code is craft. Design is intent.",
  description:
    "Software engineer building brandworlds for the web. Premade websites and HTML email templates.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${displayFont.variable} ${navFont.variable} ${scriptFont.variable} ${bodyFont.variable} ${monoFont.variable} ${aboretoFont.variable} ${rubikLinesFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}