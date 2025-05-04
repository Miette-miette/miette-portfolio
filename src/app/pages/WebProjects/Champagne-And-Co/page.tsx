'use client'

import { CarouselProjet } from "@/app/_components/Projects";
import Image from "next/image";

export default function ChampagneAndCo() {

    return (
        <main>
                <section className="h-120 md:h-130 relative z-0 pt-15 md:pt-30 bg-[url(../../public/media/backgrounds/head-pink-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50 text-center">
                    <h1 className="flex justify-center p-7 mb-8 text-2xl md:text-5xl bg-[url(../../public/media/button/button-xxl.svg)] bg-center bg-no-repeat bg-contain text-[#B36E7B]">Champagne & Co</h1>
                    <p className="flex justify-center text-center pr-10 pl-10">Projet de maquettage d’un site web pour une entreprise fictive de vente de champagnes.</p>
                </section>
                
                <section className="p-5 md:pr-60 md:pl-60 flex flex-col items-center pt-20 -mt-80 relative z-1">
                    <div className="mockup">
                        <div className='flip-mockup relative w-90 h-90 md:w-200 md:h-120'>
                            <div className='flip-mockup-inner flex flex-col justify-center items-center'>
                                <div className='front-doodle md:bg-[url(../../public/media/projets/mockupChampDesktop.png)] bg-[url(../../public/media/projets/mockupChampMobile.png)] bg-contain bg-center bg-no-repeat flex justify-center items-center'></div>
                                <div className='back-doodle md:bg-[url(../../public/media/projets/mockupChampMobile.png)] bg-[url(../../public/media/projets/mockupChampDesktop.png)] bg-contain bg-center bg-no-repeat flex justify-center items-center'></div>
                            </div>   
                        </div>
                    </div>

                    <div className="content">

                        <div className="bento-pink flex flex-wrap sm:flex-row items-center justify-center m-2">
                            <div>
                                <h2 className="text-2xl">La stack:</h2>
                            </div>
                            
                            <div className="flex flex-col justify-center items-center m-2">
                                <h4>Figma</h4>
                                <svg className="icon-skills" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15" stroke="#FAFBF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="bento-beige">
                            <div className="m-1 md:m-5">
                                <h2 className="text-3xl mb-5 text-center">Imaginer un site pour Champagne & Co</h2>
                                <p>La présence en ligne est aujourd&#39;hui essentielle pour étendre sa clientele, 
                                    c&#39;est pour cela que Champagne & Co souhaite se lancer dans la vente en ligne.<br/>
                                    La demande : </p>
                                    <ul className="list-disc pl-10">
                                        <li >Faire un benchmark de l&#39;existant et définir les personas</li>
                                        <li>Définir l&#39;architecture technique de la solution</li>
                                        <li>Créer les wireframes du site</li>
                                    </ul>
                                    
                            </div>

                            <figure className="m-1 md:m-5" >
                                <Image src="/media/projets/CHAMP-1.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Moodboard et personas.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <div className="m-1 md:m-5">
                                <h2 className="text-3xl mb-5 text-center">Une expérience sobre et raffinée</h2>
                                <p>J&#39;ai souhaité proposer à la marque une véritable identité visuelle, en m&#39;appuyant sur la charte graphique imposée.
                                     L&#39;idée est d&#39;offrir à la clientèle une expérience raffinée tout au long de la navigation.
                                     Le design reste sobre et l&#39;accent est mis sur les mots forts qui caractérisent l&#39;univers du champagne, sur la description des saveurs 
                                     des produits proposés et sur des visuels impactants.</p>        
                            </div>

                            <figure className="m-1 md:m-5" >
                                <Image src="/media/projets/CHAMP-2.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Wireframe de la version mobile.
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                </section>

                <section className="flex flex-col justify-center items-center mb-40 w-full overflow-hidden">
                    <div className="w-full h-10 md:h-25 mb-8 mt-8 bg-[url(/media/backgrounds/line.svg)] bg-center bg-no-repeat bg-cover"></div>
                    <h2 className="text-3xl text-amber-50 text-center mb-5">Découvrez d&#39;autres projets</h2>
                    <div className="w-full overflow-hidden">
                        <CarouselProjet/>
                    </div>
                </section>
            </main>
    );
}
