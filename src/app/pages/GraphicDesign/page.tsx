'use client'

import Link from "next/link"

export default function GraphicDesign() {

    return (
        <main>
            <section className="bg-[url(../../public/media/backgrounds/head-pink.svg)] bg-bottom bg-no-repeat bg-cover">
                <h1 className="flex justify-center p-20 text-2xl md:text-4xl text-center">Design Graphique & Illustration</h1>
            </section>

            <section className="p-5 md:pr-60 md:pl-60">

                <Link href="/pages/GraphicDesign/LogoLiseBeaufilsPhotographe">
                    <div className="bento-beige flex flex-col justify-center items-center">
                        <img src="../media/projets/logoBanner.png"/>
                        <h2 className="text-2xl md:text-3xl mt-3 text-center">Lise Beaufils Photographe</h2>
                        <p className="text-center">Création d'une déclinaison de logo pour une photographe</p> 
                    </div>
                </Link>
                
                <Link href="/pages/GraphicDesign/Plastique">
                    <div className="bento-beige flex flex-col justify-center items-center">
                        <img src="../media/projets/PlastiqueBanner.png"/>
                        <h2 className="text-2xl md:text-3xl mt-3 text-center">Plastique</h2>
                        <p className="text-center">Clip musical en stop motion pour l'artiste Quentin</p> 
                    </div>
                </Link>
                

            </section>
            

        </main>
    )
}