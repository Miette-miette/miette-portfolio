'use client'

export default function Plastique() {

    return (
        <div>
            <main>
                <section className=" h-100 relative z-0 bg-[url(../../public/media/backgrounds/head-lightgreen-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover">
                    <h1 className="flex justify-center pt-20 text-2xl md:text-4xl">Plastique</h1>
                    <p className="flex justify-center">Réalisation d'un clip pour la musique « Plastique » écrite  et produite par Quentin & Tess (CRD Laval).</p>
                    <p className="flex justify-center">PremierePro</p>
                </section>
                
                <section className="wrapper flex flex-col -mt-60 relative z-1">
                    <div className="mockup h-100 flex justify-center items-center">
                    <iframe width="700" height="400" src="https://www.youtube.com/embed/dvDN65vjm34?si=Nb7TRMwhTJT9_QPG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className="content">

                        <div className="bento-beige">
                            <div className="m-5">
                                <h2 className="text-3xl mb-5">Stop au plastique!</h2>
                                <p>Quentin m’a contactée avec l’envie d’illustrer sa musique et les paroles de cette dernière
                                    en mettant en avant le message écologique de la chanson.</p>
                            </div>

                            <figure className="m-5" >
                                <img src="../../media/projets/PLA-1.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Décors et illustrations.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <div className="m-5">
                                <h2 className="text-3xl mb-5">Du stop-motion avec des déchets plastiques</h2>
                                <p>Du storyboard à la création des personnages, des décors et des marionnettes, ce projet a été un véritable terrain 
                                    de jeu pour expérimenter l’animation en stop motion. Les décors ont été créés à partir de déchets plastiques pour 
                                    résonner avec le caractère engagé de la chanson. Le montage du clip a été réalisé sur Premiere Pro.
                                </p>
                            </div>
                        
                        
                            <figure className="m-5" >
                                <img src="../../media/projets/PLA-2.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Extrait du clip.
                                </figcaption>
                            </figure>

                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
}
