'use client'

import Welcome from "./_components/Welcome";
import {EmblaCarousel} from "./_components/Projects";
import React, { useEffect } from 'react';
import dynamic from "next/dynamic";
import Footer from "./_components/Footer";

export default function Home() {


const Presentation = dynamic(
  () => import("./_components/Presentation"),
  {
    ssr: false,
  }
);


  return (
    <div>
      <main>  
        <Welcome/>
        <Presentation/>
        <section id="travaux" className="absolute z-6">
          <h2 className="flex justify-center m-10 text-3xl md:text-5xl "> Découvrez mes réalisations </h2>
          <EmblaCarousel/>
        </section>
      </main>
    </div>
  );
}
