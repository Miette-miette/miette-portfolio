'use client'

import { Breadcrumbs } from "@/app/_components/breadcrumbs/breadcrumbs";
import { EmblaCarousel } from "@/app/_components/Projects";
import Image from "next/image";

export default function ChampagneAndCo() {

    return (
        <div>
            <main>
                <section className=" h-140 relative z-0 bg-[url(../../public/media/backgrounds/head-lightgreen-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50">
                    <div className="relative z-10 flex flex-row justify-center pt-30">
                        <Breadcrumbs/>
                    </div>
                    <h1 className="flex justify-center pt-10 text-2xl md:text-5xl">Champagne & Co</h1>
                    <p className="flex justify-center">Projet de maquettage d’un site web pour une entreprise fictive de vente de champagnes.</p>
                    <p className="flex justify-center">Figma</p>
                </section>
                
                <section className="p-5 md:pr-60 md:pl-60 flex flex-col items-center pt-20 -mt-60 relative z-1">
                    <div className="mockup">
                        <div className='flip-mockup relative w-100 h-100 md:w-200 md:h-120'>
                            <div className='flip-mockup-inner flex flex-col justify-center items-center'>
                                <div className='front-doodle md:bg-[url(../../public/media/projets/mockupChampDesktop.png)] bg-[url(../../public/media/projets/mockupChampMobile.png)] bg-contain bg-center bg-no-repeat flex justify-center items-center'></div>
                                <div className='back-doodle md:bg-[url(../../public/media/projets/mockupChampMobile.png)] bg-[url(../../public/media/projets/mockupChampDesktop.png)] bg-contain bg-center bg-no-repeat flex justify-center items-center'></div>
                            </div>   
                        </div>
                    </div>

                    <div className="content">
                    <div className="bento-beige">
                            <div className="m-5">
                                <h2 className="text-3xl mb-5">Imaginer un site pour Champagne & Co</h2>
                                <p>La présence en ligne est aujourd &#39 hui essentielle pour étendre sa clientele, 
                                    c &#39 est pour cela que Champagne & Co souhaite se lancer dans la vente en ligne.<br/>
                                    La demande : </p>
                                    <ul className="list-disc pl-10">
                                        <li >Faire un benchmark de l &#39 existant et définir les personas</li>
                                        <li>Définir l &#39 architecture technique de la solution</li>
                                        <li>Créer les wireframes du site</li>
                                    </ul>
                                    
                            </div>

                            <figure className="m-5" >
                                <Image src="/media/projets/CHAMP-1.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Moodboard et personas.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <div className="m-5">
                                <h2 className="text-3xl mb-5">Une expérience sobre et raffinée</h2>
                                <p>J &#39 ai souhaité proposer à la marque une véritable identité visuelle, en m &#39 appuyant sur la charte graphique imposée.
                                     L &#39 idée est d &#39 offrir à la clientèle une expérience raffinée tout au long de la navigation.
                                     Le design reste sobre et l &#39 accent est mis sur les mots forts qui caractérisent l &#39 univers du champagne, sur la description des saveurs 
                                     des produits proposés et sur des visuels impactants.</p>        
                            </div>

                            <figure className="m-5" >
                                <Image src="/media/projets/CHAMP-2.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Wireframe de la version mobile.
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                </section>

                <section className="flex flex-col justify-center items-center mb-40 md:mb-30">
                    <h2 className="text-3xl text-amber-50">Découvrez d &#39 autres projets</h2>
                    <EmblaCarousel/>
                </section>
            </main>
        </div>
    );
}
