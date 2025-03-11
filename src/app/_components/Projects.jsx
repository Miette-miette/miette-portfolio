import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
            <h3>Nation Sounds Festival</h3>
            <p>Projet web full stack fictif</p>
        </div>
        <div className="embla__slide">
            <h3>De Toi à Moi et les P'tits Bouts</h3>
            <p>Site vitrine pour un dépot-vente de vetement seconde-main.</p>
        </div>
        <div className="embla__slide">
            <h3>Champagne & Co</h3>
            <p>Projet fictif de maquettage d'un site web pour un revendeur de champagne</p>
        </div>
        <div className="embla__slide">
            <h3>Plastique</h3>
            <p>Clip réalisé en stop motion pour l'artiste Quentin</p>
        </div>
      </div>
    </div>
  )
}