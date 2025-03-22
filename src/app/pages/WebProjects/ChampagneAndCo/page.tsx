'use client'

export default function DeToiAMoi() {

    return (
        <div>
            <main>
                <section className=" h-100 relative z-0 bg-[url(../../public/media/backgrounds/head-lightgreen-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover">
                    <h1 className="flex justify-center pt-20 text-2xl md:text-4xl">Champagne & Co</h1>
                    <p className="flex justify-center">Maquettage d'un site pour un fournisseur de champagne fictif</p>
                    <p className="flex justify-center">Figma</p>
                </section>
                
                <section className="wrapper flex flex-col -mt-60 relative z-1">
                    <div className="mockup h-150">
                        <div className='flip-mockup absolute'>
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
                                <p>La présence en ligne est aujourd'hui essentielle pour étendre sa clientele </p>
                                    
                            </div>

                            <figure className="m-5" >
                                <img src="../../media/projets/CHAMP-1.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Recherches sur la gamme colorée et wireframe de la version mobile.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <div className="m-5">
                                <h2 className="text-3xl mb-5">Une experience sobre et raffinée</h2>
                                <p>En partant de la création de l’identité et de la charte graphique du festival, jusqu’au déploiement d’un site mobile pour aider
                                    les festivaliers à s’informer sur les événements, ce projet m’a permis d'expérimenter toutes les étapes de création d’un projet web.</p>
                                <ul className="list-disc pl-10">
                                    <li>Faire un benchmark de l'existant et des solutions techniques.</li>
                                    <li>Créer l'identité visuelle de Nation Sounds et maquetter le site web. </li>
                                    <li>Développer un front-end responsive avec React-JS et Bootstrap.</li>
                                    <li>Développer le back-end avec Symfony 8 et EasyAdmin pour gérer le CRUD.</li>
                                    <li>Tester les composants.</li>
                                    <li>Déployer le projet sur un serveur distant.</li>
                                    <li>Veiller au respect des réglementations RGPD.</li>

                                </ul>    
                            </div>

                            <figure className="m-5" >
                                <img src="../../media/projets/CHAMP-2.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Wireframe de la version mobile.
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
}
