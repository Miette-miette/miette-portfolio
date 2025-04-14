'use client'

import Welcome from "./_components/Welcome";
import Domaine from "./_components/Domaines";
import {EmblaCarousel} from "./_components/Projects";
import React from 'react';
import dynamic from "next/dynamic";
import { Formation } from "./_components/Formation";

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
        <Domaine/>
        <Formation/>
        <section id="travaux" className="relative w-full z-6 flex flex-col justify-center pb-40 text-amber-50">
          <h2 className="flex justify-center mt-10 m-5 text-3xl md:text-5xl text-center "> Découvrez mes réalisations </h2>
          <p className="flex justify-center text-center m-2">Sites Web, maquettages, designs graphiques et illustrations.</p>
          <div className="w-full overflow-hidden">
            <EmblaCarousel/>
          </div>
          
        </section>
      </main>
    </div>
  );
}
