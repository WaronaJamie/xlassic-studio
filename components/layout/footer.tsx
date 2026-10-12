import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/playground", label: "Playground" },
  { href: "/services", label: "Services" },
  { href: "/store", label: "Store" },
  { href: "/contact", label: "Contacts" },
];

/* Replace `#` with your real profile URLs */
const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Fiverr" },
  { href: "#", label: "X" },
];

const legalLinks = [
  { href: "/legal", label: "Legal Notice" },
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/[0.06] text-white">
      <div className="px-6 md:px-10 py-14 md:py-20">
        {/* ---------- MAIN GRID ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* LEFT — logo + availability badge */}
          <div className="md:col-span-5 flex flex-col gap-6 items-start">
            <Link
              href="/"
              className="font-display text-3xl md:text-4xl tracking-wider text-white leading-none"
            >
              XlassicStudio
            </Link>

            <span className="inline-flex items-center gap-2.5 border border-white/15 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-white/70">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-white opacity-60 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-white" />
              </span>
              Available for projects
            </span>
          </div>

          {/* MIDDLE — nav */}
          <nav className="md:col-span-4">
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT — socials */}
          <nav className="md:col-span-3">
            <ul className="flex flex-col gap-3">
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ---------- BOTTOM BAR ---------- */}
        <div className="mt-14 md:mt-20 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-white/40">
            © {year} XlassicStudio
          </p>

          <ul className="flex items-center gap-3 md:gap-4">
            {legalLinks.map((l, i) => (
              <li key={l.href} className="flex items-center gap-3 md:gap-4">
                <Link
                  href={l.href}
                  className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </Link>
                {i < legalLinks.length - 1 && (
                  <span className="text-white/15">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}