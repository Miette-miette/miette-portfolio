'use client'

import React , { Component, useState } from 'react';
import Link from 'next/link';

export default function Header() {

//Menu

const [showMenu, setShowMenu] = useState(false)

const handleShowMenu = () =>{
  setShowMenu(!showMenu)
};
    return (
        <header className="sticky top-0 z-10">
            <div id="header-content" className='flex flex-row justify-between'>
                <a href="/" id="logo" className='z-3'>
                    <img src="/"  className="size-15"/>
                </a>

                <div id="navbar-burger" className='z-3' onClick={handleShowMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>
            </div>

            <nav className={`navbar-links ${showMenu ? "show-nav" : "hide"} items-center flex-col md:flex-row`}>

                <div className='flex justify-center items-center bg-[#D7A9A5] h-120 w-80 m-3'>
                    <Link href="/pages/About" className='bg-[url(../../public/media/button/button-m.svg)] bg-center bg-no-repeat bg-contain p-12 text-[#B05768] text-2xl'>A propos</Link>
                </div>
                <div className='flex justify-center items-center bg-[url(../../public/media/backgrounds/menuweb.png)] bg-center bg-no-repeat bg-cover h-120 w-80 m-3'>
                    <Link href="/pages/WebProjects" className='bg-[url(../../public/media/button/button-l.svg)] bg-center bg-no-repeat bg-contain p-12 text-[#B05768] text-2xl'>Projets Web</Link>
                </div>
                <div className='flex justify-center items-center bg-[#D7A9A5] h-120 w-80 m-3'>
                    <Link href="/pages/GraphicDesign" className='bg-[url(../../public/media/button/button-xl.svg)] bg-center bg-no-repeat bg-contain p-12 text-[#B05768] text-2xl'>Design Graphique & Art</Link>
                </div>
                
                
            </nav>

        </header>
    )
}