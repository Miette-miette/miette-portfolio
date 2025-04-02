'use client'

import { Breadcrumbs } from "@/app/_components/breadcrumbs/breadcrumbs";
import { EmblaCarousel } from "@/app/_components/Projects";
import Image from "next/image";

export default function LogoLiseBPhotographe() {

    return (
        <div>
            <main>
                
                <section className=" h-140 relative z-0 bg-[url(../../public/media/backgrounds/head-lightgreen-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50">
                    <div className="relative z-10 flex flex-row justify-center pt-30">
                        <Breadcrumbs/>
                    </div>
                    <h1 className="flex justify-center pt-10 m-5  text-2xl md:text-5xl">Lise Beaufils Photographe</h1>
                    <p className="flex justify-center">Création d&#39;une déclinaison de logos pour une photographe.</p>
                    <p className="flex justify-center">Illustrator</p>
                </section>
                
                <section className="p-5 md:pr-60 md:pl-60 flex flex-col items-center -mt-60 pt-20 relative z-1">
                    <div className="mockup h-130 bg-[url(../../public/media/projets/LOGO-1.png)] bg-contain bg-center bg-no-repeat"></div>

                    <div className="content">
                        <div className="bento-beige">
                            <div className="m-5">
                                <h2 className="text-3xl mb-5">Un outil pour se faire remarquer</h2>
                                <p>Afin de compléter son identité visuelle, Lise Beaufils, photographe spécialisée dans l&#39;événementiel (mariage, famille, etc.), souhaitait un logo à l&#39;image de son travail photographique. 
                                    Une écriture manuscrite, douce et joyeuse avec une touche de couleur légère. Pour correspondre à la multiplicité de ses supports de communication (web et print), 
                                    je lui ai proposé une déclinaison de logos. </p>   
                            </div>
                            <figure className="m-5" >
                                <Image src="/media/projets/LOGO-2.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Gravure du logo sur verre et sur bois.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <div className="m-5">
                                <h2 className="text-3xl mb-5">Une palette de possibilités</h2>
                                <p>J&#39;ai imaginé une typographie sur mesure pour offrir un design unique et en adéquation avec l&#39;univers de la photographe. Aujourd&#39;hui, j&#39;assure la mise à jour du logo pour que ce dernier corresponde
                                    à l&#39;évolution du travail de la photographie et de sa charte graphique.
                                </p>
                            </div>

                            <figure className="m-5" >
                                <Image src="/media/projets/LOGO-3.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Tests de typographie.
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                </section>

                <section className="flex flex-col justify-center items-center mb-40 md:mb-30 w-full overflow-hidden">
                    <h2 className="text-3xl text-amber-50">Découvrez d&#39;autres projets</h2>
                    <EmblaCarousel/>
                </section>
            </main>
        </div>
    );
}
