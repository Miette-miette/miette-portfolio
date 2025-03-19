import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla wrapper" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className="bento-beige flex flex-col justify-center items-center">
            <img src="../media/projets/NationSoundsBanner.png"/>
            <h2 className="text-2xl md:text-3xl mt-3">Nation-Sounds Festival</h2>
            <p>Un projet </p> 
          </div>
        </div>

        <div className="embla__slide">
          <div className="bento-beige flex flex-col justify-center items-center">
            <img src="../media/projets/deToiAMoiBanner.png"/>
            <h2 className="text-2xl md:text-3xl mt-3">De Toi A Moi et Les P'tits Bouts</h2>
            <p>description</p> 
          </div>
        </div>

        <div className="embla__slide">
          <div className="bento-beige flex flex-col justify-center items-center">
            <img src="../media/projets/ChampagneCoBanner.png"/>
            <h2 className="text-2xl md:text-3xl mt-3">Champagne & Co</h2>
            <p>description</p> 
          </div>
        </div>

        <div className="embla__slide">
          <div className="bento-beige flex flex-col justify-center items-center">
            <img src="../media/projets/ChampagneCoBanner.png"/>
            <h2 className="text-2xl md:text-3xl mt-3">Champagne & Co</h2>
            <p>description</p> 
          </div>  
        </div>
      </div>
    </div>
  )
}