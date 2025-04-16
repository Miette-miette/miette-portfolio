import React from 'react'
import Image from 'next/image'
import Link from "next/link";

export function Formation() {
    
    return (

        <section id="parcours" className=" flex flex-col w-full bg-[url(/media/backgrounds/formation-bg-xl.svg)] bg-center md:bg-top bg-no-repeat bg-cover" >
            <h2 className="flex flex-col items-center justify-center text-3xl md:text-5xl text-amber-50 mt-8">Mon parcours</h2> 

            <div className=" flex flex-col justify-center items-center relative p-5 md:pr-120 md:pl-120 z-1">

                <div className='flex flex-col justify-center items-center'>
                    <Image src="/media/formation-frog/form1.png" className='sticky flex z-0 w-28 mt-8 top-40 md:top-45 mb-1' alt='grenouille diplomée'/>
                    
                    <p className='-ml-50 md:-ml-100 text-amber-50 text-5xl mt-25'>2014</p> 
                    <div className="bento-pink relative z-1 flex flex-col md:flex-row justify-center items-center m-2">
                        <Image src="../media/about/BAC.svg" className="h-40 md:h-50 m-2"/>
                        <div className='m-2'>
                            <h2 className='text-xl'>BAC STD2A </h2>
                            <h3>2014 / Lycée Ste Geneviève Rennes</h3>
                            <p>Acquisition d'une culture artistique variée et d'un fort intérêt pour les arts et la création en générale.</p>
                        </div>    
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <Image src="/media/formation-frog/form2.png" className='sticky flex z-0 w-28 -mt-26 top-40 md:top-45 mb-2' alt='grenouille diplomée2'/>
                    <p className='-ml-50 md:-ml-100 text-amber-50 text-5xl mt-30'>2015</p>
                    <div className="bento-pink relative z-1 flex flex-col md:flex-row justify-center items-center m-2">
                        <Image src="../media/about/Prepa.svg" className="h-40 md:h-50 m-2"/>
                        <div className='m-2'>
                            <h2 className='text-xl'>Prépa Arts </h2>
                            <h3>2015 / École Emile Daubé Saint-Brieuc </h3>
                            <p>Exploration d'une multitude de techniques et de supports pour s'exprimer 
                                aux travers des arts visuels (peinture, sculpture, performance, vidéos).</p>
                        </div>    
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <Image src="/media/formation-frog/form3.png" className='sticky flex z-0 w-28 -mt-30 top-40 md:top-45 mb-3' alt='grenouille diplomée3'/>
                    <p className='-ml-50 md:-ml-100 text-amber-50 text-5xl mt-35'>2018</p>
                    <div className="bento-pink relative z-1 flex flex-col md:flex-row justify-center items-center m-2">
                        <Image src="../media/about/DNA.svg" className="h-40 md:h-50 m-2"/>
                        <div className='m-2'>
                            <h2 className='text-xl'>DNA option Design </h2>
                            <h3>2018 / EESAB Brest </h3>
                            <p>Design d'espace et d'objet avec une approche artistique. 
                                    Apprentissage de la suite Adobe (axé davantage vers le print).</p>
                        </div>    
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <Image src="/media/formation-frog/form4.png" className='sticky flex z-0 w-28 -mt-32 top-40 md:top-45 mb-4' alt='grenouille diplomée4'/>
                    <p className='-ml-50 md:-ml-100 text-amber-50 text-5xl mt-35'>2020</p>
                    <div className="bento-pink relative z-1 flex flex-col md:flex-row justify-center items-center m-2">
                        <Image src="../media/about/DNSEP.svg" className="h-40 md:h-50 m-2"/>
                        <div className='m-2'>
                            <h2 className='text-xl'>DNSEP Master Design de la transition</h2>
                            <h3>EESAB Brest </h3>
                            <p>Sensibilisation aux questions de transition écologique, sociale et économique, au travers des métiers du design. Développement de ma propre démarche de projet, axée sur la rêverie et l'approche sensible de concepts triviaux.</p>
                        </div>    
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <Image src="/media/formation-frog/form5.png" className='sticky flex z-0 w-28 -mt-35 top-40 md:top-45 mb-5' alt='grenouille diplomée5'/>

                    <p className='-ml-50 md:-ml-100 text-amber-50 text-5xl mt-35'>2025</p>
                    <div className="bento-pink relative z-1 flex flex-col md:flex-row justify-center items-center m-2 ">
                        <Image src="../media/about/TP-dev.svg" className="h-40 md:h-50 m-2"/>
                        
                        <div className='m-2'>
                            <h2 className='text-xl'>TP Développeur web et web mobile (en attente de certification) </h2>
                            <h3>EPSI (Cours en ligne)</h3>
                            <p>Développer des applications responsives, de la partie Front-end au Back-end.</p>
                        </div> 
                    </div>
                </div>

                 <div className='flex flex-col justify-center items-center'>
                    <Image src="/media/formation-frog/form6.png" className='sticky flex z-0 w-40 -mt-55 top-40 md:top-45 mb-5' alt='grenouille diplomée6'/>

                    <div className="bento-pink relative z-1 flex flex-col justify-center items-center m-2 mt-50 p-12">
                        <h2 className='text-xl text-center'>Actuellement à l'écoute d'opportunité dans le développement Front-End!</h2>
                        <h3>Retrouvez mon CV juste ici:</h3>
                        <Link href='/media/cv/CV.png' target='_blank' >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-20'>
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <path d="M13 9L15 15L17 9M10 15C9.06812 15 8.60218 15 8.23463 14.8478C7.74458 14.6448 7.35523 14.2554 7.15224 13.7654C7 13.3978 7 12.9319 7 12C7 11.0681 7 10.6022 7.15224 10.2346C7.35523 9.74458 7.74458 9.35523 8.23463 9.15224C8.60218 9 9.06812 9 10 9M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="beige" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                                </g>
                            </svg>
                        </Link> 
                    </div>
                </div> 
                
            </div>
            
        </section>
    )
}
