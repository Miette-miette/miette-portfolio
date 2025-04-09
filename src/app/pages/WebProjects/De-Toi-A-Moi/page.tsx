'use client'

import { Breadcrumbs } from "@/app/_components/breadcrumbs/breadcrumbs";
import { EmblaCarousel } from "@/app/_components/Projects";
import Image from "next/image";

export default function DeToiAMoi() {

    return (
        <div>
            <main>
                <section className="h-120 md:h-130 relative z-0 bg-[url(../../public/media/backgrounds/head-lightgreen-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50 text-center">
                    <div className="relative z-10 flex flex-row justify-center pt-30 pb-6 mb-8 bg-[url(../../public/media/backgrounds/head-project.svg)]">
                        <Breadcrumbs/>
                    </div>
                    <h1 className="flex justify-center p-7 mb-8 text-2xl md:text-4xl bg-[url(../../public/media/button/button-xxl.svg)] bg-center bg-no-repeat bg-contain text-[#B36E7B]">De Toi à Moi et les P&#39;tits Bouts</h1>
                    <p className="flex justify-center">Site vitrine pour un dépot-vente de vêtement seconde main à Cesson-Sévigné.</p>
                    <p className="flex justify-center">Wordpress - Elementor</p>
                </section>
                
                <section className="p-5 md:pr-60 md:pl-60 flex flex-col items-center pt-20 -mt-30 relative z-1">
                    <div className="mockup">

                        <div className='flip-mockup relative w-90 h-90 md:w-200 md:h-120'>
                            <div className='flip-mockup-inner flex flex-col justify-center items-center'>
                                <div className='front-doodle md:bg-[url(../../public/media/projets/mockupDeToiAMoiDesktop.png)] bg-[url(../../public/media/projets/mockupDeToiAMoiMobile.png)] bg-contain bg-center bg-no-repeat flex justify-center items-center'></div>
                                <div className='back-doodle md:bg-[url(../../public/media/projets/mockupDeToiAMoiMobile.png)] bg-[url(../../public/media/projets/mockupDeToiAMoiDesktop.png)] bg-contain bg-center bg-no-repeat flex justify-center items-center'></div>
                            </div>   
                        </div>

                    </div>

                    <div className="content">

                        <div className="bento-beige">
                            <div className="m-1 md:m-5">
                                <h2 className="text-3xl mb-5 text-center">Une veritable vitrine pour se faire connaitre</h2>
                                <p>La volonté de la propriétaire est tout d&#39;abord de faire connaître davantage sa boutique dans la région et de mettre
                                     en avant la diversité des collections en vente. Le site renseigne également la potentielle clientèle
                                     sur les conditions de dépôt pour afin de faciliter la prise de rendez-vous téléphonique.</p>
                                    
                            </div>

                            <figure className="m-1 md:m-5" >
                                <Image src="/media/projets/DTAM-1.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Recherches sur la gamme colorée et wireframe de la version mobile.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <div className="m-1 md:m-5">
                                <h2 className="text-3xl mb-5 text-center">Promouvoir la mode seconde main familiale</h2>
                                <p>J&#39;ai tout d&#39;abord conçu une charte graphique et un logo pour donner à la marque une véritable identité visuelle. 
                                    Le site a ensuite été réalisé avec WordPress et Elementor, l&#39;idée étant de le faire évoluer vers une boutique en ligne. 
                                    En ce qui concerne la passation, j&#39;ai mis en place un tutoriel pour que la propriétaire puisse facilement mettre à jour le contenu. 
                                    Désormais, j&#39;en assure la maintenance et je travaille sur des stratégies SEO afin d&#39;améliorer la visibilité du site et de la marque.
                                </p>  
                            </div>

                            <figure className="m-1 md:m-5" >
                                <Image src="/media/projets/DTAM-2.png" alt="Wireframe de la version mobile"/>
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
                        <EmblaCarousel/>
                    </div>
                </section>
            </main>
        </div>
    );
}
