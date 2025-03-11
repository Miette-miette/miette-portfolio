'use client'

import Header from "./_components/Header";
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
        <section id="welcome" className="flex justify">

          <div id="welcome-content" className="flex flex-col w-150">
            <img src="./media/logo/logo-miette.png"/>
            <h1>Developpement Web | Design Graphique</h1> 
            <button></button>
          </div>

          <div id="welcome-visuel">
          </div>

        </section>

        <Presentation/>


        <section id="travaux" className="wrapper">
          <h2> Mes réalisations </h2>
          <EmblaCarousel/>
        </section>


      </main>
    </div>
  );
}
