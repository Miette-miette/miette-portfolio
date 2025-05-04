'use client'

import { CarouselProjet } from "@/app/_components/Projects"
import Image from "next/image"


export default function NationSounds() {

    return (
            <main>
                <section className="h-120 md:h-130 relative z-0 pt-15 md:pt-30 bg-[url(../../public/media/backgrounds/head-pink-XL-desktop.svg)] bg-bottom bg-no-repeat bg-cover text-amber-50 text-center">          
                    <h1 className="flex justify-center p-7 mb-8 text-2xl md:text-5xl bg-[url(../../public/media/button/button-xxl.svg)] bg-center bg-no-repeat bg-contain text-[#B36E7B]">Nation Sounds Festival</h1>
                    <p className="flex justify-center text-center ml-10 mr-10">Site mobile et solution de gestion de contenu pour un festival fictif.</p>      
                </section>
                
                <section className="p-5 md:pr-60 md:pl-60 flex flex-col items-center -mt-80 pt-20 relative z-1">
                    <div className="mockup">
                        <div className='flip-mockup relative w-90 h-90 md:w-200 md:h-120'>
                            <div className='flip-mockup-inner flex flex-col justify-center items-center'>
                                <div className='front-doodle md:bg-[url(../../public/media/projets/mockupNSDesktop.png)] bg-[url(../../public/media/projets/mockupNationSoundsMobile.png)] bg-contain bg-center bg-no-repeat flex justify-center items-center'></div>
                                <div className='back-doodle md:bg-[url(../../public/media/projets/mockupNationSoundsMobile.png)] bg-[url(../../public/media/projets/mockupNSDesktop.png)] bg-contain bg-center bg-no-repeat flex justify-center items-center'></div>
                            </div>   
                        </div>
                    </div>

                    <div className="content">
                        <div className="bento-pink flex flex-wrap sm:flex-row items-center justify-center m-2">
                            <div>
                                <h2 className="text-2xl">La stack:</h2>
                            </div>

                            <div className="flex flex-col justify-center items-center m-3">
                                <h4>ReactJS</h4>
                                <svg className="icon-skills" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FAFBF2">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> 
                                        <path fillRule="nonzero" d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-.528 2.994c.175.21.351.414.528.609.177-.195.353-.398.528-.609a24.883 24.883 0 0 1-1.056 0zm-1.995-.125a20.678 20.678 0 0 1-2.285-.368c-.075.35-.132.69-.17 1.016-.19 1.583.075 2.545.478 2.777.403.233 1.368-.019 2.645-.974.263-.197.528-.416.794-.655a20.678 20.678 0 0 1-1.462-1.796zm7.331-.368c-.717.16-1.483.284-2.285.368a20.678 20.678 0 0 1-1.462 1.796c.266.24.531.458.794.655 1.277.955 2.242 1.207 2.645.974.403-.232.667-1.194.479-2.777a11.36 11.36 0 0 0-.17-1.016zm1.45-.387c.577 2.639.274 4.74-1.008 5.48-1.282.74-3.253-.048-5.25-1.867-1.997 1.819-3.968 2.606-5.25 1.866-1.282-.74-1.585-2.84-1.009-5.48C3.167 14.794 1.5 13.48 1.5 12s1.667-2.793 4.241-3.614c-.576-2.639-.273-4.74 1.009-5.48 1.282-.74 3.253.048 5.25 1.867 1.997-1.819 3.968-2.606 5.25-1.866 1.282.74 1.585 2.84 1.009 5.48C20.833 9.206 22.5 10.52 22.5 12s-1.667 2.793-4.241 3.614zm-7.32-9.779a11.36 11.36 0 0 0-.793-.655C8.868 4.225 7.903 3.973 7.5 4.206c-.403.232-.667 1.194-.479 2.777.04.327.096.666.17 1.016a20.678 20.678 0 0 1 2.286-.368c.475-.653.965-1.254 1.462-1.796zm3.585 1.796c.802.084 1.568.209 2.285.368.075-.35.132-.69.17-1.016.19-1.583-.075-2.545-.478-2.777-.403-.233-1.368.019-2.645.974a11.36 11.36 0 0 0-.794.655c.497.542.987 1.143 1.462 1.796zm-1.995-.125c-.175-.21-.351-.414-.528-.609-.177.195-.353.398-.528.609a24.884 24.884 0 0 1 1.056 0zm-4.156 7.198a24.884 24.884 0 0 1-.528-.914c-.095.257-.183.51-.263.761.257.056.521.107.79.153zm1.932.234a22.897 22.897 0 0 0 3.392 0A22.897 22.897 0 0 0 15.392 12a22.897 22.897 0 0 0-1.696-2.938 22.897 22.897 0 0 0-3.392 0A22.897 22.897 0 0 0 8.608 12a22.897 22.897 0 0 0 1.696 2.938zm5.852-4.728c.095-.257.183-.51.263-.761a17.974 17.974 0 0 0-.79-.153 24.884 24.884 0 0 1 .527.914zM6.13 9.837c-.34.11-.662.23-.964.36C3.701 10.825 3 11.535 3 12c0 .465.7 1.175 2.166 1.803.302.13.624.25.964.36.222-.7.497-1.426.825-2.163a20.678 20.678 0 0 1-.825-2.163zm1.45-.388c.081.25.169.504.264.76a24.884 24.884 0 0 1 .528-.913c-.27.046-.534.097-.791.153zm10.29 4.714c.34-.11.662-.23.964-.36C20.299 13.175 21 12.465 21 12c0-.465-.7-1.175-2.166-1.803a11.36 11.36 0 0 0-.964-.36c-.222.7-.497 1.426-.825 2.163.328.737.603 1.462.825 2.163zm-1.45.388c-.081-.25-.169-.504-.264-.76a24.884 24.884 0 0 1-.528.913c.27-.046.534-.097.791-.153z"></path> </g> 
                                    </g>
                                </svg>                                
                            </div>
                            <div className="flex flex-col justify-center items-center m-3">
                                <h4>Symfony 7</h4>
                                <svg className="icon-skills" fill="#FAFBF2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                    <g id="5151e0c8492e5103c096af88a51f35a1"> 
                                        <path display="inline" d="M255.991,0.5C114.889,0.5,0.5,114.882,0.5,255.985C0.5,397.105,114.889,511.5,255.991,511.5 C397.11,511.5,511.5,397.105,511.5,255.985C511.5,114.882,397.11,0.5,255.991,0.5z M393.788,148.373 c-11.83,0.416-19.993-6.649-20.376-17.391c-0.121-3.941,0.89-7.368,3.597-11.402c2.633-5.16,3.202-5.759,3.136-8.013 c-0.245-6.758-10.463-7.012-13.257-6.883c-38.354,1.272-48.464,53.028-56.656,95.12l-4.009,22.193 c22.082,3.231,37.759-0.752,46.509-6.412c12.31-7.988-3.452-16.205-1.473-25.296c2.029-9.265,10.451-13.739,17.143-13.918 c9.377-0.245,16.072,9.489,15.86,19.357c-0.329,16.322-21.981,38.74-65.293,37.821c-5.273-0.117-10.127-0.495-14.646-1.044 l-8.176,45.102c-7.311,34.133-17.024,80.79-51.795,121.493c-29.87,35.529-60.178,41.031-73.747,41.492 c-25.4,0.874-42.229-12.675-42.841-30.747c-0.582-17.507,14.891-27.071,25.051-27.388c13.549-0.449,22.93,9.373,23.292,20.692 c0.345,9.564-4.653,12.559-7.972,14.363c-2.204,1.784-5.527,3.605-5.402,7.544c0.079,1.68,1.884,5.563,7.522,5.381 c10.741-0.366,17.874-5.677,22.852-9.231c24.739-20.602,34.258-56.53,46.725-121.926l2.611-15.839 c4.259-21.271,8.967-44.974,16.161-68.602c-17.434-13.128-27.892-29.4-51.342-35.767c-16.077-4.37-25.883-0.661-32.77,8.055 c-8.162,10.321-5.455,23.753,2.429,31.629l13.029,14.405c15.96,18.455,24.705,32.813,21.408,52.113 c-5.211,30.847-41.951,54.491-85.379,41.143c-37.073-11.419-44.001-37.667-39.544-52.138c3.926-12.721,14.035-15.124,23.925-12.102 c10.587,3.285,14.741,16.156,11.71,26.023c-0.346,1.057-0.886,2.845-1.988,5.198c-1.234,2.729-3.505,5.119-4.495,8.292 c-2.379,7.768,8.259,13.282,15.67,15.561c16.588,5.106,32.777-3.567,36.878-16.991c3.813-12.338-3.988-20.945-7.224-24.243 l-15.707-16.817c-7.182-8.009-22.98-30.311-15.282-55.364c2.973-9.656,9.24-19.902,18.318-26.689 c19.179-14.288,40.034-16.642,59.896-10.924c25.687,7.386,38.038,24.381,54.048,37.496c8.953-26.269,21.375-51.992,40.047-73.703 c16.867-19.778,39.522-34.096,65.477-34.985c25.936-0.856,45.539,10.899,46.184,29.504 C414.153,132.455,409.604,147.846,393.788,148.373z"> </path> </g> 
                                    </g>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center items-center m-3">
                                <h4>Easy-Admin 4</h4>
                                <svg className="icon-skills" fill="#FAFBF2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                    <g id="5151e0c8492e5103c096af88a51f35a1"> 
                                        <path display="inline" d="M255.991,0.5C114.889,0.5,0.5,114.882,0.5,255.985C0.5,397.105,114.889,511.5,255.991,511.5 C397.11,511.5,511.5,397.105,511.5,255.985C511.5,114.882,397.11,0.5,255.991,0.5z M393.788,148.373 c-11.83,0.416-19.993-6.649-20.376-17.391c-0.121-3.941,0.89-7.368,3.597-11.402c2.633-5.16,3.202-5.759,3.136-8.013 c-0.245-6.758-10.463-7.012-13.257-6.883c-38.354,1.272-48.464,53.028-56.656,95.12l-4.009,22.193 c22.082,3.231,37.759-0.752,46.509-6.412c12.31-7.988-3.452-16.205-1.473-25.296c2.029-9.265,10.451-13.739,17.143-13.918 c9.377-0.245,16.072,9.489,15.86,19.357c-0.329,16.322-21.981,38.74-65.293,37.821c-5.273-0.117-10.127-0.495-14.646-1.044 l-8.176,45.102c-7.311,34.133-17.024,80.79-51.795,121.493c-29.87,35.529-60.178,41.031-73.747,41.492 c-25.4,0.874-42.229-12.675-42.841-30.747c-0.582-17.507,14.891-27.071,25.051-27.388c13.549-0.449,22.93,9.373,23.292,20.692 c0.345,9.564-4.653,12.559-7.972,14.363c-2.204,1.784-5.527,3.605-5.402,7.544c0.079,1.68,1.884,5.563,7.522,5.381 c10.741-0.366,17.874-5.677,22.852-9.231c24.739-20.602,34.258-56.53,46.725-121.926l2.611-15.839 c4.259-21.271,8.967-44.974,16.161-68.602c-17.434-13.128-27.892-29.4-51.342-35.767c-16.077-4.37-25.883-0.661-32.77,8.055 c-8.162,10.321-5.455,23.753,2.429,31.629l13.029,14.405c15.96,18.455,24.705,32.813,21.408,52.113 c-5.211,30.847-41.951,54.491-85.379,41.143c-37.073-11.419-44.001-37.667-39.544-52.138c3.926-12.721,14.035-15.124,23.925-12.102 c10.587,3.285,14.741,16.156,11.71,26.023c-0.346,1.057-0.886,2.845-1.988,5.198c-1.234,2.729-3.505,5.119-4.495,8.292 c-2.379,7.768,8.259,13.282,15.67,15.561c16.588,5.106,32.777-3.567,36.878-16.991c3.813-12.338-3.988-20.945-7.224-24.243 l-15.707-16.817c-7.182-8.009-22.98-30.311-15.282-55.364c2.973-9.656,9.24-19.902,18.318-26.689 c19.179-14.288,40.034-16.642,59.896-10.924c25.687,7.386,38.038,24.381,54.048,37.496c8.953-26.269,21.375-51.992,40.047-73.703 c16.867-19.778,39.522-34.096,65.477-34.985c25.936-0.856,45.539,10.899,46.184,29.504 C414.153,132.455,409.604,147.846,393.788,148.373z"> </path> </g> 
                                    </g>
                                </svg>
                            </div>   
                        </div>

                        <div className="bento-beige">
                            <div className="m-1 md:m-5">
                                <h2 className="text-3xl mb-5 text-center">Un projet full-stack fictif</h2>
                                <p>En partant de la création de l&#39;identité et de la charte graphique du festival, jusqu&#39;au déploiement d&#39;un site mobile pour aider
                                    les festivaliers à s&#39;informer sur les événements, ce projet m&#39;a permis d&#39;expérimenter toutes les étapes de création d&#39;un projet web.</p>
                                <ul className="list-disc pl-10">
                                    <li>Faire un benchmark de l&#39;existant et des solutions techniques.</li>
                                    <li>Créer l&#39;identité visuelle de Nation Sounds et maquetter le site web. </li>
                                    <li>Développer un front-end responsive avec React-JS et Bootstrap.</li>
                                    <li>Développer le back-end avec Symfony 8 et EasyAdmin pour gérer le CRUD.</li>
                                    <li>Tester les composants.</li>
                                    <li>Déployer le projet sur un serveur distant.</li>
                                    <li>Veiller au respect des réglementations RGPD.</li>

                                </ul>    
                            </div>

                            <figure className="m-1 md:m-5" >
                                <Image src="/media/projets/NS-1.png" alt="Wireframe de la version mobile"/>
                                <figcaption>
                                    Wireframe de la version mobile.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="bento-beige">
                            <div className="m-1 md:m-5">
                                <h2 className="text-3xl mb-5 text-center" >Un véritable guide pour les festivaliers</h2>

                                <p className="mb-5">Le site propose à la fois de consulter la programmation du festival et de s&#39;informer plus en détail sur les artistes, ainsi que sur 
                                    les ateliers et spectacles qui animeront les lieux.

                                    Une carte interactive permet de se repérer sur les lieux et de se renseigner sur la restauration et les commodités. 
                                    
                                    Les festivaliers ont également la possibilité de créer un compte afin d&#39;avoir accès à une interface personnalisée et sécurisée (demande purement technique pour les besoins de l&#39;exercice).
                                </p>
                            </div>

                            <figure className="m-1 md:m-5">
                                <Image src="/media/projets/NS-2.png" alt="Mockup de la version mobile"/> 
                                <figcaption>Mockup de la version mobile.</figcaption>
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