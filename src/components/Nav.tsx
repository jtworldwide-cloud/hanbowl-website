"use client";
import { useEffect, useState } from "react";
import { shop } from "@/data/shop";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#menu", label: "เมนู", labelEn: "Menu" },
    { href: "#about", label: "เกี่ยวกับ", labelEn: "About" },
    { href: "#location", label: "ร้าน", labelEn: "Location" },
    { href: "#order", label: "สั่งเลย", labelEn: "Order" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 sm:gap-3">
          <img src="/logo/hanbowl-mark.svg" alt="HAN BOWL" className="h-9 w-9 sm:h-11 sm:w-11" />
          <span className="font-display font-black text-charcoal text-xl sm:text-2xl tracking-wide">
            HAN <span className="text-terracotta">BOWL</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-charcoal">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-terracotta transition-colors relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-terracotta after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#order"
              className="bg-terracotta hover:bg-charcoal text-cream px-5 py-2.5 rounded-full font-semibold transition-colors"
            >
              สั่งอาหาร
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 grid place-items-center text-charcoal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            ) : (
              <>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {open && (
        <div className="md:hidden bg-cream border-t border-charcoal/10 animate-fade-in">
          <ul className="px-5 py-4 space-y-3 text-charcoal">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-medium"
                >
                  {l.label} <span className="text-charcoal/40 text-xs ml-1">{l.labelEn}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#order"
                onClick={() => setOpen(false)}
                className="block text-center bg-terracotta text-cream py-3 rounded-full font-semibold mt-2"
              >
                สั่งอาหาร
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
