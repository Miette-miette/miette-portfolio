'use client'

import Image from "next/image"
import Link from "next/link"

export default function ProjetWeb() {

    return (
        <main>
            <section className="bg-[url(../../public/media/backgrounds/head-green.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50">
                <h1 className="flex justify-center p-20 md:p-25 text-3xl md:text-4xl text-center ">Projets Web</h1>
            </section>
            
            <section className="p-5 md:pr-80 md:pl-80 mb-50" data-aos="fade-left">
                <Link href="/pages/WebProjects/NationSounds">
                    <div className="bento-beige flex flex-col justify-center items-center">
                        <Image src="/media/projets/NationSoundsBanner.png" alt="banniere projet"/>
                        <h2 className="text-2xl md:text-3xl mt-3 text-center">Nation-Sounds Festival</h2>
                        <p className="text-center">Site mobile et solution de gestion de contenu pour un festival fictif.</p> 
                    </div>
                </Link>

                <Link href="/pages/WebProjects/De-Toi-A-Moi" data-aos="fade-left">
                    <div className="bento-beige flex flex-col justify-center items-center">
                        <Image src="/media/projets/deToiAMoiBanner.png" alt="banniere projet"/>
                        <h2 className="text-2xl md:text-3xl mt-3 text-center">De Toi A Moi et Les P&#39;tits Bouts</h2>
                        <p className="text-center">Site vitrine pour un dépot-vente de vêtement seconde main à Cesson-Sévigné.</p> 
                    </div>
                </Link>
                
                <Link href="/pages/WebProjects/Champagne-And-Co" data-aos="fade-left">
                    <div className="bento-beige flex flex-col justify-center items-center">
                        <Image src="/media/projets/ChampagneCoBanner.png" alt="banniere projet"/>
                        <h2 className="text-2xl md:text-3xl mt-3 text-center">Champagne & Co</h2>
                        <p className="text-center">Projet de maquettage d&#39;un site web pour une entreprise fictive de vente de champagnes.</p> 
                    </div>
                </Link>
                

            </section>
        </main>
    )
}