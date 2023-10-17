import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wallet Connect DAPP",
  description: "A DAPP using WallletConnectV3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
