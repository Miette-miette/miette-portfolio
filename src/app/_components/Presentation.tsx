import React, { useEffect } from 'react';
import sr from './ScrollReveal';

export default function Presentation() {


useEffect(()=>{
  sr.reveal('.mount1', {
    origin: 'bottom',
    distance: '500px',
    scale: 1,
    easing: 'ease',
    delay: 100,
    duration: 5000,
    reset: false
    })
},[])
useEffect(()=>{
    sr.reveal('.mount2', {
      origin: 'bottom',
      distance: '500px',
      scale: 1,
      easing: 'ease',
      delay: 200,
      duration: 4000,
      reset: false
      })
  },[])

  useEffect(()=>{
    sr.reveal('.mount3', {
      origin: 'bottom',
      distance: '500px',
      scale: 1,
      easing: 'ease',
      delay: 300,
      duration: 2000,
      reset: false
      })
  },[])

return(
    <section id="presentation" >

          <div className="wrapper">
            <h2> Qui suis-je? </h2>
            <p>Autodidacte passionnée par le développement web, mon souhait est de faire de ce passe-temps mon métier.<br/>
                Étant titulaire d’un DNSEP (Diplôme National Supérieur d’Expression Plastique) option Design de la transition, le Design Thinking et la créativité sont essentiels à ma méthodologie.<br/>
                Actuellement en attente de validation de la formation à distance DWWM de l'EPSI, je souhaite me professionnaliser dans ce domaine et ainsi concrétiser mon désir de reconversion.
            </p>
            <button>En savoir plus!</button>
          </div>

          <div id="presentation-anim" className="flex justify-center items-center">
            <img src="./media/anim-laptop/corps.png" id="corps" className="size-100 z-4 relative"/>
            <img src="./media/anim-laptop/tete.png" id="tete" className="size-100 z-5 absolute"/>
            <img src="./media/anim-laptop/bras.png" id="bras" className="size-100 z-6 absolute"/>
            <img src="./media/anim-laptop/ordi.png" id="ordi" className="size-100 z-7 absolute"/>

          </div>

          <div id="bird-anim" className='flex items-start justify-between'>
            <img src="./media/backgrounds/oiseau1.svg" className="size-40 z-7 absolute"/>
          </div>

          <div id="bg-anim" className="mountAnim flex flex-col justify-end" >
            <img src="./media/backgrounds/montagne1.svg" className="mount1 z-2 absolute "/>
            <img src="./media/backgrounds/montagne2.svg" className="mount2 z-1 absolute "/>
            <img src="./media/backgrounds/montagne3.svg" className="mount3 z-0 absolute "/>
          </div>
        </section>
)
}