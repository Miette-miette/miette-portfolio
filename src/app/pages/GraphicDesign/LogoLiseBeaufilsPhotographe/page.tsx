'use client'

export default function LogoLiseBPhotographe() {

    return (
        <div>
            <main>
                <section className=" h-100 relative z-0 bg-[url(../../public/media/backgrounds/head-lightgreen-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover">
                    <h1 className="flex justify-center pt-20 text-2xl md:text-4xl">Lise Beaufils Photographe</h1>
                    <p className="flex justify-center">Création d'une déclinaison de logos pour une photographe</p>
                    <p className="flex justify-center">Illustrator</p>
                </section>
                
                <section className="wrapper flex flex-col -mt-60 relative z-1">
                    <div className="mockup h-150 bg-[url(../../public/media/projets/LOGO-1.png)] bg-contain bg-center bg-no-repeat"></div>

                    <div className="content">
                        <div>
                            <h2>Un projet full-stack fictif</h2>
                            <p>De la création de l’identité et de la charte graphique du festival, jusqu’au déploiement d’un site mobile pour aider
                                les festivaliers à s’informer sur les événements, ce projet m’a permis d'expérimenter toutes les étapes d’un projet web.</p>
                            <ul>
                                <li>Faire un benchmark de l'existant et des solutions techniques</li>
                                <li>Créer l'identité visuelle de Nation Sounds et maquettage du site web </li>
                                <li>Developper un front-end responsive avec React-JS et Bootstrap</li>
                                <li>Développer le back-end avec Symfony 8 et EasyAdmin pour gerer le CRUD</li>
                                <li>Tester les composants</li>
                                <li>Déployer le projet sur un serveur distant</li>
                                <li>Veiller au respect des reglementations RGPD</li>

                            </ul>    
                        </div>

                        <img src="../../media/projets/LOGO-2.png"/>

                        <div>
                            <h2>Un véritable guide pour les festivaliers</h2>
                            <p>Le site propose à la fois de pouvoir consulter la programmation du festival, 
                                et également de se reperer grâce à une carte interactive. Les actualités du festival et le lien vers la billeterie 
                                est également accessible dès la page d'accueil.
                            </p>
                        </div>

                        <img src="../../media/projets/LOGO-3.png"/>

                        <p>Découvrir le site</p>
                    </div>

                </section>
            </main>
        </div>
    );
}
