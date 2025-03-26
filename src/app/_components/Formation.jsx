import React, { useCallback } from 'react'
import {PrevButton, NextButton, usePrevNextButtons} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

export function FormationCarousel() {
    
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (

        <section id="parcours" className="embla wrapper flex flex-col bg-[#768D68]" >
            <h2 className="flex justify-center text-3xl text-beige">Formations</h2>

            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex flex-row">
                    <div className="embla__slide bento-pink flex flex-col justify-center items-center" key="1">
                        <img src="../media/about/TP-dev.svg" className=" m-6"/>
                        <div>
                            <h2>TP Développeur web et web mobile (en attente de certification) </h2>
                            <h3>2025 / EPSI (Cours en ligne)</h3>
                            <p>Développer des applications responsives A ECRIRE ! Front-end Back-end Maquettage Sécurité</p>
                        </div> 
                    </div>

                    <div className="embla__slide bento-pink flex flex-col justify-center items-center" key="2">
                        <img src="../media/about/DNSEP.svg" className="m-6"/>
                        <div>
                            <h2>DNSEP Master Design de la transition</h2>
                            <h3>2020 / EESAB Brest </h3>
                            <p>Sensibilisation aux questions de transition écologique, sociale et économique, au travers des métiers du design. 
                                Développement de ma propre démarche de projet, axée sur la rêverie et l'approche sensible de concepts triviaux.</p>
                        </div>    
                    </div>

                    <div className="embla__slide bento-pink flex flex-col justify-center items-center" key="3">
                        <img src="../media/about/DNA.svg" className="m-6"/>
                        <div>
                            <h2>DNA option Design </h2>
                            <h3>2018 / EESAB Brest </h3>
                            <p>Design d'espace et d'objet avec une approche artistique. 
                                Apprentissage de la suite Adobe (axé d'avantage vers le print).</p>
                        </div>    
                    </div>

                    <div className="embla__slide bento-pink flex flex-col justify-center items-center" key="4">
                        <img src="../media/about/Prepa.svg" className="m-6"/>
                        <div>
                            <h2>Prépa Arts </h2>
                            <h3>2015 / École Emile Daubé Saint-Brieuc </h3>
                            <p>Exploration d'une multitude de techniques et de supports pour s'exprimer 
                                aux travers des arts visuels (peinture, sculpture, performance, vidéos).</p>
                        </div>    
                    </div>

                    <div className="embla__slide bento-pink flex flex-col justify-center items-center" key="5">
                        <img src="../media/about/BAC.svg" className="m-6"/>
                        <div>
                            <h2>BAC STD2A </h2>
                            <h3>2014 / Lycée Ste Geneviève Rennes</h3>
                            <p>Acquisition d'une culture artistique variée et d'un fort intérêt pour les arts et la création en générale.</p>
                        </div>    
                    </div>
                </div>
            </div>
            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton className="w-10" onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton className="w-10" onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
            
        </section>
    )
}
