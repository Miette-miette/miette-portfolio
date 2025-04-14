import React from 'react'
import Image from 'next/image'

export function Formation() {
    
    return (

        <section id="parcours" className=" flex flex-col w-full bg-[url(/media/backgrounds/formation-bg-xl.svg)] bg-center md:bg-top bg-no-repeat bg-cover" >
            <h2 className="flex flex-col items-center justify-center text-3xl md:text-4xl text-amber-50 mt-8">Mon parcours</h2> 

            <div className=" flex flex-col justify-center items-center relative p-5 md:pr-120 md:pl-120 z-1">
                <Image src="/media/about/form.png" className='sticky flex z-0 h-20 w-25 mt-10 top-40 md:top-50' alt='grenouille diplomée'/>

                <p className='-ml-50 md:-ml-100 text-amber-50 text-5xl mt-30'>2025</p>
                <div className="bento-pink flex flex-col justify-center items-center m-2 ">
                    <Image src="../media/about/TP-dev.svg" className="h-40 md:h-50 m-2"/>
                    
                    <div className='m-2'>
                        <h2 className='text-xl'>TP Développeur web et web mobile (en attente de certification) </h2>
                        <h3>EPSI (Cours en ligne)</h3>
                        <p>Développer des applications responsives, de la partie Front-end au Back-end.</p>
                    </div> 
                </div>

                <p className='-ml-50 md:-ml-100 text-amber-50 text-5xl mt-30'>2020</p>
                <div className="bento-pink flex flex-col justify-center items-center m-2">
                    <Image src="../media/about/DNSEP.svg" className="h-40 md:h-50 m-2"/>
                    <div className='m-2'>
                        <h2 className='text-xl'>DNSEP Master Design de la transition</h2>
                        <h3>EESAB Brest </h3>
                        <p>Sensibilisation aux questions de transition écologique, sociale et économique, au travers des métiers du design. </p>
                    </div>    
                </div>

                <p className='-ml-50 md:-ml-100 text-amber-50 text-5xl mt-30'>2018</p>
                <div className="bento-pink flex flex-col justify-center items-center m-2">
                    <Image src="../media/about/DNA.svg" className="h-40 md:h-50 m-2"/>
                    <div className='m-2'>
                        <h2 className='text-xl'>DNA option Design </h2>
                        <h3>2018 / EESAB Brest </h3>
                        <p>Design d'espace et d'objet avec une approche artistique. 
                                Apprentissage de la suite Adobe (axé davantage vers le print).</p>
                    </div>    
                </div>

                <p className='-ml-50 md:-ml-100 text-amber-50 text-5xl mt-30'>2015</p>
                <div className="bento-pink flex flex-col justify-center items-center m-2">
                    <Image src="../media/about/Prepa.svg" className="h-40 md:h-50 m-2"/>
                    <div className='m-2'>
                        <h2 className='text-xl'>Prépa Arts </h2>
                        <h3>2015 / École Emile Daubé Saint-Brieuc </h3>
                        <p>Exploration d'une multitude de techniques et de supports pour s'exprimer 
                            aux travers des arts visuels (peinture, sculpture, performance, vidéos).</p>
                    </div>    
                </div>

                <p className='-ml-50 md:-ml-100 text-amber-50 text-5xl mt-30'>2014</p> 
                <div className="bento-pink flex flex-col justify-center items-center m-2">
                    <Image src="../media/about/BAC.svg" className="h-40 md:h-50 m-2"/>
                    <div className='m-2'>
                        <h2 className='text-xl'>BAC STD2A </h2>
                        <h3>2014 / Lycée Ste Geneviève Rennes</h3>
                        <p>Acquisition d'une culture artistique variée et d'un fort intérêt pour les arts et la création en générale.</p>
                    </div>    
                </div>
            </div>
           
                    
                    
            
           
            
        </section>
    )
}
