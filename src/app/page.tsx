'use client'

import Welcome from "./_components/Welcome";
import Domaine from "./_components/Domaines";
import {CarouselDesign, CarouselWeb} from "./_components/Projects";
import React from 'react';
import dynamic from "next/dynamic";
import { Formation } from "./_components/Formation";
import Image from "next/image";

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
        <section id="portfolio" className="relative w-full z-6 flex flex-col justify-center pb-40 text-amber-50">
          <h2 className="flex justify-center mt-10 m-5 text-3xl md:text-5xl text-center "> Découvrez mes réalisations </h2>

          <div className="flex flex-row justify-center items-center">
            <Image src="/media/icons/Star.png" className='m-3 h-10' alt='etoile'/> 
            <h3 className="flex justify-center text-center text-2xl m-4">Site Web et maquettage</h3>
            <Image src="/media/icons/Star.png" className='m-3 h-10' alt='etoile'/> 
          </div>
          
          <div className="w-full overflow-hidden">
            <CarouselWeb/>
          </div>

          <div className="flex flex-row justify-center items-center">
            <Image src="/media/icons/Star.png" className='m-3 h-10' alt='etoile'/> 
            <h3 className="flex justify-center text-center text-2xl m-4">Design graphique et illustration</h3>
            <Image src="/media/icons/Star.png" className='m-3 h-10' alt='etoile'/> 
          </div>
          
          <div className="w-full overflow-hidden">
            <CarouselDesign/>
          </div>
          
        </section>
      </main>
    </div>
  );
}
