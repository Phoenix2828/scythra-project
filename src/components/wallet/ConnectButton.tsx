"use client";

import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export const ConnectButton = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);

  // Client-side only
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button className="btn-gold-glow rounded-md">
        Connect Wallet
      </Button>
    );
  }

  if (isConnected && address) {
    return (
      <Button
        onClick={() => open({ view: 'Account' })}
        className="btn-gold-glow rounded-md"
      >
        {address.slice(0, 6)}...{address.slice(-4)}
      </Button>
    );
  }

  return (
    <Button
      onClick={() => open()}
      className="btn-gold-glow rounded-md"
    >
      Connect Wallet
    </Button>
  );
};
