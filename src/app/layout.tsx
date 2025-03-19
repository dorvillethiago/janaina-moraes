import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
})

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700"
  ]
});

export const metadata: Metadata = {
  title: "Janaína Moraes - Contabilidade",
  description: "Educação Financeira, Contabilidade e BPO Financeiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body
        className={`${inter.variable} ${lora.variable} ${ibmPlexSans.variable} antialiased min-h-full`}
      >
        {children}
      </body>
    </html>
  );
}
