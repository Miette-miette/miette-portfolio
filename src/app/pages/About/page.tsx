'use client'

export default function About() {

    return (
        <main>
            
            <section id="resume" >

                <div id="cloud" className=" flex flex-start w-full">
                    <img src="../media/cloud-anim/cloud1.svg" id="cloud1" className="z-3 top-0 absolute w-full object-bottom object-cover h-80 lg:h-full"/>
                    <img src="../media/cloud-anim/cloud2.svg" id="cloud2" className="z-1 top-0  absolute w-full object-bottom object-cover h-80 lg:h-full"/>
                    <img src="../media/cloud-anim/cloud3.svg" id="cloud3" className="z-0 top-0 absolute w-full object-bottom object-cover h-80 lg:h-full"/>
                </div>

                <h1 className="flex justify-center relative z-2 mt-50 mb-10 text-4xl">Qui-suis-je?</h1>

                <div className="bento-green mr-10 ml-10 lg:mr-80 lg:ml-80 xl:mr-120 xl:ml-120  relative z-2 flex justify-center flex-col items-center">
                    <img id="portrait" src="../media/about/portrait.svg" />
                    <div className="flex flex-col">
                        <h2>Je m'appelle Doriane Le Guyader</h2>
                        <p>Autodidacte passionnée par le développement web, mon souhait est de faire de ce passe-temps mon métier.<br/>
                        Étant titulaire d’un DNSEP (Diplôme National Supérieur d’Expression Plastique) option Design de la transition, le Design Thinking et la créativité sont essentiels à ma méthodologie.<br/>
                        Actuellement en attente de validation de la formation à distance DWWM de l'EPSI, je souhaite me professionnaliser dans ce domaine et ainsi concrétiser mon projet de reconversion.
                        </p>
                    </div>
                    <div className="bento-pink flex flex-row justify-center items-center">
                        <p>Esprit d'équipe & bienveillance</p>
                    </div>
                    <div className="bento-pink flex flex-row justify-center items-center">
                        <p>Curiosité & soif d'apprendre</p>
                    </div>
                    <div className="bento-pink flex flex-row justify-center items-center">
                        <p>Créativité & capacité d'adaptation</p>
                    </div>
                </div>
                

                
            </section>

            <section id="parcours" className="wrapper flex flex-col">
                <h2 className="flex justify-center text-3xl">Mon parcours</h2>
                <div className="bento-pink flex flex-row justify-center items-center">
                    <img src="../media/about/TP-dev.svg"/>
                    <div>
                        <h3>TP Développeur Web et Web Mobile </h3>
                        <p>Developper des applications responsive Front-end Back-end Maquettage Sécurité</p>
                    </div> 
                </div>

                <div className="bento-pink flex flex-row justify-center items-center">
                    <img src="../media/about/DNSEP.svg"/>
                    <div>
                        <h3>DNSEP Master Design de la transition</h3>
                        <p>Developper des applications responsive Front-end Back-end Maquettage Sécurité</p>
                    </div>    
                </div>

                <div className="bento-pink flex flex-row justify-center items-center">
                    <img src="../media/about/DNA.svg"/>
                    <div>
                        <h3>DNA option Design </h3>
                        <p>Developper des applications responsive Front-end Back-end Maquettage Sécurité</p>
                    </div>    
                </div>

                <div className="bento-pink flex flex-row justify-center items-center">
                    <img src="../media/about/Prepa.svg"/>
                    <div>
                        <h3>Prépa Art </h3>
                        <p>Developper des applications responsive Front-end Back-end Maquettage Sécurité</p>
                    </div>    
                </div>

                <div className="bento-pink flex flex-row justify-center items-center">
                    <img src="../media/about/BAC.svg"/>
                    <div>
                        <h3>BAC STD2A </h3>
                        <p>Developper des applications responsive Front-end Back-end Maquettage Sécurité</p>
                    </div>    
                </div>


            </section>
            <section id="skills" className="parcours wrapper flex flex-col bg-[#768D68]" >
                <h2>Compétences</h2>
                <div>
                    <h3>Front-End</h3>
                    <div></div>
                </div>
                <div>
                    <h3>Back-End</h3>
                    <div></div>
                </div>
                <div>
                    <h3>Design</h3>
                    <div></div>
                </div>

            </section>
            <section className="hobbies">

            </section>


                
             
        </main>
    );
}