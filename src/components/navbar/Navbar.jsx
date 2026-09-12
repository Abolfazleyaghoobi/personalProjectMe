
"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "خانه", href: "#home" },
  { label: "درباره من", href: "#about" },
  { label: "مهارت ها", href: "#skills" },
  { label: "پروژه ها", href: "#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /*
   * Detect page scroll.
   * After the user moves away from the top of the page,
   * the navbar receives the glass effect.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[#090E1C]/60 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex shrink-0 items-center w-18">
          <a href="#home" aria-label="خانه">
            <img
              src="/img/logo.webp"
              alt="لوگو سایت"
              className="h-auto w-30 object-contain sm:w-35"
            />
          </a>
        </div>

        {/* Desktop Menu + Mobile Menu */}
        <div className="flex items-center">

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="منوی اصلی"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#36E0BF]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-[9px] bg-[#36E0BF] px-5 py-3 text-sm font-semibold text-black transition-all duration-200 hover:opacity-90"
            >
              شروع همکاری
            </a>
          </nav>

          {/* Mobile / Tablet Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-[9px] border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
          >
            <span className="sr-only">
              {isOpen ? "بستن منو" : "باز کردن منو"}
            </span>

            <div className="flex w-5 flex-col gap-1.5">

              {/* Top line */}
              <span
                className={`h-0.5 w-full bg-current transition-transform duration-200 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              {/* Middle line */}
              <span
                className={`h-0.5 w-full bg-current transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Bottom line */}
              <span
                className={`h-0.5 w-full bg-current transition-transform duration-200 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="border-t border-white/10 bg-[#090E1C]/80 px-4 pb-5 pt-4 backdrop-blur-xl lg:hidden"
          dir="rtl"
        >
          <nav
            className="mx-auto flex w-full max-w-7xl flex-col gap-2"
            aria-label="منوی موبایل"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-[9px] px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/5 hover:text-[#36E0BF]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-[9px] bg-[#36E0BF] px-4 py-3 text-center text-sm font-semibold text-black transition-opacity duration-200 hover:opacity-90"
            >
              شروع همکاری
            </a>
          </nav>
        </div>
      )}
    </section>
  );
}

