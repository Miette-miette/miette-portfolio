'use client'

import Image from "next/image";
import Header from "./_components/Header";
import {EmblaCarousel} from "./_components/Projects";

export default function Home() {
  return (
    <main>
      <Header/>
      <section id="welcome" className="flex justif">

        <div id="welcome-content" className="flex flex-col w-150">
          <img src="./media/logo/logo-miette.png"/>
          <h1>Developpement Web | Design Graphique</h1>
          <button></button>
        </div>

        <div id="welcome-visuel">
        </div>

      </section>

      <section id="presentation" className="wrapper">
        <h2> Qui suis-je? </h2>
        <p>Je m'appelle Doriane Le Guyader, et je suis actuellement en pleine reconversion professionnelle
          vers les métiers du web.<br/>
          Véritable passionnée d'Arts et de design sous toutes leurs formes, le developpement web est à mon sens un incroyable terrain de jeu
          et d'expression!</p>
        <div id="presentation-anim" className="flex">
          <img src="./media/anim-laptop/corps.png" id="corps" className="size-50 relative"/>
          <img src="./media/anim-laptop/tete.png" id="tete" className="size-50 z-1 absolute"/>
          <img src="./media/anim-laptop/bras.png" id="bras" className="size-50 z-2 absolute"/>
          <img src="./media/anim-laptop/ordi.png" id="ordi" className="size-50 z-3 absolute"/>

        </div>

        <p> Titulaire d'un master en Design de la transition, qui m'a permis d'acquerir une methodologie axée sur le Design Thinking, je me suis d'abord formée en autodidacte
          au developpement web sur mon temps libre. Et du simple passe-temps est venu l'envie d'apprendre d'avantage!<br/>
          Je suis actuellement en formation DWWM à distance de l'EPSI, en attente du passage du titre professionnel.
        </p>

        <button>En savoir plus!</button>
      </section>


      <section id="travaux" className="wrapper">
        <h2> Mes réalisations </h2>
        <EmblaCarousel/>
      </section>


    </main>
  );
}
