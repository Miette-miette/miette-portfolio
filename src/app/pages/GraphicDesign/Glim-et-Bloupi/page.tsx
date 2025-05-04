'use client'

import { CarouselProjet } from "@/app/_components/Projects"
import Image from "next/image"


export default function Glim() {

    return (
            <main>
                <section className="h-120 md:h-130 relative z-0 pt-15 md:pt-30 bg-[url(../../public/media/backgrounds/head-pink-xl-desktop.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50 text-center">          
                    <h1 className="flex justify-center p-7 mb-8 text-2xl md:text-5xl bg-[url(../../public/media/button/button-xxl.svg)] bg-center bg-no-repeat bg-contain text-[#B36E7B]">Nation Sounds Festival</h1>
                    <p className="flex justify-center text-center ml-10 mr-10">Série d&#39;illustrations au marqueur et crayon de couleurs</p>      
                </section>
                
                <section className="p-5 md:pr-60 md:pl-60 flex flex-col items-center -mt-70 pt-20 relative z-1">
                    <div className="mockup">
                        <Image src="/media/projets/Glim-Banner.png" alt="Wireframe de la version mobile"/>
                    </div>

                    <div className="content">

                        <div className="bento-beige">
                            <figure className="m-1 md:m-5" >
                                <Image src="/media/projets/GLIM-4.jpg" alt=""/>
                                <figcaption>Bloupi teste de nouvelles invocations</figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <figure className="m-1 md:m-5">
                                <Image src="/media/projets/GLIM-3.jpg" alt=""/> 
                                <figcaption>Croaghen sur sa monture.</figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <figure className="m-1 md:m-5">
                                <Image src="/media/projets/GLIM-2.jpg" alt=""/> 
                                <figcaption>Glim décore sa maison.</figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <figure className="m-1 md:m-5">
                                <Image src="/media/projets/GLIM-1.jpg" alt=""/> 
                                <figcaption>Tatie Grombloquette prends soin des grenouilles de pluie du désert.</figcaption>
                            </figure>
                        </div>
                    </div>

                </section>

                <section className="flex flex-col justify-center items-center mb-40 w-full overflow-hidden">
                    <div className="w-full h-10 md:h-25 mb-8 mt-8 bg-[url(/media/backgrounds/line.svg)] bg-center bg-no-repeat bg-cover"></div>
                    <h2 className="text-3xl text-amber-50 text-center mb-5">Découvrez d&#39;autres projets</h2>
                    <div className="w-full overflow-hidden">
                            <CarouselProjet/>
                        </div>
                </section>
                
            </main>
        
    )
}