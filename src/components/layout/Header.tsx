"use client";

import Link from "next/link";
import { ConnectButton } from "@/components/wallet/ConnectButton";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "FAQ", href: "#faq" },
  { name: "Whitepaper", href: "/scythra-whitepaper.pdf", external: true },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Account for header height
          behavior: 'smooth'
        });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-black/70 backdrop-blur-md sticky top-0 z-50 border-b border-gold-dark/30">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-4 flex items-center">
            <img
              src="/images/Scythra-logo-new.png"
              alt="Scythra Logo"
              className="h-10 mr-2"
            />
            <img
              src="/images/Coin-Symbol-new.png"
              alt="Scythra Coin Symbol"
              className="h-12"
            />
          </Link>

          <nav className="hidden lg:flex space-x-8 ml-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.external ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-glow hover:animate-textGlow transition-all"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-cyan-glow hover:animate-textGlow transition-all"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <ConnectButton />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gold-light"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        } bg-black border-t border-gold-dark/30`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.external ? (
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-cyan-glow hover:bg-gold-dark/10 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block px-3 py-2 text-cyan-glow hover:bg-gold-dark/10 rounded-md"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
