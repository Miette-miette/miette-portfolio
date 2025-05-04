'use client'

import { CarouselProjet } from "@/app/_components/Projects";
import Image from "next/image";

export default function LogoLiseBPhotographe() {

    return (
        <main>
                
            <section className="h-120 md:h-130 relative z-0 pt-15 md:pt-30 bg-[url(../../public/media/backgrounds/head-pink-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50 text-center">
                <h1 className="flex justify-center p-7 mb-8 text-xl md:text-5xl bg-[url(../../public/media/button/button-xl.svg)] md:bg-[url(../../public/media/button/button-xxl.svg)] bg-center bg-no-repeat bg-contain text-[#B36E7B]">Lise Beaufils Photographe</h1>
                <p className="flex justify-center text-center pr-10 pl-10">Création d&#39;une déclinaison de logos pour une photographe.</p>
            </section>
                
                <section className="p-5 md:pr-60 md:pl-60 flex flex-col items-center -mt-80 pt-20 relative z-1">
                    <div className="mockup h-130 w-full bg-[url(../../public/media/projets/LOGO-1.png)] bg-contain bg-center bg-no-repeat"></div>

                    <div className="content">
                        <div className="bento-pink flex flex-wrap sm:flex-row items-center justify-center m-2">
                            <div>
                                <h2 className="text-2xl">La stack:</h2>
                            </div>
                            
                            <div className="flex flex-col justify-center items-center m-2">
                                <h4>Illustrator</h4>
                                <svg className="icon-skills" fill="#FAFBF2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <g id="2069a460dcf28295e231f3111e03585e"> 
                                    <path display="inline" d="M227.593,217.991l19.188,60.091h-62.627l18.825-60.091c4.346-14.48,7.964-31.493,11.582-45.611h0.724 C218.906,186.499,222.886,203.149,227.593,217.991z M511.5,85.667v340.667c0,46.842-38.325,85.167-85.167,85.167H85.667 C38.825,511.5,0.5,473.175,0.5,426.333V85.667C0.5,38.825,38.825,0.5,85.667,0.5h340.667C473.175,0.5,511.5,38.825,511.5,85.667z M324.246,380.885l-79.279-243.977h-56.83l-78.189,243.977h45.973l20.997-69.14h77.465l22.082,69.14H324.246z M399.52,204.597 h-44.888v176.288h44.888V204.597z M402.052,155.368c-0.362-13.756-9.772-24.252-24.977-24.252 c-14.842,0-24.976,10.496-24.976,24.252c0,13.395,9.772,23.891,24.614,23.891C392.279,179.258,402.052,168.762,402.052,155.368z"> </path> </g> 
                                    </g>
                                </svg>
                            </div>
                            
                        </div>

                        <div className="bento-beige">
                            <div className="m-1 md:m-5">
                                <h2 className="text-3xl mb-5 text-center">Un outil pour se faire remarquer</h2>
                                <p>Afin de compléter son identité visuelle, Lise Beaufils, photographe spécialisée dans l&#39;événementiel (mariage, famille, etc.), souhaitait un logo à l&#39;image de son travail photographique. 
                                    Une écriture manuscrite, douce et joyeuse avec une touche de couleur légère. Pour correspondre à la multiplicité de ses supports de communication (web et print), 
                                    je lui ai proposé une déclinaison de logos. </p>   
                            </div>
                            <figure className="m-1 md:m-5" >
                                <Image src="/media/projets/LOGO-2.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Gravure du logo sur verre et sur bois.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <div className="m-1 md:m-5">
                                <h2 className="text-3xl mb-5 text-center">Une palette de possibilités</h2>
                                <p>J&#39;ai imaginé une typographie sur mesure pour offrir un design unique et en adéquation avec l&#39;univers de la photographe. Aujourd&#39;hui, j&#39;assure la mise à jour du logo pour que ce dernier corresponde
                                    à l&#39;évolution du travail de la photographie et de sa charte graphique.
                                </p>
                            </div>

                            <figure className="m-1 md:m-5" >
                                <Image src="/media/projets/LOGO-3.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Tests de typographie.
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
