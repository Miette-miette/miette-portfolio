import type { Metadata } from "next";
import { Coiny, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const coiny = Coiny({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-coiny'
})

const roboto = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Miette Web Dev and Design",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
