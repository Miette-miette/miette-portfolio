import React, { useEffect } from 'react';
import sr from './ScrollReveal';

export default function Presentation() {


useEffect(()=>{
  sr.reveal('.mount1', {
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    easing: 'ease',
    delay: 50,
    duration: 6000,
    reset: true
    })
},[])
useEffect(()=>{
    sr.reveal('.mount2', {
      origin: 'bottom',
      distance: '300px',
      scale: 1,
      easing: 'ease',
      delay: 150,
      duration: 5000,
      reset: true
      })
  },[])

  useEffect(()=>{
    sr.reveal('.mount3', {
      origin: 'bottom',
      distance: '400px',
      scale: 1,
      easing: 'ease',
      delay: 100,
      duration: 3000,
      reset: true
      })
  },[])

return(
    <section id="presentation" className='h-800px' >
          
          <h2 className='flex justify-center m-10 text-xl md:text-3xl'>Je développe comme je crée :<br/> avec passion, couleurs et une touche de fun !</h2>
          
          <div id="presentation-anim" className=" flex justify-center items-center relative z-3">
            <img src="./media/anim-laptop/corps.png" id="corps" className="size-60 md:size-100 z-4 relative"/>
            <img src="./media/anim-laptop/tete.png" id="tete" className="size-60 md:size-100 z-5 absolute"/>
            <img src="./media/anim-laptop/bras.png" id="bras" className="size-60 md:size-100 z-6 absolute"/>
            <img src="./media/anim-laptop/ordi.png" id="ordi" className="size-60 md:size-100 z-7 absolute"/>

          </div>

          <div id="bird-anim" className='flex items-end justify-center'>
            <img src="./media/backgrounds/oiseau1.svg" id="bird1" className="size-30 md:size-50 z-7 absolute left-10 md:left-70"/>
            <img src="./media/backgrounds/oiseau2.svg" id="bird2" className="size-30 md:size-50 z-7 absolute right-10 mb-40 md:right-70 md:mb-40"/>
          </div>

          <div id="bg-anim" className="mountAnim flex flex-col justify-end z-0" >
            <img src="./media/backgrounds/montagne1.svg" className="mount1 z-2 absolute object-cover object-top h-80 md:h-110"/>
            <img src="./media/backgrounds/montagne2.svg" className="mount2 z-1 absolute object-cover object-top h-140 "/>
            <img src="./media/backgrounds/montagne3.svg" className="mount3 z-0 absolute object-cover object-top h-180 md:h-160"/>

            <div className="wrapper relative z-3 flex justify-center items-center">
              <button className='bg-[url(../../public/media/button/button-m.svg)] bg-center bg-no-repeat bg-contain p-12 text-2xl'>Qui suis-je?</button>
            </div>
          </div>
          
          
        </section>
)
}