'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Domaine() {

    return(
        <section className='flex justify-center items-center flex-col text-amber-50 relative z-6 bg-[url(/media/backgrounds/domaine_mobile.svg)]  md:bg-[url(../../public/media/backgrounds/domaine_desktop.svg)] bg-top bg-no-repeat bg-cover text-center'>
            <div>
                <h2 className='m-10 text-3xl md:text-5xl'>Mes domaines de prédilection</h2>
            </div>

            <div className='flex flex-col md:flex-row text-[#B36E7B] p-5 md:pr-60 md:pl-60'>

                <div className='flip-domaine relative z-6 m-4'>
                    <div className='flip-domaine-inner'>
                        <div className='front-doodle bento-beige flex flex-col justify-center items-center'>
                            <Image src="/media/domaines/dev.png" className='m-3' height={80} alt='illu dev'/>
                            <h3 className='text-2xl'>Développement Web</h3>
                        </div>
                        <div className='back-doodle bento-pink flex flex-col justify-center items-center'>
                            <p>Conception de site</p>
                            <Image src="/media/icons/Star.png" className='m-3 h-10' alt='etoile'/>
                            <p>Developpement Front-End et Back-End</p>
                            <Image src="/media/icons/Star.png" className='m-3 h-10' alt='etoile'/>   
                            <p>SEO</p>
                        </div>
                    </div>   
                </div>
                
                <div className='flip-domaine relative z-6 m-4'>
                    <div className='flip-domaine-inner'>
                        <div className='front-doodle bento-beige flex flex-col justify-center items-center'>
                            <Image src="/media/domaines/design.png" className='m-3' height={80} alt='illu design'/>
                            <h3 className='text-2xl'>Design Graphique</h3>
                        </div>
                        <div className='back-doodle bento-pink flex flex-col justify-center items-center'>
                            <p>Réalisation de charte graphique et de logo</p>
                            <Image src="/media/icons/Star.png" className='m-3 h-10' alt='etoile'/>
                            <p>Support web et print</p>
                        </div>
                    </div>   
                </div>

                <div className='flip-domaine relative z-6 m-4'>
                    <div className='flip-domaine-inner'>
                        <div className='front-doodle bento-beige flex flex-col justify-center items-center'>
                            <Image src="/media/domaines/illu.png" className='m-3' height={80} alt='illu design'/>
                            <h3 className='text-2xl'>Illustration</h3>
                        </div>
                        <div className='back-doodle bento-pink flex flex-col justify-center items-center'>
                            <p>Illustration tradi & digitale</p>
                            <Image src="/media/icons/Star.png" className='m-3 h-10' alt='etoile'/>
                            <p>Animation stop-motion/ papier découpé</p>
                        </div>
                    </div>   
                </div>

               
            </div>

            <div className="wrapper relative z-3 flex justify-center items-center">
              <Link href='https://www.linkedin.com/in/doriane-le-guyader-3a6b2a1bb' passHref={true} target="_blank" rel="external noopener noreferrer">
                <button className='bg-[url(../../public/media/button/button-xxl.svg)] bg-center bg-no-repeat bg-contain p-12 text-lg md:text-2xl'>Rejoignez-moi sur Linkedin !</button>
              </Link>
            </div>

        </section>
    )

}
