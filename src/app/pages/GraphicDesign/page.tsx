'use client'

import Image from "next/image"
import Link from "next/link"

export default function GraphicDesign() {

    return (
        <main>
            <section className="bg-[url(../../public/media/backgrounds/head-pink.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50 text-center pb-20">
                <h1 className="flex justify-center pt-20 md:pt-25 text-3xl md:text-4xl pb-5">Design Graphique & Illustration</h1> 
                <p>Imaginer des univers colorés pour accompagner l&#39;histoire d&#39;une entreprise, et donner vie à vos idées au travers de visuels, telle est ma passion ! </p>  
            </section>

            <section className="p-5 md:pr-80 md:pl-80 mb-50">

                <Link href="/pages/GraphicDesign/Logo-Lise-Beaufils-Photographe" data-aos="fade-left">
                    <div className="bento-beige flex flex-col justify-center items-center mb-2">
                        <Image src="/media/projets/LogoBanner.png" alt="banniere projet"/>
                        <h2 className="text-2xl md:text-3xl mt-3 text-center">Lise Beaufils Photographe</h2>
                        <p className="text-center">Création d&#39;une déclinaison de logo pour une photographe.</p> 
                    </div>
                </Link>
                
                <Link href="/pages/GraphicDesign/Plastique" data-aos="fade-left">
                    <div className="bento-beige flex flex-col justify-center items-center mb-2">
                        <Image src="/media/projets/PlastiqueBanner.png" alt="banniere projet"/>
                        <h2 className="text-2xl md:text-3xl mt-3 text-center">Plastique</h2>
                        <p className="text-center">Clip musical en stop motion pour l&#39;artiste Quentin.</p> 
                    </div>
                </Link>
                

            </section>
            

        </main>
    )
}