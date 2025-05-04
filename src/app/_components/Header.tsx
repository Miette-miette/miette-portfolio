'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { usePathname } from "next/navigation";

export default function Header() {

   const [displayNavbar, setDisplayNavbar]= useState(false);

    const path = usePathname();

    useEffect(() => {
        if (path === "/") {
            setDisplayNavbar(true);
        } else {
            setDisplayNavbar(false);
        }
    }, [path]);
    
    console.log(displayNavbar);
    
    return(
        <header className="sticky top-0 z-10">
            <div id="header-content" className='flex flex-row justify-between p-1 pr-2 pl-2 bg-[url(/media/nav/nav-bg.svg)] bg-no-repeat bg-cover bg-center'>
                <Link href="/" id="logo" className='z-3'>
                    <Image src="/miettelogosolo.png" className='w-[40px] h-[50px] md:w-[48px] md:h-[58px]' alt='logo'/>
                </Link>

                <nav className='flex flex-row justify-end items-center pr-2 z-4'>
                
                    {displayNavbar ? <Navbar/> : <Breadcrumbs/> }         
                </nav>
            </div>
        </header>
    )

}



    