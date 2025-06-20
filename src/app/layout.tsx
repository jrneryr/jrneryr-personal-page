import type { Metadata } from "next";
import { Geist_Mono, Ubuntu } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jrneryr personal page",
  description: "Jrneryr's personal page front-end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${ubuntu.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
