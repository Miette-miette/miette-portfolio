'use client'

import Header from "./_components/Header";
import Welcome from "./_components/Welcome";
import {EmblaCarousel} from "./_components/Projects";
import React, { useEffect } from 'react';
import dynamic from "next/dynamic";

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
        <Header/>
        
        <Welcome/>

        <Presentation/>


        <section id="travaux" className="absolute z-6">
          <h2 className="flex justify-center m-10 text-3xl md:text-5xl "> Mes réalisations </h2>
          <EmblaCarousel/>
        </section>


      </main>
    </div>
  );
}
