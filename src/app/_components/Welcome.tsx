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

            <Image src="/media/icons/bulle-flip.svg" className='h-15 md:h-20 absolute top-[64%] right-[48%] md:right-[30%]' alt='flip'/>

            <Link href="pages/WebProjects/NationSounds">
                <div className='flip-doodle absolute top-[12%] left-[6%] sm:top-[13%] sm:left-[12%]'>
                    <div className='flip-doodle-inner'>
                        <div className='front-doodle flex justify-center items-center'>
                            <Image src="/media/doodle-anim/doodle3.svg" className="size-35 md:size-60 z-4 absolute" alt='doodle face'/>
                        </div>
                        <div className='back-doodle flex justify-center items-center'>
                            <Image src="/media/doodle-anim/doodle1back.svg" className="size-35 md:size-60 z-4 absolute" alt='doodle verso'/>
                            <h3 className='z-5 absolute text-base'>Festival<br/> Nation Sounds</h3>
                        </div>
                    </div>   
                </div>
            </Link>

            <Link href="pages/WebProjects/De-Toi-A-Moi">
                <div className='flip-doodle absolute top-[58%] right-[2%] sm:top-[60%] sm:right-[15%]'>
                    <div className='flip-doodle-inner'>
                        <div className='front-doodle flex justify-center items-center'>
                            <Image src="/media/doodle-anim/doodle1.svg" className="size-32 md:size-50 z-4 absolute" alt='doodle face'/>
                        </div>
                        <div className='back-doodle flex justify-center items-center'>
                            <Image src="/media/doodle-anim/doodle1back.svg" className="size-32 md:size-50 z-4 absolute" alt='doodle verso'/>
                            <h3 className='z-5 absolute text-base'>De Toi à Moi</h3>
                        </div>
                    </div>   
                </div>
            </Link>

            <Link href="pages/WebProjects/Champagne-And-Co">
                <div className='flip-doodle absolute top-[16%] right-[2%] sm:top-[18%] sm:right-[10%]'>
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
                <div className='flip-doodle absolute top-[64%] left-[4%] sm:top-[66%] sm:left-[15%]'>
                    <div className='flip-doodle-inner'>
                        <div className='front-doodle flex justify-center items-center'>
                            <Image src="/media/doodle-anim/doodleLogoLise.svg" className="size-32 md:size-50 z-4 absolute" alt='doodle face'/>
                        </div>
                        <div className='back-doodle flex justify-center items-center'>
                            <Image src="/media/doodle-anim/doodle1back.svg" className="size-32 md:size-50 z-4 absolute" alt='doodle verso'/>
                            <h3 className='z-5 absolute text-base'>Lise<br/>Beaufils<br/>Photographe</h3>
                        </div>
                    </div>   
                </div>
            </Link>
        </div>

        
    </section>
  );
}