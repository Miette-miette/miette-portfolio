'use client'

export default function DeToiAMoi() {

    return (
        <div>
            <main>
                <section className=" h-100 relative z-0 bg-[url(../../public/media/backgrounds/head-lightgreen-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover">
                    <h1 className="flex justify-center pt-20 text-2xl md:text-4xl">De Toi à Moi et les P'tits Bouts</h1>
                    <p className="flex justify-center">Site vitrine pour un dépot-vente de vêtement seconde main à Cesson-Sévigné.</p>
                    <p className="flex justify-center">Wordpress - Elementor</p>
                </section>
                
                <section className="p-5 md:pr-60 md:pl-60 flex flex-col items-center -mt-60 relative z-1">
                    <div className="mockup">

                        <div className='flip-mockup relative w-100 h-100 md:w-200 md:h-120'>
                            <div className='flip-mockup-inner flex flex-col justify-center items-center'>
                                <div className='front-doodle md:bg-[url(../../public/media/projets/mockupDeToiAMoiDesktop.png)] bg-[url(../../public/media/projets/mockupDeToiAMoiMobile.png)] bg-contain bg-center bg-no-repeat flex justify-center items-center'></div>
                                <div className='back-doodle md:bg-[url(../../public/media/projets/mockupDeToiAMoiMobile.png)] bg-[url(../../public/media/projets/mockupDeToiAMoiDesktop.png)] bg-contain bg-center bg-no-repeat flex justify-center items-center'></div>
                            </div>   
                        </div>

                    </div>

                    <div className="content">

                        <div className="bento-beige">
                            <div className="m-5">
                                <h2 className="text-3xl mb-5">Une veritable vitrine pour se faire connaitre</h2>
                                <p>La volonté de la propriétaire est tout d’abord de faire connaître davantage sa boutique dans la région et de mettre
                                     en avant la diversité des collections en vente. Le site renseigne également la potentielle clientèle
                                     sur les conditions de dépôt pour afin de faciliter la prise de rendez-vous téléphonique.</p>
                                    
                            </div>

                            <figure className="m-5" >
                                <img src="../../media/projets/DTAM-1.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Recherches sur la gamme colorée et wireframe de la version mobile.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <div className="m-5">
                                <h2 className="text-3xl mb-5">Promouvoir la mode seconde main familiale</h2>
                                <p>J’ai tout d'abord conçu une charte graphique et un logo pour donner à la marque une véritable identité visuelle. 
                                    Le site a ensuite été réalisé avec WordPress et Elementor, l'idée étant de le faire évoluer vers une boutique en ligne. 
                                    En ce qui concerne la passation, j’ai mis en place un tutoriel pour que la propriétaire puisse facilement mettre à jour le contenu. 
                                    Désormais, j’en assure la maintenance et je travaille sur des stratégies SEO afin d'améliorer la visibilité du site et de la marque.
                                </p>  
                            </div>

                            <figure className="m-5" >
                                <img src="../../media/projets/DTAM-2.png" alt="Wireframe de la version mobile"/>
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
