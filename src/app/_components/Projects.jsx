import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import Image from 'next/image'

export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla wrapper" ref={emblaRef}>
      <div className="embla__container">

        <div className="embla__slide">
          <Link href="/pages/WebProjects/NationSounds">
            <div className="bento-beige flex flex-col justify-center items-center">
              <Image src="/media/projets/NationSoundsBanner.png"/>
              <h2 className="text-2xl md:text-3xl mt-3">Nation-Sounds Festival</h2>
              <p>Site mobile et solution de gestion de contenu pour un festival fictif.</p> 
            </div>
          </Link>
        </div>
       
        <div className="embla__slide">
          <Link href="/pages/WebProjects/De-Toi-A-Moi">
            <div className="bento-beige flex flex-col justify-center items-center">
              <Image src="/media/projets/deToiAMoiBanner.png"/>
              <h2 className="text-2xl md:text-3xl mt-3">De Toi A Moi et Les P'tits Bouts</h2>
              <p>Site vitrine pour un dépot-vente de vêtement seconde main à Cesson-Sévigné</p> 
            </div>
          </Link>
        </div> 

        <div className="embla__slide">
          <Link href="/pages/GraphicDesign/Logo-Lise-Beaufils-Photographe">
            <div className="bento-beige flex flex-col justify-center items-center">
              <Image src="/media/projets/LogoBanner.png"/>
              <h2 className="text-2xl md:text-3xl mt-3">Lise Beaufils Photographe</h2>
              <p>Création d'une déclinaison de logos pour une photographe.</p> 
            </div>
          </Link>  
        </div>

        <div className="embla__slide">
          <Link href="/pages/WebProjects/Champagne-And-Co">
            <div className="bento-beige flex flex-col justify-center items-center">
              <Image src="/media/projets/ChampagneCoBanner.png"/>
              <h2 className="text-2xl md:text-3xl mt-3">Champagne & Co</h2>
              <p>Projet de maquettage d’un site web pour une entreprise fictive de vente de champagnes</p> 
            </div>
          </Link>
        </div>

        <div className="embla__slide">
          <Link href="/pages/GraphicDesign/Plastique">
            <div className="bento-beige flex flex-col justify-center items-center">
              <Image src="/media/projets/PlastiqueBanner.png"/>
              <h2 className="text-2xl md:text-3xl mt-3">Plastique</h2>
              <p>Réalisation d'un clip pour la musique « Plastique » écrite  et produite par Quentin & Tess (CRD Laval).</p> 
            </div>
          </Link>    
        </div>
      </div>
    </div>
  )
}