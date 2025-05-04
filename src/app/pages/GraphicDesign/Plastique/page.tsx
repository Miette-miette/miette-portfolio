'use client'

import { CarouselProjet } from "@/app/_components/Projects";
import Image from "next/image";

export default function Plastique() {

    return (
            <main>
                <section className="h-120 md:h-130 relative z-0 pt-15 md:pt-30 bg-[url(../../public/media/backgrounds/head-pink-xl-desktop.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50 text-center">
                    <h1 className="flex justify-center p-7 mb-8 text-2xl md:text-5xl bg-[url(../../public/media/button/button-xxl.svg)] bg-center bg-no-repeat bg-contain text-[#B36E7B]">Plastique</h1>
                    <p className="flex justify-center text-center pr-10 pl-10">Réalisation d&#39;un clip pour la musique « Plastique » écrite  et produite par Quentin & Tess (CRD Laval).</p>
                </section>
                
                <section className="p-5 md:pr-60 md:pl-60 flex flex-col items-center -mt-80 pt-20 relative z-1">
                    <div className="mockup flex justify-center items-center">
                        <iframe className="h-50 md:h-120 w-full" src="https://www.youtube.com/embed/dvDN65vjm34?si=Nb7TRMwhTJT9_QPG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className="content">

                        <div className="bento-pink flex flex-wrap sm:flex-row items-center justify-center m-2">
                            <div>
                                <h2 className="text-2xl">La stack:</h2>
                            </div>
                            
                            <div className="flex flex-col justify-center items-center m-2">
                                <h4>PremierePro</h4>
                                <svg className="icon-skills" fill="#FAFBF2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <g id="2069a460dcf28295e231f3111e037ab6"> 
                                    <path display="inline" d="M227.955,208.761c0,28.596-20.273,44.887-53.575,44.887c-9.053,0-16.289-0.364-21.72-1.811v-82.532 c4.708-1.087,13.395-2.173,25.7-2.173C209.133,167.132,227.955,181.612,227.955,208.761z M511.5,85.667v340.667 c0,46.842-38.325,85.167-85.167,85.167H85.667C38.825,511.5,0.5,473.175,0.5,426.333V85.667C0.5,38.825,38.825,0.5,85.667,0.5 h340.667C473.175,0.5,511.5,38.825,511.5,85.667z M272.477,206.95c0-22.803-9.407-41.989-23.887-53.934 c-15.569-13.033-39.456-19.911-72.038-19.911c-30.045,0-52.127,2.173-68.054,5.069v240.718h44.164v-91.944 c5.793,1.089,13.395,1.451,21.72,1.451c31.493,0,59.363-8.33,77.104-26.062C265.24,249.303,272.477,230.117,272.477,206.95z M403.503,199.712c-3.622-0.726-6.154-1.087-10.5-1.087c-18.826,0-39.456,12.671-48.144,37.647h-1.447l-1.447-33.666h-38.732 c1.081,15.927,1.447,32.942,1.447,56.833v119.453h44.521v-91.222c0-5.064,0.724-9.772,1.447-13.752 c3.983-19.909,18.464-33.665,39.821-33.665c5.432,0,9.411,0.724,13.033,1.447V199.712z"> </path> </g> 
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="bento-beige">
                            <div className="m-1 md:m-5">
                                <h2 className="text-3xl mb-5 text-center">Stop au plastique!</h2>
                                <p>Quentin m&#39;a contactée avec l&#39;envie d&#39;illustrer sa musique et les paroles de cette dernière
                                    en mettant en avant le message écologique de la chanson.</p>
                            </div>

                            <figure className="m-1 md:m-5" >
                                <Image src="/media/projets/PLA-1.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Décors et illustrations.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <div className="m-1 md:m-5">
                                <h2 className="text-3xl mb-5 text-center">Du stop-motion avec des déchets plastiques</h2>
                                <p>Du storyboard à la création des personnages, des décors et des marionnettes, ce projet a été un véritable terrain 
                                    de jeu pour expérimenter l&#39;animation en stop motion. Les décors ont été créés à partir de déchets plastiques pour 
                                    résonner avec le caractère engagé de la chanson. Le montage du clip a été réalisé sur Premiere Pro.
                                </p>
                            </div>
                        
                        
                            <figure className="m-1 md:m-5" >
                                <Image src="/media/projets/PLA-2.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Extrait du clip.
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
