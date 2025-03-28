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
        <section id="travaux" className="relative w-full z-6 flex flex-col justify-center">
          <h2 className="flex justify-center m-10 text-3xl md:text-5xl text-center"> Découvrez mes réalisations </h2>
          <p className="flex justify-center text-center m-2">Sites Web, maquettages, designs graphiques et illustrations.</p>
          <EmblaCarousel/>
        </section>
      </main>
    </div>
  );
}
