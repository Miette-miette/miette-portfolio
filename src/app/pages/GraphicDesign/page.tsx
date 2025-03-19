'use client'

export default function GraphicDesign() {

    return (
        <main>
            <section className="bg-[url(../../public/media/backgrounds/head-pink.svg)] bg-bottom bg-no-repeat bg-cover">
                <h1 className="flex justify-center p-20 text-2xl md:text-4xl">Design Graphique & Projets Artistiques</h1>
            </section>
            
            <div className="bg-[url(../../public/media/backgrounds/head-green.svg)] w-full flex flex-col items-center justify-center">
                <h2>Lise Beaufils Photographie</h2>
                <p>Création d'une déclinaison de logo pour une photographe</p>
                <button className="bg-[url(../../public/media/button/button-l.svg)] bg-center bg-no-repeat bg-contain p-12 text-[#B05768] text-2xl">Voir plus</button>
            </div>

            <div className="bg-[url(../../public/media/backgrounds/head-green.svg)] flex flex-col items-center justify-center">
                <h2>Plastique</h2>
                <p>Clip musical en stop motion pour l'artiste Quentin</p>
                <button className="bg-[url(../../public/media/button/button-l.svg)] bg-center bg-no-repeat bg-contain p-12 text-[#B05768] text-2xl">Voir plus</button>
            </div>

            <div className="bg-[url(../../public/media/backgrounds/head-green.svg)] flex flex-col items-center justify-center">
                <h2>Animations sur le pouce</h2>
                <p>Série d'animations en papier découpés</p>
                <button className="bg-[url(../../public/media/button/button-l.svg)] bg-center bg-no-repeat bg-contain p-12 text-[#B05768] text-2xl">Voir plus</button>
            </div>

        </main>
    )
}