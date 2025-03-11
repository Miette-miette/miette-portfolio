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
            <p>Je m'appelle Doriane Le Guyader, et je suis actuellement en pleine reconversion professionnelle
            vers les métiers du web.<br/>
            Véritable passionnée d'Arts et de design sous toutes leurs formes, le developpement web est à mon sens un incroyable terrain de jeu
            et d'expression!</p>
            <p> Titulaire d'un master en Design de la transition, qui m'a permis d'acquerir une methodologie axée sur le Design Thinking, je me suis d'abord formée en autodidacte
            au developpement web sur mon temps libre. Et du simple passe-temps est venu l'envie d'apprendre d'avantage!<br/>
            Je suis actuellement en formation DWWM à distance de l'EPSI, en attente du passage du titre professionnel.
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