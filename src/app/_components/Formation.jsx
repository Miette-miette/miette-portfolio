import React from 'react'
import {PrevButton, NextButton, usePrevNextButtons} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export function FormationCarousel() {
    
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (

        <section id="parcours" className="embla flex flex-col w-full bg-[#768D68]" >
            <h2 className="flex justify-center text-3xl md:text-4xl text-amber-50 mt-8">Formations</h2>

            <div className="embla__viewport bg-[url(/media/backgrounds/line.svg)] bg-no-repeat bg-center bg-contain p-10" ref={emblaRef}>
                <div className="embla__container flex flex-row ml-0 md:ml-100">
                    <div className="embla__slide bento-pink flex flex-col justify-center items-center" key="1">
                        <Image src="../media/about/TP-dev.svg" className="h-50 m-2"/>
                        <div className='m-2'>
                            <h2 className='text-xl'>TP Développeur web et web mobile (en attente de certification) </h2>
                            <h3>2025 / EPSI (Cours en ligne)</h3>
                            <p>Développer des applications responsives A ECRIRE ! Front-end Back-end Maquettage Sécurité</p>
                        </div> 
                    </div>

                    <div className="embla__slide bento-pink flex flex-col justify-center items-center" key="2">
                        <Image src="../media/about/DNSEP.svg" className="h-50 m-2"/>
                        <div className='m-2'>
                            <h2 className='text-xl'>DNSEP Master Design de la transition</h2>
                            <h3>2020 / EESAB Brest </h3>
                            <p>Sensibilisation aux questions de transition écologique, sociale et économique, au travers des métiers du design. 
                                Développement de ma propre démarche de projet, axée sur la rêverie et l'approche sensible de concepts triviaux.</p>
                        </div>    
                    </div>

                    <div className="embla__slide bento-pink flex flex-col justify-center items-center" key="3">
                        <Image src="../media/about/DNA.svg" className="h-50 m-2"/>
                        <div className='m-2'>
                            <h2 className='text-xl'>DNA option Design </h2>
                            <h3>2018 / EESAB Brest </h3>
                            <p>Design d'espace et d'objet avec une approche artistique. 
                                Apprentissage de la suite Adobe (axé davantage vers le print).</p>
                        </div>    
                    </div>

                    <div className="embla__slide bento-pink flex flex-col justify-center items-center" key="4">
                        <Image src="../media/about/Prepa.svg" className="h-50 m-2"/>
                        <div className='m-2'>
                            <h2 className='text-xl'>Prépa Arts </h2>
                            <h3>2015 / École Emile Daubé Saint-Brieuc </h3>
                            <p>Exploration d'une multitude de techniques et de supports pour s'exprimer 
                                aux travers des arts visuels (peinture, sculpture, performance, vidéos).</p>
                        </div>    
                    </div>

                    <div className="embla__slide bento-pink flex flex-col justify-center items-center" key="5">
                        <Image src="../media/about/BAC.svg" className="h-50 m-2"/>
                        <div className='m-2'>
                            <h2 className='text-xl'>BAC STD2A </h2>
                            <h3>2014 / Lycée Ste Geneviève Rennes</h3>
                            <p>Acquisition d'une culture artistique variée et d'un fort intérêt pour les arts et la création en générale.</p>
                        </div>    
                    </div>
                </div>
            </div>
            <div className="embla__controls flex justify-center items-center mb-10">
                <div className="embla__buttons">
                    <PrevButton className="w-10" onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton className="w-10" onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
            
        </section>
    )
}
