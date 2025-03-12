'use client'

import React , { Component, useState } from 'react';

export default function Header() {

//Menu

const [showMenu, setShowMenu] = useState(false)

const handleShowMenu = () =>{
  setShowMenu(!showMenu)
};
    return (
        <header className="sticky top-0 z-1">
            <div id="header-content" className='flex flex-row justify-between'>
                <a href="/" id="logo" className='z-3'>
                    <img src="./media/logo/miettelogosolo.png"  className="size-15"/>
                </a>

                <div id="navbar-burger" className='z-3' onClick={handleShowMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>
            </div>

            <nav className={`navbar-links ${showMenu ? "show-nav" : "hide"} items-center`}>
                <ul>
                    <li>
                        <a>A propos</a>
                    </li>
                    <li>
                        <a>Design Graphique</a>
                    </li>
                    <li>
                        <a>Projets Web</a>
                    </li>
                    <li>
                        <a>Vidéos et Illustrations</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}