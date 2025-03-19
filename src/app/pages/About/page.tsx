'use client'

export default function About() {

    return (
        <main>
            
            <section id="resume" >

                <div id="cloud" className=" flex flex-start w-full">
                    <img src="../media/cloud-anim/cloud-stars.svg" id="cloud0" className="z-4 top-0 absolute w-full object-center object-contain h-80 lg:h-full"/>
                    <img src="../media/cloud-anim/cloud1.svg" id="cloud1" className="z-3 top-0 absolute w-full object-bottom object-contain h-80 lg:h-full"/>
                    <img src="../media/cloud-anim/cloud2.svg" id="cloud2" className="z-2 top-0  absolute w-full object-bottom object-cover h-80 lg:h-full"/>
                    <img src="../media/cloud-anim/cloud3.svg" id="cloud3" className="z-0 top-0 absolute w-full object-bottom object-cover h-80 lg:h-full"/>
                </div>

                <h1 className="flex justify-center relative z-2 mt-30 mb-10 text-4xl">Qui-suis-je?</h1>

                <div className="bento-green mb-20 mr-10 ml-10 lg:mr-80 lg:ml-80 xl:mr-100 xl:ml-100 relative z-1 flex justify-center flex-col items-center">
                    <img id="portrait" src="../media/about/portrait.svg" />
                    <div className="flex flex-col">
                        <h2 className="text-2xl flex justify-center">Je m'appelle Doriane Le Guyader</h2>
                        <p>Autodidacte passionnée par le développement web, mon souhait est de faire de ce passe-temps mon métier.<br/>
                        Étant titulaire d’un DNSEP (Diplôme National Supérieur d’Expression Plastique) option Design de la transition, le Design Thinking et la créativité sont essentiels à ma méthodologie.<br/>
                        Actuellement en attente de validation de la formation à distance DWWM de l'EPSI, je souhaite me professionnaliser dans ce domaine et ainsi concrétiser mon projet de reconversion.
                        </p>
                    </div>
                    <div className="flex flex-row justify-center items-center">
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
                    
                </div>
                

                
            </section>

            <section id="parcours" className="wrapper flex flex-col bg-[#768D68]">
                <h2 className="flex justify-center text-3xl">Formations</h2>
                <div className="bento-pink flex flex-row justify-center items-center">
                    <img src="../media/about/TP-dev.svg" className="m-6"/>
                    <div>
                        <h2>TP Développeur Web et Web Mobile (en attente de certification) </h2>
                        <h3>2025 / EPSI (Cours en ligne)</h3>
                        <p>Developper des applications responsive Front-end Back-end Maquettage Sécurité</p>
                    </div> 
                </div>

                <div className="bento-pink flex flex-row justify-center items-center">
                    <img src="../media/about/DNSEP.svg" className="m-6"/>
                    <div>
                        <h2>DNSEP Master Design de la transition</h2>
                        <h3>2020 / EESAB Brest </h3>
                        <p>Sensibilisation autour des questions de transition écologique, sociale, économique, au travers des métiers du design. 
                            Développement de ma propre démarche de projet, axée sur la rêverie et l'approche sensible de concepts triviaux.</p>
                    </div>    
                </div>

                <div className="bento-pink flex flex-row justify-center items-center">
                    <img src="../media/about/DNA.svg" className="m-6"/>
                    <div>
                        <h2>DNA option Design </h2>
                        <h3>2018 / EESAB Brest </h3>
                        <p>Design d'espace et d'objet avec une approche artistique. 
                            Apprentissage de la suite Adobe (axé d'avantage vers le print)</p>
                    </div>    
                </div>

                <div className="bento-pink flex flex-row justify-center items-center">
                    <img src="../media/about/Prepa.svg" className="m-6"/>
                    <div>
                        <h2>Prépa Arts </h2>
                        <h3>2015 / Ecole Emile Daubé Saint-Brieuc </h3>
                        <p>Exploration d'une multitude de techniques et support pour s'exprimer 
                            aux travers des Arts visuels (peinture, sculpture, performance, vidéos)</p>
                    </div>    
                </div>

                <div className="bento-pink flex flex-row justify-center items-center">
                    <img src="../media/about/BAC.svg" className="m-6"/>
                    <div>
                        <h2>BAC STD2A </h2>
                        <h3>2014 / Lycée Ste Genevieve Rennes</h3>
                        <p>Acquisition d'une culture artistique variée et un fort intérêt pour les Arts et la création en général.</p>
                    </div>    
                </div>


            </section>
            <section id="skills" className="parcours wrapper flex flex-col" >
                <h2 className="text-4xl flex justify-center">Compétences</h2>

                <h3 className="text-3xl flex justify-center m-10">Front-End</h3>

                <div id="front" className="grid grid-cols-2">
                    <div id="front-langage" className="bento-green">
                        <h3 className="text-xl flex justify-center">Langages</h3>

                        <div className="flex flex-row justify-center items-center "> 
                            <div className="flex flex-col justify-center items-center p-4">
                                <h4>HTML</h4>
                                <svg className="icon-skills" viewBox="-1 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <title>html [#124]</title> <desc>Created with Sketch.</desc> <defs> </defs> 
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> 
                                    <g id="Dribbble-Light-Preview" transform="translate(-61.000000, -7639.000000)" fill="#FAFBF2"> 
                                    <g id="icons" transform="translate(56.000000, 160.000000)"> 
                                        <path d="M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z" id="html-[#124]"> </path> </g> </g> </g> 
                                    </g>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center items-center p-4">
                                <h4>CSS</h4>
                                <svg className="icon-skills" fill="#FAFBF2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b001b19"> 
                                        <path display="inline" d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302 H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606 l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062 l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"> </path> 
                                        </g> 
                                    </g>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center items-center p-4">
                                <h4>JS</h4>
                                <svg className="icon-skills" fill="#FAFBF2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51e75c7"> 
                                        <path display="inline" fillRule="evenodd" clipRule="evenodd" d="M1.008,0.5C0.438,0.583,0.48,1.27,0.521,1.958 c0,169.668,0,339.31,0,508.974c169.364,1.135,340.808,0.162,510.979,0.486c0-170.309,0-340.61,0-510.918 C341.342,0.5,171.167,0.5,1.008,0.5z M259.893,452.167c-11.822,11.919-30.478,18.938-53.429,18.938 c-37.643,0-58.543-18.34-71.884-43.711c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857 c13.183-6.699,11.661-27.01,11.661-49.054c0-45.773,0-98.578,0-139.872c-0.042-0.688-0.083-1.375,0.482-1.458 c15.707,0,31.413,0,47.116,0c0,36.788,0,78.402,0,117.529C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917 c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567c12.085-8.317,25.778-15.017,38.375-22.822 c10.08,15.761,27.537,30.91,53.429,28.652c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425 c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796c11.311-9.5,26.46-15.867,46.629-16.511 c36.629-1.173,56.723,15.12,70.429,37.884c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969 c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344 C433.706,340.486,474.331,355.693,470.696,409.917z"> </path> </g> 
                                </g></svg>
                            </div>
                        </div>
                    </div>

                    <div id="front-framework" className="bento-green">
                        <h3 className="text-2xl flex justify-center">Frameworks & Librairies</h3>

                        <div className="flex flex-row justify-center items-center">    
                            <div className="flex flex-col justify-center items-center p-4">
                                <h4>ReactJS</h4>
                                <svg className="icon-skills" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FAFBF2">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> 
                                        <path fillRule="nonzero" d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-.528 2.994c.175.21.351.414.528.609.177-.195.353-.398.528-.609a24.883 24.883 0 0 1-1.056 0zm-1.995-.125a20.678 20.678 0 0 1-2.285-.368c-.075.35-.132.69-.17 1.016-.19 1.583.075 2.545.478 2.777.403.233 1.368-.019 2.645-.974.263-.197.528-.416.794-.655a20.678 20.678 0 0 1-1.462-1.796zm7.331-.368c-.717.16-1.483.284-2.285.368a20.678 20.678 0 0 1-1.462 1.796c.266.24.531.458.794.655 1.277.955 2.242 1.207 2.645.974.403-.232.667-1.194.479-2.777a11.36 11.36 0 0 0-.17-1.016zm1.45-.387c.577 2.639.274 4.74-1.008 5.48-1.282.74-3.253-.048-5.25-1.867-1.997 1.819-3.968 2.606-5.25 1.866-1.282-.74-1.585-2.84-1.009-5.48C3.167 14.794 1.5 13.48 1.5 12s1.667-2.793 4.241-3.614c-.576-2.639-.273-4.74 1.009-5.48 1.282-.74 3.253.048 5.25 1.867 1.997-1.819 3.968-2.606 5.25-1.866 1.282.74 1.585 2.84 1.009 5.48C20.833 9.206 22.5 10.52 22.5 12s-1.667 2.793-4.241 3.614zm-7.32-9.779a11.36 11.36 0 0 0-.793-.655C8.868 4.225 7.903 3.973 7.5 4.206c-.403.232-.667 1.194-.479 2.777.04.327.096.666.17 1.016a20.678 20.678 0 0 1 2.286-.368c.475-.653.965-1.254 1.462-1.796zm3.585 1.796c.802.084 1.568.209 2.285.368.075-.35.132-.69.17-1.016.19-1.583-.075-2.545-.478-2.777-.403-.233-1.368.019-2.645.974a11.36 11.36 0 0 0-.794.655c.497.542.987 1.143 1.462 1.796zm-1.995-.125c-.175-.21-.351-.414-.528-.609-.177.195-.353.398-.528.609a24.884 24.884 0 0 1 1.056 0zm-4.156 7.198a24.884 24.884 0 0 1-.528-.914c-.095.257-.183.51-.263.761.257.056.521.107.79.153zm1.932.234a22.897 22.897 0 0 0 3.392 0A22.897 22.897 0 0 0 15.392 12a22.897 22.897 0 0 0-1.696-2.938 22.897 22.897 0 0 0-3.392 0A22.897 22.897 0 0 0 8.608 12a22.897 22.897 0 0 0 1.696 2.938zm5.852-4.728c.095-.257.183-.51.263-.761a17.974 17.974 0 0 0-.79-.153 24.884 24.884 0 0 1 .527.914zM6.13 9.837c-.34.11-.662.23-.964.36C3.701 10.825 3 11.535 3 12c0 .465.7 1.175 2.166 1.803.302.13.624.25.964.36.222-.7.497-1.426.825-2.163a20.678 20.678 0 0 1-.825-2.163zm1.45-.388c.081.25.169.504.264.76a24.884 24.884 0 0 1 .528-.913c-.27.046-.534.097-.791.153zm10.29 4.714c.34-.11.662-.23.964-.36C20.299 13.175 21 12.465 21 12c0-.465-.7-1.175-2.166-1.803a11.36 11.36 0 0 0-.964-.36c-.222.7-.497 1.426-.825 2.163.328.737.603 1.462.825 2.163zm-1.45.388c-.081-.25-.169-.504-.264-.76a24.884 24.884 0 0 1-.528.913c.27-.046.534-.097.791-.153z"></path> </g> 
                                    </g>
                                </svg>                                
                            </div>
                            <div className="flex flex-col justify-center items-center p-4">
                                <h4>NextJS</h4>
                                <svg className="icon-skills" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0)"> 
                                        <path d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z" fill="#FAFBF2"></path> </g> <defs> <clipPath id="clip0"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> 
                                    </g>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center items-center p-4">
                                <h4>TailwindCSS</h4>
                                <svg className="icon-skills" fill="#FAFBF2" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <title>Tailwind CSS icon</title>
                                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center items-center p-4">
                                <h4>Bootstrap</h4>
                                <svg className="icon-skills" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.5704 13.8246 12.0066 12.2947 12.0066H10.1589V12.0068Z" fill="#FAFBF2"></path> 
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>   
                </div>

                <h3 className="text-3xl flex justify-center m-10">Back-End</h3>

                <div id="back" className="grid grid-cols-2">
                        <div id="back-langage" className="bento-green">
                            <h3 className="text-2xl flex justify-center">Langages</h3>

                            <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <h4>PHP</h4>
                                    <svg className="icon-skills" fill="#FAFBF2" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                        <title>php</title> 
                                        <path d="M23.205 13.759h-1.178l-0.645 3.309h1.047c0.056 0.004 0.122 0.007 0.188 0.007 0.507 0 0.978-0.149 1.374-0.405l-0.010 0.006c0.371-0.33 0.623-0.786 0.688-1.301l0.001-0.010c0.048-0.138 0.076-0.296 0.076-0.461 0-0.291-0.087-0.562-0.236-0.788l0.003 0.005c-0.297-0.234-0.676-0.376-1.089-0.376-0.077 0-0.154 0.005-0.229 0.015l0.009-0.001zM26.448 15.486c-0.075 0.398-0.208 0.753-0.39 1.076l0.009-0.017c-0.194 0.338-0.427 0.628-0.698 0.876l-0.003 0.002c-0.316 0.302-0.699 0.538-1.125 0.682l-0.021 0.006c-0.441 0.131-0.947 0.207-1.472 0.207-0.048 0-0.095-0.001-0.142-0.002l0.007 0h-1.475l-0.409 2.102h-1.722l1.537-7.905h3.31c0.073-0.007 0.159-0.011 0.245-0.011 0.754 0 1.438 0.304 1.934 0.796l-0-0c0.319 0.41 0.512 0.933 0.512 1.5 0 0.245-0.036 0.482-0.103 0.705l0.004-0.017zM16.955 18.317l0.679-3.498c0.035-0.095 0.055-0.204 0.055-0.318 0-0.183-0.052-0.354-0.142-0.499l0.002 0.004c-0.195-0.142-0.439-0.228-0.703-0.228-0.055 0-0.109 0.004-0.162 0.011l0.006-0.001h-1.365l-0.88 4.53h-1.709l1.537-7.906h1.708l-0.409 2.102h1.522c0.093-0.010 0.2-0.016 0.309-0.016 0.625 0 1.205 0.193 1.683 0.524l-0.010-0.006c0.257 0.291 0.414 0.676 0.414 1.097 0 0.188-0.031 0.369-0.089 0.538l0.003-0.012-0.715 3.679zM11.926 17.423c-0.316 0.303-0.699 0.538-1.125 0.682l-0.021 0.006c-0.441 0.131-0.947 0.207-1.471 0.207-0.047 0-0.095-0.001-0.142-0.002l0.007 0h-1.476l-0.409 2.101h-1.722l1.537-7.905h3.312c0.073-0.007 0.159-0.011 0.245-0.011 0.754 0 1.438 0.304 1.934 0.796l-0-0c0.319 0.41 0.511 0.933 0.511 1.5 0 0.246-0.036 0.483-0.103 0.707l0.004-0.017c-0.146 0.774-0.533 1.441-1.079 1.934l-0.003 0.003zM16 8.112c-8.281 0-14.996 3.531-14.996 7.888s6.714 7.889 14.996 7.889 14.996-3.533 14.996-7.889-6.714-7.888-14.996-7.888zM9.764 13.759h-1.18l-0.644 3.309h1.047c0.056 0.004 0.121 0.007 0.187 0.007 0.507 0 0.979-0.149 1.375-0.405l-0.010 0.006c0.371-0.329 0.622-0.786 0.686-1.301l0.001-0.010c0.049-0.138 0.077-0.297 0.077-0.462 0-0.29-0.086-0.561-0.235-0.786l0.003 0.005c-0.297-0.234-0.676-0.376-1.089-0.376-0.077 0-0.154 0.005-0.229 0.015l0.009-0.001z"></path> 
                                    </g></svg>
                                </div>
                                <div className="flex flex-col justify-center items-center p-4">
                                    <h4>SQL</h4>
                                    <svg className="icon-skills" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                        <path d="M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.66 17 22 12 22C7 22 3 20.66 3 19V5M21 9.72021C21 11.3802 17 12.7202 12 12.7202C7 12.7202 3 11.3802 3 9.72021M21 14.44C21 16.1 17 17.44 12 17.44C7 17.44 3 16.1 3 14.44" stroke="#FAFBF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                                    </g></svg>
                                </div>
                            </div>
                        </div>

                        <div className="bento-green">
                            <h3 className="text-2xl flex justify-center">Frameworks & CMS</h3>

                            <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <h4>Symfony</h4>
                                    <svg className="icon-skills" fill="#FAFBF2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                        <g id="5151e0c8492e5103c096af88a51f35a1"> 
                                            <path display="inline" d="M255.991,0.5C114.889,0.5,0.5,114.882,0.5,255.985C0.5,397.105,114.889,511.5,255.991,511.5 C397.11,511.5,511.5,397.105,511.5,255.985C511.5,114.882,397.11,0.5,255.991,0.5z M393.788,148.373 c-11.83,0.416-19.993-6.649-20.376-17.391c-0.121-3.941,0.89-7.368,3.597-11.402c2.633-5.16,3.202-5.759,3.136-8.013 c-0.245-6.758-10.463-7.012-13.257-6.883c-38.354,1.272-48.464,53.028-56.656,95.12l-4.009,22.193 c22.082,3.231,37.759-0.752,46.509-6.412c12.31-7.988-3.452-16.205-1.473-25.296c2.029-9.265,10.451-13.739,17.143-13.918 c9.377-0.245,16.072,9.489,15.86,19.357c-0.329,16.322-21.981,38.74-65.293,37.821c-5.273-0.117-10.127-0.495-14.646-1.044 l-8.176,45.102c-7.311,34.133-17.024,80.79-51.795,121.493c-29.87,35.529-60.178,41.031-73.747,41.492 c-25.4,0.874-42.229-12.675-42.841-30.747c-0.582-17.507,14.891-27.071,25.051-27.388c13.549-0.449,22.93,9.373,23.292,20.692 c0.345,9.564-4.653,12.559-7.972,14.363c-2.204,1.784-5.527,3.605-5.402,7.544c0.079,1.68,1.884,5.563,7.522,5.381 c10.741-0.366,17.874-5.677,22.852-9.231c24.739-20.602,34.258-56.53,46.725-121.926l2.611-15.839 c4.259-21.271,8.967-44.974,16.161-68.602c-17.434-13.128-27.892-29.4-51.342-35.767c-16.077-4.37-25.883-0.661-32.77,8.055 c-8.162,10.321-5.455,23.753,2.429,31.629l13.029,14.405c15.96,18.455,24.705,32.813,21.408,52.113 c-5.211,30.847-41.951,54.491-85.379,41.143c-37.073-11.419-44.001-37.667-39.544-52.138c3.926-12.721,14.035-15.124,23.925-12.102 c10.587,3.285,14.741,16.156,11.71,26.023c-0.346,1.057-0.886,2.845-1.988,5.198c-1.234,2.729-3.505,5.119-4.495,8.292 c-2.379,7.768,8.259,13.282,15.67,15.561c16.588,5.106,32.777-3.567,36.878-16.991c3.813-12.338-3.988-20.945-7.224-24.243 l-15.707-16.817c-7.182-8.009-22.98-30.311-15.282-55.364c2.973-9.656,9.24-19.902,18.318-26.689 c19.179-14.288,40.034-16.642,59.896-10.924c25.687,7.386,38.038,24.381,54.048,37.496c8.953-26.269,21.375-51.992,40.047-73.703 c16.867-19.778,39.522-34.096,65.477-34.985c25.936-0.856,45.539,10.899,46.184,29.504 C414.153,132.455,409.604,147.846,393.788,148.373z"> </path> </g> 
                                    </g></svg>
                                </div>
                                <div>
                                    <h4>Wordpress</h4>
                                    <svg className="icon-skills" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#FAFBF2">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <title>wordpress [#139]</title> <desc>Created with Sketch.</desc> <defs> </defs> 
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> 
                                        <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -7559.000000)" fill="#FAFBF2"> 
                                            <g id="icons" transform="translate(56.000000, 160.000000)"> 
                                                <path d="M222.775,7404.202 C222.818,7404.521 222.842,7404.862 222.842,7405.23 C222.842,7406.988 222.679,7407.087 219.027,7417.644 C222,7415.91 224,7412.689 224,7409 C224,7407.261 223.556,7405.626 222.775,7404.202 L222.775,7404.202 Z M214.176,7409.875 L211.175,7418.593 C213.2,7419.189 215.346,7419.128 217.321,7418.434 C217.294,7418.391 217.27,7418.345 217.25,7418.296 L214.176,7409.875 Z M220.751,7408.495 C220.751,7407.259 220.307,7406.403 219.926,7405.737 C219.42,7404.913 218.944,7404.216 218.944,7403.392 C218.944,7402.473 219.642,7401.617 220.624,7401.617 C220.668,7401.617 220.71,7401.623 220.753,7401.625 C218.974,7399.995 216.604,7399 214,7399 C210.507,7399 207.433,7400.792 205.645,7403.507 C206.282,7403.527 207.137,7403.535 208.954,7403.393 C209.493,7403.361 209.556,7404.153 209.018,7404.216 C209.018,7404.216 208.476,7404.28 207.873,7404.312 L211.515,7415.144 L213.703,7408.58 L212.145,7404.311 C211.607,7404.28 211.097,7404.216 211.097,7404.216 C210.558,7404.184 210.621,7403.36 211.16,7403.392 C213.227,7403.551 214.285,7403.563 216.459,7403.392 C216.998,7403.36 217.062,7404.152 216.523,7404.216 C216.523,7404.216 215.98,7404.28 215.378,7404.311 L218.992,7415.061 C220.419,7410.293 220.751,7409.495 220.751,7408.495 L220.751,7408.495 Z M204,7409 C204,7412.958 206.3,7416.379 209.636,7418 L204.866,7404.93 C204.311,7406.174 204,7407.55 204,7409 L204,7409 Z" id="wordpress-[#139]"> </path> </g> </g> </g> 
                                    </g></svg>
                                </div>
                            </div>
                        </div>          
                </div>

                <div id="design">
                    <h3 className="text-3xl flex justify-center m-10">Design</h3>

                    <div className="bento-green flex flex-row justify-center items-center">
                        <div className="flex flex-col justify-center items-center p-4">
                            <h4>Figma</h4>
                            <svg className="icon-skills" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15" stroke="#FAFBF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                                </g>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4">
                            <h4>Photoshop</h4>
                            <svg className="icon-skills" fill="#FAFBF2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> <g id="2069a460dcf28295e231f3111e037552"> 
                                    <path display="inline" d="M426.333,0.5H85.667C38.825,0.5,0.5,38.825,0.5,85.667v340.667c0,46.842,38.325,85.167,85.167,85.167 h340.667c46.842,0,85.167-38.325,85.167-85.167V85.667C511.5,38.825,473.175,0.5,426.333,0.5z M245.329,260.524 c-17.736,17.736-45.611,26.065-77.103,26.065c-8.326,0-15.927-0.365-21.72-1.451v91.945h-44.159V136.363 c15.927-2.895,38.009-5.069,68.05-5.069c32.582,0,56.473,6.878,72.039,19.911c14.48,11.947,23.89,31.131,23.89,53.936 C266.325,228.309,259.086,247.492,245.329,260.524z M337.981,380.706c-21.358,0-40.542-5.069-53.574-12.31l8.687-32.216 c10.135,6.154,29.322,12.671,45.249,12.671c19.545,0,28.236-7.964,28.236-19.549c0-11.943-7.239-18.099-28.96-25.7 c-34.391-11.947-48.866-30.769-48.505-51.403c0-31.131,25.7-55.383,66.604-55.383c19.549,0,36.562,5.069,46.695,10.496 l-8.687,31.493c-7.602-4.342-21.721-10.135-37.285-10.135c-15.928,0-24.615,7.602-24.615,18.46c0,11.224,8.326,16.655,30.77,24.618 c31.854,11.582,46.696,27.871,47.058,53.937C409.653,357.539,384.678,380.706,337.981,380.706z M221.8,206.95 c0,28.598-20.273,44.887-53.574,44.887c-9.049,0-16.289-0.362-21.72-1.809v-82.534c4.708-1.085,13.395-2.171,25.704-2.171 C202.979,165.323,221.8,179.803,221.8,206.95z"> </path> </g> 
                                </g>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4">
                            <h4>InDesign</h4>
                            <svg className="icon-skills" fill="#FAFBF2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> <g id="2069a460dcf28295e231f3111e035a9d"> 
                                    <path display="inline" d="M337.803,268.126c0.728,3.618,1.085,7.964,1.085,11.586v26.423c0,4.708-0.357,9.05-1.447,13.033 c-4.341,19.188-20.269,31.492-38.37,31.492c-28.232,0-44.162-23.528-44.162-55.745c0-32.943,15.93-58.281,44.523-58.281 C319.704,236.634,333.822,250.752,337.803,268.126z M511.5,85.667v340.667c0,46.842-38.325,85.167-85.167,85.167H85.667 C38.825,511.5,0.5,473.175,0.5,426.333V85.667C0.5,38.825,38.825,0.5,85.667,0.5h340.667C473.175,0.5,511.5,38.825,511.5,85.667z M171.661,138.536h-44.523v243.979h44.523V138.536z M384.864,382.515c-0.728-11.947-1.451-31.492-1.451-49.59V125.503h-44.525 v99.909h-0.724c-7.959-13.031-25.338-23.167-49.59-23.167c-42.353,0-79.276,35.113-78.915,94.118 c0,54.298,33.303,90.132,75.292,90.132c25.699,0,47.058-12.305,57.558-31.854h0.724l1.809,27.874H384.864z"> </path> </g> 
                                </g>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4">
                            <h4>Illustrator</h4>
                            <svg className="icon-skills" fill="#FAFBF2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> <g id="2069a460dcf28295e231f3111e03585e"> 
                                    <path display="inline" d="M227.593,217.991l19.188,60.091h-62.627l18.825-60.091c4.346-14.48,7.964-31.493,11.582-45.611h0.724 C218.906,186.499,222.886,203.149,227.593,217.991z M511.5,85.667v340.667c0,46.842-38.325,85.167-85.167,85.167H85.667 C38.825,511.5,0.5,473.175,0.5,426.333V85.667C0.5,38.825,38.825,0.5,85.667,0.5h340.667C473.175,0.5,511.5,38.825,511.5,85.667z M324.246,380.885l-79.279-243.977h-56.83l-78.189,243.977h45.973l20.997-69.14h77.465l22.082,69.14H324.246z M399.52,204.597 h-44.888v176.288h44.888V204.597z M402.052,155.368c-0.362-13.756-9.772-24.252-24.977-24.252 c-14.842,0-24.976,10.496-24.976,24.252c0,13.395,9.772,23.891,24.614,23.891C392.279,179.258,402.052,168.762,402.052,155.368z"> </path> </g> 
                                </g>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4">
                            <h4>PremierePro</h4>
                            <svg className="icon-skills" fill="#FAFBF2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> <g id="2069a460dcf28295e231f3111e037ab6"> 
                                    <path display="inline" d="M227.955,208.761c0,28.596-20.273,44.887-53.575,44.887c-9.053,0-16.289-0.364-21.72-1.811v-82.532 c4.708-1.087,13.395-2.173,25.7-2.173C209.133,167.132,227.955,181.612,227.955,208.761z M511.5,85.667v340.667 c0,46.842-38.325,85.167-85.167,85.167H85.667C38.825,511.5,0.5,473.175,0.5,426.333V85.667C0.5,38.825,38.825,0.5,85.667,0.5 h340.667C473.175,0.5,511.5,38.825,511.5,85.667z M272.477,206.95c0-22.803-9.407-41.989-23.887-53.934 c-15.569-13.033-39.456-19.911-72.038-19.911c-30.045,0-52.127,2.173-68.054,5.069v240.718h44.164v-91.944 c5.793,1.089,13.395,1.451,21.72,1.451c31.493,0,59.363-8.33,77.104-26.062C265.24,249.303,272.477,230.117,272.477,206.95z M403.503,199.712c-3.622-0.726-6.154-1.087-10.5-1.087c-18.826,0-39.456,12.671-48.144,37.647h-1.447l-1.447-33.666h-38.732 c1.081,15.927,1.447,32.942,1.447,56.833v119.453h44.521v-91.222c0-5.064,0.724-9.772,1.447-13.752 c3.983-19.909,18.464-33.665,39.821-33.665c5.432,0,9.411,0.724,13.033,1.447V199.712z"> </path> </g> 
                            </g></svg>
                        </div>
                    </div>
                </div>

            </section>

            <section className="hobbies bg-[#CB9698]">
                <h2>Mes passions</h2>
                

            </section>


                
             
        </main>
    );
}