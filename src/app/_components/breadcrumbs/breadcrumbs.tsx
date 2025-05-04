'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { v4 as uuidv4 } from 'uuid';

export const Breadcrumbs = () => {
    const pathname = usePathname();
    const segments = pathname.split("/");

    const lastSegments = segments[segments.length -1]
    
    segments.splice(1,2); 
    segments[0] = "Accueil";

    const view = segments.map((path, index) => (
        <div key={uuidv4()}>
            <Link href={index > 0 ? `/pages/${segments.slice(1, index + 1).join("/")}` : "/"} className="flex flex-row justify-center items-center">
                {path !== "Accueil" ? (<p className={path !== lastSegments ? "text-rose-50 m-1" : "text-pink-800 m-1"}> 
                    {path.replace(/-/g, " ")}
                </p>) : ( <Image src="/media/nav/Icone-maison.svg" alt="bouton home" className='img-nav inline p-2 w-[40px] md:w-[60px]'/> )}
                
            </Link>
        </div>

    ))
    
    console.log(segments);
    return <>{view}</>;
    
}