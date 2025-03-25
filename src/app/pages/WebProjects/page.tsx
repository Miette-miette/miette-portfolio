'use client'

import Link from "next/link"

export default function ProjetWeb() {

    return (
        <main>
            <section className="bg-[url(../../public/media/backgrounds/head-green.svg)] bg-bottom bg-no-repeat bg-cover">
                <h1 className="flex justify-center p-20 text-2xl md:text-4xl text-center">Projets Web</h1>
                <p className="flex justify-center text-center">Découvrez une séléction de projet web, du maquettage à la programmation de la solution</p>
            </section>
            
            <section className="p-5 md:pr-60 md:pl-60">
                <Link href="/pages/WebProjects/NationSounds">
                    <div className="bento-beige flex flex-col justify-center items-center">
                        <img src="../media/projets/NationSoundsBanner.png"/>
                        <h2 className="text-2xl md:text-3xl mt-3 text-center">Nation-Sounds Festival</h2>
                        <p className="text-center">Site mobile et solution de gestion de contenu pour un festival fictif.</p> 
                    </div>
                </Link>

                <Link href="/pages/WebProjects/DeToiAMoi">
                    <div className="bento-beige flex flex-col justify-center items-center">
                        <img src="../media/projets/deToiAMoiBanner.png"/>
                        <h2 className="text-2xl md:text-3xl mt-3 text-center">De Toi A Moi et Les P'tits Bouts</h2>
                        <p className="text-center">Site vitrine pour un dépot-vente de vêtement seconde main à Cesson-Sévigné</p> 
                    </div>
                </Link>
                
                <Link href="/pages/WebProjects/ChampagneAndCo">
                    <div className="bento-beige flex flex-col justify-center items-center">
                        <img src="../media/projets/ChampagneCoBanner.png"/>
                        <h2 className="text-2xl md:text-3xl mt-3 text-center">Champagne & Co</h2>
                        <p className="text-center">Projet de maquettage d’un site web pour une entreprise fictive de vente de champagnes</p> 
                    </div>
                </Link>
                

            </section>
        </main>
    )
}