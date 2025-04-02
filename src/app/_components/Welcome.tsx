'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Welcome() {

  return (
    <section id="welcome" className="flex justify-center items-center bg-[url(../../public/media/backgrounds/bg-xl-welcome-png.png)]  md:bg-[url(../../public/media/backgrounds/bg-xl-welcome-png.png)] bg-bottom bg-no-repeat bg-cover" >

        <div id="welcome-content" className="flex flex-col z-0 w-60 md:w-120 absolute">
            <Image src="/media/logo/logo-blanc.png" alt='logo'/>
            <h1 className='text-lg md:text-lg mt-3 text-amber-50'>Développement Web | Design Graphique | Illustration</h1> 
            <button></button>
        </div>

        <div id="welcome-visuel" className="flex flex-col z-1 w-60 md:w-120">

            <Link href="pages/WebProjects/NationSounds">
                <div className='flip-doodle absolute top-15 left-10 md:top-30 md:left-50'>
                    <div className='flip-doodle-inner'>
                        <div className='front-doodle flex justify-center items-center'>
                            <Image src="/media/doodle-anim/doodle3.svg" className="size-40 md:size-60 z-4 absolute" alt='doodle face'/>
                        </div>
                        <div className='back-doodle flex justify-center items-center'>
                            <Image src="/media/doodle-anim/doodle1back.svg" className="size-40 md:size-60 z-4 absolute" alt='doodle verso'/>
                            <h3 className='z-5 absolute text-base'>Festival<br/> Nation Sounds</h3>
                        </div>
                    </div>   
                </div>
            </Link>

            <Link href="pages/WebProjects/De-Toi-A-Moi">
                <div className='flip-doodle absolute top-120 right-5 md:top-20 md:right-50'>
                    <div className='flip-doodle-inner'>
                        <div className='front-doodle flex justify-center items-center'>
                            <Image src="/media/doodle-anim/doodle1.svg" className="size-40 md:size-50 z-4 absolute" alt='doodle face'/>
                        </div>
                        <div className='back-doodle flex justify-center items-center'>
                            <Image src="/media/doodle-anim/doodle1back.svg" className="size-40 md:size-50 z-4 absolute" alt='doodle verso'/>
                            <h3 className='z-5 absolute text-base'>De Toi à Moi<br/> et les<br/> P &#39 tits Bouts</h3>
                        </div>
                    </div>   
                </div>
            </Link>

            <Link href="pages/WebProjects/Champagne-And-Co">
                <div className='flip-doodle absolute top-20 right-5 md:top-90 md:left-70'>
                    <div className='flip-doodle-inner'>
                        <div className='front-doodle flex justify-center items-center'>
                            <Image src="/media/doodle-anim/doodleChamp.svg" className="size-30 md:size-40 z-4 absolute" alt='doodle face'/>
                        </div>
                        <div className='back-doodle flex justify-center items-center'>
                            <Image src="/media/doodle-anim/doodle1back.svg" className="size-40 md:size-40 z-4 absolute" alt='doodle verso'/>
                            <h3 className='z-5 absolute text-base'>Champagne<br/>&<br/>Co</h3>
                        </div>
                    </div>   
                </div>
            </Link>
            
            <Link href="pages/GraphicDesign/Logo-Lise-Beaufils-Photographe">
                <div className='flip-doodle absolute top-110 left-5 md:top-85 md:left-260'>
                    <div className='flip-doodle-inner'>
                        <div className='front-doodle flex justify-center items-center'>
                            <Image src="/media/doodle-anim/doodleLogoLise.svg" className="size-35 md:size-50 z-4 absolute" alt='doodle face'/>
                        </div>
                        <div className='back-doodle flex justify-center items-center'>
                            <Image src="/media/doodle-anim/doodle1back.svg" className="size-40 md:size-50 z-4 absolute" alt='doodle verso'/>
                            <h3 className='z-5 absolute text-base'>Lise<br/>Beaufils<br/>Photographe</h3>
                        </div>
                    </div>   
                </div>
            </Link>
        </div>

        
    </section>
  );
}