'use client'

import React, { useEffect } from 'react';
import dynamic from "next/dynamic";

export default function Welcome() {


  return (
    <section id="welcome" className="flex justify-center items-center">

        <div id="welcome-content" className="flex flex-col z-0 w-120 absolute">
            <img src="./media/logo/logo-miette.png"/>
            <h1>Developpement Web | Design Graphique</h1> 
            <button></button>
          </div>

          <div id="welcome-visuel" className="flex flex-col z-1 w-120">
            <img src="./media/doodle-anim/doodle1.svg" id='doodle1' className="size-40 z-4 absolute"/>
            <img src="./media/doodle-anim/doodle2.svg" id='doodle2' className="size-40 z-4 absolute"/>
            <img src="./media/doodle-anim/doodle3.svg" id='doodle3' className="size-40 z-4 absolute"/>
          </div>
        </section>
  );
}