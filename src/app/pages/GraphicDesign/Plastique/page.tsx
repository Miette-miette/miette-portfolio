'use client'

import { Breadcrumbs } from "@/app/_components/breadcrumbs/breadcrumbs";
import { EmblaCarousel } from "@/app/_components/Projects";
import Image from "next/image";

export default function Plastique() {

    return (
        <div>
            <main>
                <section className="h-130 md:h-170 relative z-0 bg-[url(../../public/media/backgrounds/head-lightgreen-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50 text-center">
                    <div className="relative z-10 flex flex-row justify-center pt-30 mb-8">
                        <Breadcrumbs/>
                    </div>
                    <div className="w-full h-10 md:h-25 bg-[url(/media/backgrounds/line.svg)] bg-center bg-no-repeat bg-cover"></div>
                    <h1 className="flex justify-center pt-10 m-5 text-2xl md:text-5xl">Plastique</h1>
                    <p className="flex justify-center">Réalisation d&#39;un clip pour la musique « Plastique » écrite  et produite par Quentin & Tess (CRD Laval).</p>
                    <p className="flex justify-center">PremierePro</p>
                </section>
                
                <section className="p-5 md:pr-60 md:pl-60 flex flex-col items-center -mt-60 pt-20 relative z-1">
                    <div className="mockup flex justify-center items-center">
                        <iframe className="h-90 md:h-120 w-full" src="https://www.youtube.com/embed/dvDN65vjm34?si=Nb7TRMwhTJT9_QPG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className="content">

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
                        <EmblaCarousel/>
                    </div>
                </section>
            </main>
        </div>
    );
}
