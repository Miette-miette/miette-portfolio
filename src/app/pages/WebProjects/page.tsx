'use client'

import Image from "next/image"
import Link from "next/link"

export default function ProjetWeb() {

    return (
        <main>
            <section className="bg-[url(../../public/media/backgrounds/head-green.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50 text-center pb-20">
                <h1 className="flex justify-center pt-20 md:pt-25 text-3xl md:text-4xl pb-5">Projets Web</h1>
                <p>Du maquettage au développement, venez découvrir une sélection de projets web !</p>
            </section>
            
            <section className="p-5 md:pr-80 md:pl-80 mb-50" data-aos="fade-left">
                <Link href="/pages/WebProjects/NationSounds">
                    <div className="bento-beige flex flex-col justify-center items-center mb-2">
                        <Image src="/media/projets/NationSoundsBanner.png" alt="banniere projet"/>
                        <h2 className="text-2xl md:text-3xl mt-3 text-center mb-2">Nation-Sounds Festival</h2>
                        <p className="text-center">Site mobile et solution de gestion de contenu pour un festival fictif.</p> 
                    </div>
                </Link>

                <Link href="/pages/WebProjects/De-Toi-A-Moi" data-aos="fade-left">
                    <div className="bento-beige flex flex-col justify-center items-center mb-2">
                        <Image src="/media/projets/deToiAMoiBanner.png" alt="banniere projet"/>
                        <h2 className="text-2xl md:text-3xl mt-3 text-center mb-2">De Toi A Moi et Les P&#39;tits Bouts</h2>
                        <p className="text-center">Site vitrine pour un dépot-vente de vêtement seconde main à Cesson-Sévigné.</p> 
                    </div>
                </Link>
                
                <Link href="/pages/WebProjects/Champagne-And-Co" data-aos="fade-left">
                    <div className="bento-beige flex flex-col justify-center items-center mb-2">
                        <Image src="/media/projets/ChampagneCoBanner.png" alt="banniere projet"/>
                        <h2 className="text-2xl md:text-3xl mt-3 text-center mb-2">Champagne & Co</h2>
                        <p className="text-center">Projet de maquettage d&#39;un site web pour une entreprise fictive de vente de champagnes.</p> 
                    </div>
                </Link>
                

            </section>
        </main>
    )
}