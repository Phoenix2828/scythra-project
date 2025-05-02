"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "./ConnectButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type CryptoType = "SOL" | "USDC";

export function PresaleForm() {
  const { isConnected } = useAccount();
  const [cryptoAmount, setCryptoAmount] = useState("");
  const [receiveSCT, setReceiveSCT] = useState("0");
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoType>("SOL");

  // Calculate SCT tokens based on input
  const handleCryptoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCryptoAmount(value);

    if (value && !Number.isNaN(Number.parseFloat(value))) {
      const amount = Number.parseFloat(value);
      // Current SCT price
      const sctPrice = 0.005; // Example $0.005 per token
      const cryptoPrice = selectedCrypto === "SOL" ? 120 : 1; // Example SOL price in USD

      const sctAmount = ((amount * cryptoPrice) / sctPrice).toFixed(2);
      setReceiveSCT(sctAmount);
    } else {
      setReceiveSCT("0");
    }
  };

  const handleBuy = () => {
    // In a real app, this would connect to a smart contract
    alert(`Purchase request initiated for ${cryptoAmount} ${selectedCrypto}.`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Button
          onClick={() => setSelectedCrypto("SOL")}
          variant={selectedCrypto === "SOL" ? "default" : "outline"}
          className={`w-1/2 mr-2 ${
            selectedCrypto === "SOL"
              ? "btn-gold-glow"
              : "border-gold-dark hover:bg-gold-dark/10 text-gold-light"
          }`}
        >
          Pay with SOL
        </Button>
        <Button
          onClick={() => setSelectedCrypto("USDC")}
          variant={selectedCrypto === "USDC" ? "default" : "outline"}
          className={`w-1/2 ml-2 ${
            selectedCrypto === "USDC"
              ? "btn-gold-glow"
              : "border-gold-dark hover:bg-gold-dark/10 text-gold-light"
          }`}
        >
          Pay with USDC
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-cyan-glow">Pay with {selectedCrypto}</span>
            <span className="text-gold-light">Balance: 0.00</span>
          </div>
          <div className="relative">
            <Input
              type="number"
              placeholder={`Enter ${selectedCrypto} amount`}
              className="bg-black/50 border-gold-dark text-gold-light"
              value={cryptoAmount}
              onChange={handleCryptoChange}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold-light">
              <div className="h-6 w-6 rounded-full bg-gold-light/10 text-[10px] flex items-center justify-center mr-2 inline-block">
                {selectedCrypto === "SOL" ? "SOL" : "$"}
              </div>
              {selectedCrypto}
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-cyan-glow">Receive SCT</span>
          </div>
          <div className="relative">
            <Input
              type="text"
              readOnly
              className="bg-black/50 border-gold-dark text-gold-light"
              value={receiveSCT}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold-light">
              <div className="h-6 w-6 rounded-full bg-gold-light/10 text-[10px] flex items-center justify-center mr-2 inline-block">
                SCT
              </div>
              SCT
            </div>
          </div>
        </div>

        {isConnected ? (
          <Button
            onClick={handleBuy}
            className="w-full btn-gold-glow"
            disabled={!cryptoAmount || Number.parseFloat(cryptoAmount) <= 0}
          >
            Buy Now
          </Button>
        ) : (
          <ConnectButton />
        )}

        <div className="text-center text-sm space-y-2 mt-2">
          <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden border border-gold-dark/30">
            <div
              className="bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark h-full rounded-full animate-glow"
              style={{ width: "35%" }}
            />
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gold-light">Presale: 35% Complete</span>
            <span className="text-gold-light">1 SCT = $0.005</span>
          </div>
        </div>
      </div>
    </div>
  );
}
