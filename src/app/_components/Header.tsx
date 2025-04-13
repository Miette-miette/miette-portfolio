'use client'

import React , { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {

//Menu

const [showMenu, setShowMenu] = useState(false)

const handleShowMenu = () =>{
  setShowMenu(!showMenu)
};

const homeHideMenu = () =>{
    if (showMenu == true){
        setShowMenu(!showMenu)
    }
    
  };

    return (
        <header className="sticky top-0 z-10">
            <div id="header-content" className='flex flex-row justify-between'>
                <Link href="/" id="logo" className='z-3' onClick={homeHideMenu}>
                    <Image src="/miettelogosolo.png" className='w-[40px] h-[50px] md:w-[55px] md:h-[65px]' alt='logo'/>
                </Link>

                <div id="navbar-burger" className='z-3 w-[40px] h-[40px] md:w-[55px] md:h-[55px]' onClick={handleShowMenu} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>
            </div>

            <nav className={`navbar-links ${showMenu ? "show-nav" : "hide"} items-center flex-col md:flex-row`}>

                <div className='flex justify-center items-center bg-[url(../../public/media/backgrounds/menuabout.png)] bg-center bg-no-repeat bg-cover h-50 md:h-120 w-80 m-3' onClick={handleShowMenu}>
                    <Link href="/pages/About" className='nav-link-btn bg-[url(../../public/media/button/button-m.svg)] bg-center bg-no-repeat bg-contain p-12 text-[#B05768] text-2xl'><p>À propos</p></Link>
                </div>
                <div className='flex justify-center items-center bg-[url(../../public/media/backgrounds/menuweb.png)] bg-center bg-no-repeat bg-cover h-50 md:h-120 w-80 m-3' onClick={handleShowMenu}>
                    <Link href="/pages/WebProjects" className='nav-link-btn bg-[url(../../public/media/button/button-l.svg)] bg-center bg-no-repeat bg-contain p-12 text-[#B05768] text-2xl'><p>Projets Web</p> </Link>
                </div>
                <div className='flex justify-center items-center bg-[url(../../public/media/backgrounds/menugraph.png)] bg-center bg-no-repeat bg-cover h-50 md:h-120 w-80 m-3' onClick={handleShowMenu}>
                    <Link href="/pages/GraphicDesign" className='nav-link-btn bg-[url(../../public/media/button/button-xl.svg)] bg-center bg-no-repeat bg-contain p-12 text-[#B05768] text-2xl text-center'><p>Design Graphique & Illustration</p></Link>
                </div>
                
                
            </nav>

        </header>
    )
}