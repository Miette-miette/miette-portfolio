'use client'

export default function LogoLiseBPhotographe() {

    return (
        <div>
            <main>
                <section className=" h-100 relative z-0 bg-[url(../../public/media/backgrounds/head-lightgreen-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover">
                    <h1 className="flex justify-center pt-20 text-2xl md:text-4xl">Lise Beaufils Photographe</h1>
                    <p className="flex justify-center">Création d'une déclinaison de logos pour une photographe.</p>
                    <p className="flex justify-center">Illustrator</p>
                </section>
                
                <section className="wrapper flex flex-col -mt-80 relative z-1">
                    <div className="mockup h-130 bg-[url(../../public/media/projets/LOGO-1.png)] bg-contain bg-center bg-no-repeat"></div>

                    <div className="content">
                        <div className="bento-beige">
                            <div className="m-5">
                                <h2 className="text-3xl mb-5">Un outil pour se faire remarquer</h2>
                                <p>Afin de compléter son identité visuelle, Lise Beaufils, photographe spécialisée dans l'événementiel (mariage, famille, etc.), souhaitait un logo à l'image de son travail photographique. 
                                    Une écriture manuscrite, douce et joyeuse avec une touche de couleur légère. Pour correspondre à la multiplicité de ses supports de communication (web et print), 
                                    je lui ai proposé une déclinaison de logos. </p>   
                            </div>
                            <figure className="m-5" >
                                <img src="../../media/projets/LOGO-2.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Gravure du logo sur verre et sur bois.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <div className="m-5">
                                <h2 className="text-3xl mb-5">Une palette de possibilités</h2>
                                <p>J'ai imaginé une typographie sur mesure pour offrir un design unique et en adéquation avec l’univers de la photographe. Aujourd’hui, j’assure la mise à jour du logo pour que ce dernier corresponde
                                    à l'évolution du travail de la photographie et de sa charte graphique.
                                </p>
                            </div>

                            <figure className="m-5" >
                                <img src="../../media/projets/LOGO-3.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Tests de typographie.
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
}
