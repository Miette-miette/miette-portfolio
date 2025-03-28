'use client'

export default function DeToiAMoi() {

    return (
        <div>
            <main>
                <section className=" h-100 relative z-0 bg-[url(../../public/media/backgrounds/head-lightgreen-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover">
                    <h1 className="flex justify-center pt-20 text-2xl md:text-4xl">Champagne & Co</h1>
                    <p className="flex justify-center">Projet de maquettage d’un site web pour une entreprise fictive de vente de champagnes.</p>
                    <p className="flex justify-center">Figma</p>
                </section>
                
                <section className="p-5 md:pr-60 md:pl-60 flex flex-col items-center -mt-60 relative z-1">
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
                                <p>La présence en ligne est aujourd'hui essentielle pour étendre sa clientele, 
                                    c'est pour cela que Champagne & Co souhaite se lancer dans la vente en ligne.<br/>
                                    La demande : </p>
                                    <ul className="list-disc pl-10">
                                        <li >Faire un benchmark de l’existant et définir les personas</li>
                                        <li>Définir l’architecture technique de la solution</li>
                                        <li>Créer les wireframes du site</li>
                                    </ul>
                                    
                            </div>

                            <figure className="m-5" >
                                <img src="../../media/projets/CHAMP-1.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Moodboard et personas.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <div className="m-5">
                                <h2 className="text-3xl mb-5">Une expérience sobre et raffinée</h2>
                                <p>J’ai souhaité proposer à la marque une véritable identité visuelle, en m’appuyant sur la charte graphique imposée.
                                     L’idée est d’offrir à la clientèle une expérience raffinée tout au long de la navigation.
                                     Le design reste sobre et l’accent est mis sur les mots forts qui caractérisent l’univers du champagne, sur la description des saveurs 
                                     des produits proposés et sur des visuels impactants.</p>        
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
