import type { Metadata } from "next";
import { Coiny, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { AOSInit } from "./_components/aos";

const coiny = Coiny({
  weight: '400',
  subsets: ['latin'],
  display: "swap",
  variable: '--font-title'
})

const roboto = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-text'
})

export const metadata: Metadata = {
  title: "Miette Web Dev and Design",
  description: "Portfolio de Miette",
};


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="fr">
       <AOSInit />
      <body className={`${coiny.variable} ${roboto.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
