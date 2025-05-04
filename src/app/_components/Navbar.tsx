'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    //Links

    const links = [
        {
            name: "presentation",
            href: "#presentation",
            src: "media/nav/Icone-profil.svg"
        },
        {
            name: "domaine",
            href: "#domaine",
            src: "media/nav/Icone-domaine.svg"
        },
        {
            name: "parcours",
            href: "#parcours",
            src: "media/nav/Icone-formation.svg"
        },
        {
            name: "portfolio",
            href: "#portfolio",
            src: "media/nav/Icone-portfolio.svg"
        },
    ]

    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2,
        };

        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    setActiveSection(entry.target.id)
                }
                
            });
        }, options);


        links.forEach((link) => {
            const element = document.getElementById(link.name);
            if(element) observer.observe(element);
        })

    })

    const pathname = usePathname();
    console.log(pathname);
    

    return <>
            {links.map(link =>(
                <Link 
                href={link.href} 
                key={link.href}
                className={`${pathname === link.href ? "bg-[url(/media/nav/selected-menu.svg)]" : "hover:bg-[url(/media/nav/hover-menu.svg)]" } 
                    ${activeSection == link.name ? "bg-[url(/media/nav/selected-menu.svg)]" : ""} 
                    bg-center bg-contain bg-no-repeat rounded-xl transition-all duration-100 h-full`}
                >
                    <Image src={link.src} alt="" className='img-nav p-2 w-[55px] md:w-[60px]'/>
                </Link>  
            ))}
        </>
}