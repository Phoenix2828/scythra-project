import Image from "next/image";
import Link from "next/link";
import { PresaleForm } from "@/components/wallet/PresaleForm";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero section */}
      <section id="home" className="pt-16 pb-24 md:pt-24 md:pb-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold-dark/5 via-gold-light/5 to-transparent" />
          <div className="absolute bottom-0 left-1/4 w-1/2 h-96 bg-gold-light/5 blur-[100px] rounded-full" />
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-glow/5 blur-[80px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gold-gradient">Scythra</span>
              <br />
              <span className="text-cyan-glow animate-textGlow">
                Born to Break Barriers
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gold-light mb-8">
              Join the revolution with Scythra - the future of decentralized finance
            </p>
            <a
              href="#presale-form"
              className="btn-gold-glow hover:from-gold-dark hover:to-gold-light text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg"
            >
              Join Presale
            </a>
          </div>

          {/* Presale Form Section */}
          <div id="presale-form" className="max-w-lg mx-auto relative">
            <div className="bg-black/40 backdrop-blur-lg rounded-xl border border-gold-dark/30 shadow-xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-center text-gold-light">
                Scythra Presale - Phase 1
              </h2>
              <p className="text-center mb-4">
                Current Price: <span className="text-gold-light font-semibold">$0.005</span>
              </p>
              <div className="mb-6">
                <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden border border-gold-dark/30">
                  <div className="bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark h-full rounded-full animate-glow" style={{ width: '35%' }} />
                </div>
                <div className="flex justify-between text-sm text-gold-light/80 mt-1">
                  <span>Raised: $1,750,000</span>
                  <span>Target: $5,000,000</span>
                </div>
              </div>

              <PresaleForm />
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 relative bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gold-gradient">
                Roadmap
              </span>
            </h2>
            <p className="text-cyan-glow">
              Our strategic path to revolutionize the cryptocurrency landscape
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/images/Front-coin.png"
                alt="Scythra Coin Front"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/Back-coin.png"
                alt="Scythra Coin Back"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-black/50 rounded-lg p-6 border border-gold-dark/30 transform transition-all hover:border-gold-light hover:scale-105">
              <h3 className="text-xl font-semibold mb-3 text-gold-light">Phase 1: Foundation</h3>
              <ul className="space-y-2 text-cyan-glow list-disc pl-5">
                <li>Token Launch & Presale</li>
                <li>Community Building</li>
                <li>Initial Exchange Listings</li>
                <li>Core Team Expansion</li>
              </ul>
            </div>
            <div className="bg-black/50 rounded-lg p-6 border border-gold-dark/30 transform transition-all hover:border-gold-light hover:scale-105">
              <h3 className="text-xl font-semibold mb-3 text-gold-light">Phase 2: Growth</h3>
              <ul className="space-y-2 text-cyan-glow list-disc pl-5">
                <li>DeFi Protocol Integration</li>
                <li>Strategic Partnerships</li>
                <li>Cross-Chain Compatibility</li>
                <li>Enhanced Security Audits</li>
              </ul>
            </div>
            <div className="bg-black/50 rounded-lg p-6 border border-gold-dark/30 transform transition-all hover:border-gold-light hover:scale-105">
              <h3 className="text-xl font-semibold mb-3 text-gold-light">Phase 3: Evolution</h3>
              <ul className="space-y-2 text-cyan-glow list-disc pl-5">
                <li>Expansion into New Markets</li>
                <li>Advanced Features Rollout</li>
                <li>DAO Governance Implementation</li>
                <li>Ecosystem Development Fund</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-12">
            <img
              src="/images/Roadmap-chart.png"
              alt="Scythra Roadmap Visual"
              className="max-w-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gold-gradient">
                Tokenomics
              </span>
            </h2>
            <p className="text-cyan-glow">
              Strategic allocation designed for sustainable growth and community benefits
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/images/Front-coin.png"
                alt="Scythra Coin Front"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/Back-coin.png"
                alt="Scythra Coin Back"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-black/50 rounded-lg p-5 border border-gold-dark/30 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gold-light">Token Supply</h3>
              <p className="text-cyan-glow font-bold text-xl">1,000,000,000</p>
              <p className="text-gold-light/80 text-sm">Total SCT</p>
            </div>
            <div className="bg-black/50 rounded-lg p-5 border border-gold-dark/30 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gold-light">Presale</h3>
              <p className="text-cyan-glow font-bold text-xl">35%</p>
              <p className="text-gold-light/80 text-sm">350,000,000 SCT</p>
            </div>
            <div className="bg-black/50 rounded-lg p-5 border border-gold-dark/30 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gold-light">Liquidity</h3>
              <p className="text-cyan-glow font-bold text-xl">25%</p>
              <p className="text-gold-light/80 text-sm">250,000,000 SCT</p>
            </div>
            <div className="bg-black/50 rounded-lg p-5 border border-gold-dark/30 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gold-light">Ecosystem</h3>
              <p className="text-cyan-glow font-bold text-xl">40%</p>
              <p className="text-gold-light/80 text-sm">400,000,000 SCT</p>
            </div>
          </div>

          <div className="text-center">
            <img
              src="/images/Tokenomics-chart.png"
              alt="Scythra Tokenomics Visual"
              className="max-w-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gold-gradient">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-cyan-glow">
              Everything you need to know about Scythra
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-black/50 rounded-lg p-6 border border-gold-dark/30">
                <h3 className="text-xl font-semibold mb-2 text-gold-light">What is Scythra?</h3>
                <p className="text-cyan-glow">
                  Scythra is a revolutionary cryptocurrency designed to break barriers in the DeFi space, offering innovative solutions for cross-chain compatibility and enhanced security features.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg p-6 border border-gold-dark/30">
                <h3 className="text-xl font-semibold mb-2 text-gold-light">How can I participate in the presale?</h3>
                <p className="text-cyan-glow">
                  You can participate in the Scythra presale by connecting your wallet on our website and purchasing tokens using SOL or USDC. The process is simple, secure, and designed for both experienced and new crypto users.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg p-6 border border-gold-dark/30">
                <h3 className="text-xl font-semibold mb-2 text-gold-light">When will Scythra be listed on exchanges?</h3>
                <p className="text-cyan-glow">
                  Scythra is scheduled to be listed on major exchanges following the completion of our presale phases. We are already in discussions with several top-tier exchanges to ensure a smooth transition from presale to public trading.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg p-6 border border-gold-dark/30">
                <h3 className="text-xl font-semibold mb-2 text-gold-light">Is there a vesting period for presale tokens?</h3>
                <p className="text-cyan-glow">
                  Yes, presale tokens have a structured vesting period to ensure market stability. 40% of your purchased tokens will be available at TGE (Token Generation Event), with the remaining 60% vested linearly over 6 months.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg p-6 border border-gold-dark/30">
                <h3 className="text-xl font-semibold mb-2 text-gold-light">How is Scythra different from other cryptocurrencies?</h3>
                <p className="text-cyan-glow">
                  Scythra stands out with its innovative approach to solving real-world blockchain challenges. Our unique technology stack, experienced team, and community-focused development create a sustainable ecosystem designed for long-term growth and adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gold-gradient">
                Join the Scythra Revolution
              </span>
            </h2>
            <p className="text-cyan-glow text-lg mb-8">
              Be part of the future of decentralized finance. Secure your position in the Scythra ecosystem today and unlock the potential of next-generation blockchain technology.
            </p>

            <a
              href="#presale-form"
              className="btn-gold-glow px-8 py-4 rounded-lg text-black text-lg font-bold inline-block"
            >
              Buy SCT Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
