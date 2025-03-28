import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme";

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
  keywords: "contabilidade, educação financeira, bpo financeiro, consultoria financeira",
  authors: {
    name: "Janaína Moraes",
  },
  openGraph: {
    locale: "pt_BR",
    siteName: "Janaína Moraes - Contabilidade",
    type: "website",
    description: "Educação Financeira, Contabilidade e BPO Financeiro",
    images: "/icon.png"
  },
  robots: {
    index: true,
    follow: false,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${lora.variable} ${ibmPlexSans.variable} antialiased min-h-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
