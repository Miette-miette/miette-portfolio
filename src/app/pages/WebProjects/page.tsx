'use client'

import Link from "next/link"

export default function ProjetWeb() {

    return (
        <main>
            <section className="bg-[url(../../public/media/backgrounds/head-green.svg)] bg-bottom bg-no-repeat bg-cover">
                <h1 className="flex justify-center p-20 text-2xl md:text-4xl">Projets Web</h1>
                <p className="flex justify-center">Découvrez une séléction de projet web, du maquettage à la programmation de la solution</p>
            </section>
            
            <section className="wrapper">
                <Link href="/pages/WebProjects/NationSounds">
                    <div className="bento-beige flex flex-col justify-center items-center">
                        <img src="../media/projets/NationSoundsBanner.png"/>
                        <h2 className="text-2xl md:text-3xl mt-3">Nation-Sounds Festival</h2>
                        <p>Un projet </p> 
                    </div>
                </Link>

                <div className="bento-beige flex flex-col justify-center items-center">
                    <img src="../media/projets/deToiAMoiBanner.png"/>
                    <h2 className="text-2xl md:text-3xl mt-3">De Toi A Moi et Les P'tits Bouts</h2>
                    <p>description</p> 
                </div>

                <div className="bento-beige flex flex-col justify-center items-center">
                    <img src="../media/projets/ChampagneCoBanner.png"/>
                    <h2 className="text-2xl md:text-3xl mt-3">Champagne & Co</h2>
                    <p>description</p> 
                </div>

            </section>
        </main>
    )
}