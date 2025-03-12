'use client'

import React, { useEffect } from 'react';



export default function Welcome() {

  return (
    <section id="welcome" className="flex justify-center items-center">

        <div id="welcome-content" className="flex flex-col z-0 w-120 absolute">
            <img src="./media/logo/logo-miette.png"/>
            <h1>Developpement Web | Design Graphique</h1> 
            <button></button>
        </div>

        <div id="welcome-visuel" className="flex flex-col z-1 w-120">

            <div className='flip-doodle absolute top-30 left-50'>
                <div className='flip-doodle-inner'>
                    <div className='front-doodle flex justify-center items-center'>
                        <img src="./media/doodle-anim/doodle3.svg" className="size-60 z-4 absolute"/>
                    </div>
                    <div className='back-doodle flex justify-center items-center'>
                        <img src="./media/doodle-anim/doodle1back.svg" className="size-60 z-4 absolute"/>
                        <h3 className='z-5 absolute'>Festival<br/> Nation Sounds</h3>
                    </div>
                </div>   
            </div>

            <div className='flip-doodle absolute top-80 right-60'>
                <div className='flip-doodle-inner'>
                    <div className='front-doodle flex justify-center items-center'>
                        <img src="./media/doodle-anim/doodle1.svg" className="size-50 z-4 absolute"/>
                    </div>
                    <div className='back-doodle flex justify-center items-center'>
                        <img src="./media/doodle-anim/doodle1back.svg" className="size-50 z-4 absolute"/>
                        <button className='z-5 absolute'>
                            <h3 >De Toi à Moi<br/> et les<br/> P'tits Bouts</h3>
                        </button>
                        
                    </div>
                </div>   
            </div>
            
        </div>

        
    </section>
  );
}