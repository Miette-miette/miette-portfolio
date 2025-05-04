'use client'

import { CarouselProjet } from "@/app/_components/Projects";
import Image from "next/image";

export default function DeToiAMoi() {

    return (
            <main>
                <section className="h-120 md:h-130 relative z-0 pt-15 md:pt-30 bg-[url(../../public/media/backgrounds/head-lightgreen-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50 text-center">
                    <h1 className="flex justify-center p-7 mb-8 text-1xl md:text-4xl bg-[url(../../public/media/button/button-xl.svg)] md:bg-[url(../../public/media/button/button-xxl.svg)] bg-center bg-no-repeat bg-contain text-[#B36E7B]">De Toi à Moi</h1>
                    <p className="flex justify-center">Site vitrine pour un dépot-vente de vêtement seconde main à Cesson-Sévigné.</p>

                    <div className="flex flex-row items-center justify-center">
                        <div className="bento-pink flex flex-col justify-center items-center m-2">
                            <h4>Wordpress</h4>
                            <svg className="icon-skills" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#FAFBF2">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> <title>wordpress [#139]</title> <desc>Created with Sketch.</desc> <defs> </defs> 
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> 
                                <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -7559.000000)" fill="#FAFBF2"> 
                                <g id="icons" transform="translate(56.000000, 160.000000)"> 
                                <path d="M222.775,7404.202 C222.818,7404.521 222.842,7404.862 222.842,7405.23 C222.842,7406.988 222.679,7407.087 219.027,7417.644 C222,7415.91 224,7412.689 224,7409 C224,7407.261 223.556,7405.626 222.775,7404.202 L222.775,7404.202 Z M214.176,7409.875 L211.175,7418.593 C213.2,7419.189 215.346,7419.128 217.321,7418.434 C217.294,7418.391 217.27,7418.345 217.25,7418.296 L214.176,7409.875 Z M220.751,7408.495 C220.751,7407.259 220.307,7406.403 219.926,7405.737 C219.42,7404.913 218.944,7404.216 218.944,7403.392 C218.944,7402.473 219.642,7401.617 220.624,7401.617 C220.668,7401.617 220.71,7401.623 220.753,7401.625 C218.974,7399.995 216.604,7399 214,7399 C210.507,7399 207.433,7400.792 205.645,7403.507 C206.282,7403.527 207.137,7403.535 208.954,7403.393 C209.493,7403.361 209.556,7404.153 209.018,7404.216 C209.018,7404.216 208.476,7404.28 207.873,7404.312 L211.515,7415.144 L213.703,7408.58 L212.145,7404.311 C211.607,7404.28 211.097,7404.216 211.097,7404.216 C210.558,7404.184 210.621,7403.36 211.16,7403.392 C213.227,7403.551 214.285,7403.563 216.459,7403.392 C216.998,7403.36 217.062,7404.152 216.523,7404.216 C216.523,7404.216 215.98,7404.28 215.378,7404.311 L218.992,7415.061 C220.419,7410.293 220.751,7409.495 220.751,7408.495 L220.751,7408.495 Z M204,7409 C204,7412.958 206.3,7416.379 209.636,7418 L204.866,7404.93 C204.311,7406.174 204,7407.55 204,7409 L204,7409 Z" id="wordpress-[#139]"> </path> </g> </g> </g> 
                                </g>
                            </svg>
                        </div> 

                        <div className="bento-pink flex flex-col justify-center items-center m-2">
                            <h4>Elementor</h4>
                            <svg fill="#FAFBF2" className="icon-skills" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                <path d="M 12.4,1 1.6,1 C 1.2678571,1 1,1.26786 1,1.6 L 1,12.4 C 1,12.73214 1.2678571,13 1.6,13 l 10.8,0 C 12.732143,13 13,12.73214 13,12.4 L 13,1.6 C 13,1.26786 12.732143,1 12.4,1 m -6.9991071,8.66518 -1.0660715,0 0,-5.33036 1.0660715,0 0,5.33036 z m 4.2669642,0 -3.2008928,0 0,-1.06607 3.2008928,0 0,1.06607 z m 0,-2.13214 -3.2008928,0 0,-1.06608 3.2008928,0 0,1.06608 z m 0,-2.13483 -3.2008928,0 0,-1.06607 3.2008928,0 0,1.06607 z"></path>
                            </g></svg>
                        </div> 
                    </div>

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
                        <CarouselProjet/>
                    </div>
                </section>
            </main>
    );
}
