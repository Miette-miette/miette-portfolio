'use client'

import { Breadcrumbs } from "@/app/_components/breadcrumbs/breadcrumbs"
import { EmblaCarousel } from "@/app/_components/Projects"
import Image from "next/image"


export default function NationSounds() {

    return (
        <main>
            <section className="h-120 md:h-130 relative z-0 bg-[url(../../public/media/backgrounds/head-lightgreen-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50 text-center">
                <div className="relative z-10 flex flex-row justify-center pt-15 mb:pt-30 pb-6 mb-8 bg-[url(../../public/media/backgrounds/head-project.svg)]">
                    <Breadcrumbs/>
                </div>           
                <h1 className="flex justify-center p-7 mb-8 text-2xl md:text-5xl bg-[url(../../public/media/button/button-xxl.svg)] bg-center bg-no-repeat bg-contain text-[#B36E7B]">Nation Sounds Festival</h1>
                <p className="flex justify-center text-center ml-10 mr-10">Site mobile et solution de gestion de contenu pour un festival fictif.</p>
                <p className="flex justify-center">ReactJS - Symfony 8 - EasyAdmin</p>
            </section>
            
            <section className="p-5 md:pr-60 md:pl-60 flex flex-col items-center -mt-30 pt-20 relative z-1">
                <div className="mockup">
                    <div className='flip-mockup relative w-90 h-90 md:w-200 md:h-120'>
                        <div className='flip-mockup-inner flex flex-col justify-center items-center'>
                            <div className='front-doodle md:bg-[url(../../public/media/projets/mockupNSDesktop.png)] bg-[url(../../public/media/projets/mockupNationSoundsMobile.png)] bg-contain bg-center bg-no-repeat flex justify-center items-center'></div>
                            <div className='back-doodle md:bg-[url(../../public/media/projets/mockupNationSoundsMobile.png)] bg-[url(../../public/media/projets/mockupNSDesktop.png)] bg-contain bg-center bg-no-repeat flex justify-center items-center'></div>
                        </div>   
                    </div>
                </div>

                <div className="content">

                    <div className="bento-beige">
                        <div className="m-1 md:m-5">
                            <h2 className="text-3xl mb-5 text-center">Un projet full-stack fictif</h2>
                            <p>En partant de la création de l&#39;identité et de la charte graphique du festival, jusqu&#39;au déploiement d&#39;un site mobile pour aider
                                les festivaliers à s&#39;informer sur les événements, ce projet m&#39;a permis d&#39;expérimenter toutes les étapes de création d&#39;un projet web.</p>
                            <ul className="list-disc pl-10">
                                <li>Faire un benchmark de l&#39;existant et des solutions techniques.</li>
                                <li>Créer l&#39;identité visuelle de Nation Sounds et maquetter le site web. </li>
                                <li>Développer un front-end responsive avec React-JS et Bootstrap.</li>
                                <li>Développer le back-end avec Symfony 8 et EasyAdmin pour gérer le CRUD.</li>
                                <li>Tester les composants.</li>
                                <li>Déployer le projet sur un serveur distant.</li>
                                <li>Veiller au respect des réglementations RGPD.</li>

                            </ul>    
                        </div>

                        <figure className="m-1 md:m-5" >
                            <Image src="/media/projets/NS-1.png" alt="Wireframe de la version mobile"/>
                            <figcaption>
                                Wireframe de la version mobile.
                            </figcaption>
                        </figure>
                    </div>

                    <div className="bento-beige">
                        <div className="m-1 md:m-5">
                            <h2 className="text-3xl mb-5 text-center" >Un véritable guide pour les festivaliers</h2>

                            <p className="mb-5">Le site propose à la fois de consulter la programmation du festival et de s&#39;informer plus en détail sur les artistes, ainsi que sur 
                                les ateliers et spectacles qui animeront les lieux.

                                Une carte interactive permet de se repérer sur les lieux et de se renseigner sur la restauration et les commodités. 
                                
                                Les festivaliers ont également la possibilité de créer un compte afin d&#39;avoir accès à une interface personnalisée et sécurisée (demande purement technique pour les besoins de l&#39;exercice).
                            </p>
                        </div>

                        <figure className="m-1 md:m-5">
                            <Image src="/media/projets/NS-2.png" alt="Mockup de la version mobile"/> 
                            <figcaption>Mockup de la version mobile.</figcaption>
                        </figure>
                    </div>
                </div>

            </section>
            <section className="flex flex-col justify-center items-center mb-40 w-full overflow-hidden">
                <div className="w-full h-10 md:h-25 mb-8 mt-8 bg-[url(/media/backgrounds/line.svg)] bg-center bg-no-repeat bg-cover"></div>
                <h2 className="text-3xl text-amber-50 text-center mb-5">Découvrez d&#39;autres projets</h2>
                <div className="w-full overflow-hidden">
                        <EmblaCarousel/>
                    </div>
            </section>
            
        </main>
    )
}