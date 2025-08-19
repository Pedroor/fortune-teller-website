import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mãe Amanda Cartomante - Transformo Vidas Através de Magia",
  description: "Descubra os segredos que o universo tem para você. Consultas com Baralho Cigano, Tarot, Oráculo de Ossos e Jogo de Exu. Mãe de Santo especialista em amarração amorosa e abertura de caminhos.",
  keywords: "cartomante, baralho cigano, tarot, jogo de exu, oráculo de ossos, mãe de santo, amarração amorosa, abertura de caminhos, consulta espiritual, São Paulo",
  authors: [{ name: "Mãe Amanda Cartomante" }],
  openGraph: {
    title: "Mãe Amanda Cartomante - Transformo Vidas Através de Magia",
    description: "Consultas espirituais com Baralho Cigano, Tarot, Jogo de Exu e Oráculo de Ossos. Transforme sua vida com sabedoria ancestral.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
