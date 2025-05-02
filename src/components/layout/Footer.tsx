import Link from "next/link";

const footerLinks = [
  {
    title: "Useful links",
    links: [
      { name: "Whitepaper", href: "/scythra-whitepaper.pdf" },
    ],
  },
  {
    title: "Socials",
    links: [
      { name: "Twitter (X)", href: "https://twitter.com/scythraofficial" },
      { name: "Telegram", href: "https://t.me/scythraofficial" },
      { name: "Instagram", href: "https://instagram.com/scythraofficial" },
      { name: "TikTok", href: "https://tiktok.com/@scythraofficial" },
    ],
  },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms And Conditions", href: "/terms-and-conditions" },
  { name: "Risk Disclosures", href: "/risk-disclosures" },
];

const socialIcons = [
  { href: "https://twitter.com/scythraofficial", icon: "twitter" },
  { href: "https://t.me/scythraofficial", icon: "telegram" },
  { href: "https://instagram.com/scythraofficial", icon: "instagram" },
  { href: "https://tiktok.com/@scythraofficial", icon: "tiktok" },
];

export function Footer() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="flex items-center mb-6">
            <img
              src="/images/Scythra-logo-new.png"
              alt="Scythra Logo"
              className="h-12 mr-4"
            />
            <img
              src="/images/Coin-Symbol-new.png"
              alt="Scythra Coin Symbol"
              className="h-16"
            />
          </div>
          <p className="text-2xl text-gold-light font-bold animate-glow">Born to Break Barriers</p>
        </div>
      </div>

      <footer className="bg-black/50 pt-12 border-t border-gold-dark/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {footerLinks.map((section) => (
              <div key={section.title} className="text-center md:text-left">
                <h4 className="text-gold-light font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-cyan-glow hover:animate-textGlow transition-all"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 py-6 border-t border-gold-dark/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gold-light hover:text-cyan-glow text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-6 my-4 md:my-0">
                {socialIcons.map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-light hover:text-cyan-glow transition-colors"
                  >
                    {social.icon === "twitter" && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                    {social.icon === "telegram" && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
                      </svg>
                    )}
                    {social.icon === "instagram" && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.218-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.977.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.88-.344 1.857-.047 1.053-.059 1.37-.059 4.04 0 2.67.01 2.987.059 4.04.045.977.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.88.3 1.857.344 1.054.047 1.37.059 4.04.059 2.67 0 2.987-.01 4.04-.059.977-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.88.344-1.857.047-1.054.059-1.37.059-4.04 0-2.67-.01-2.987-.059-4.04-.045-.977-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.88-.3-1.857-.344-1.053-.047-1.37-.059-4.04-.059zm0 3.063A5.135 5.135 0 1117.135 12 5.135 5.135 0 0112 6.865zm0 8.468A3.333 3.333 0 1115.333 12 3.333 3.333 0 0112 15.333zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
                      </svg>
                    )}
                    {social.icon === "tiktok" && (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>

              <div className="text-gold-light text-sm">
                Copyright © 2025
                <Link href="/" className="ml-1 hover:text-cyan-glow transition-colors">
                  Scythra
                </Link>
              </div>
            </div>
            <div className="text-gold-light/60 text-xs text-center mt-4">
              Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may fluctuate. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
