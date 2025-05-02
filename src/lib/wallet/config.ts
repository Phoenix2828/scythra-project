import { defaultWagmiConfig } from '@web3modal/wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { mainnet, avalanche, arbitrum } from 'viem/chains';

// 1. Get projectId at https://cloud.walletconnect.com
// This is a demo project ID, replace with your own in a production app
const projectId = 'YOUR_PROJECT_ID';

// 2. Create wagmiConfig
const metadata = {
  name: 'Scythra',
  description: 'Scythra - Born to Break Barriers',
  url: 'https://scythra.com',
  icons: ['/images/Coin-Symbol.png']
};

// Using mainnet as placeholder - in real implementation would use Solana when supported
export const chains = [mainnet, avalanche, arbitrum] as const;

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#d4af37',
    '--w3m-color-mix': '#d4af37',
    '--w3m-color-mix-strength': 40,
  }
});
