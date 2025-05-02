import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scythra - Born to Break Barriers",
  description:
    "Scythra: Revolutionary cryptocurrency designed to break barriers in the DeFi space, offering innovative solutions for cross-chain compatibility and enhanced security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gradient-to-br from-black via-black to-black text-gray-200 min-h-screen`}
      >
        <ThemeProvider defaultTheme="dark">
          <ClientBody>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ClientBody>
        </ThemeProvider>
      </body>
    </html>
  );
}
