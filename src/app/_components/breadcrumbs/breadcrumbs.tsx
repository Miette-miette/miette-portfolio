'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"
import { RiHome3Line } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';

export const Breadcrumbs = () => {
    const pathname = usePathname();
    const segments = pathname.split("/");

    const lastSegments = segments[segments.length -1]
    
    segments.splice(1,1); 
    segments[0] = "Accueil";

    const view = segments.map((path, index) => (
        <div key={uuidv4()}>
            <Link href={
                index > 0 ? `/pages/${segments.slice(1, index + 1).join("/")}` : "/"
             }>
                <p className={path !== lastSegments ? "text-rose-50 m-2" : "text-rose-700 m-2"}>
                    {path !== "Accueil" ? path.replace(/-/g, " ") : <RiHome3Line className="inline -mt-1"/>}
                </p>
            </Link>
        </div>

    ))
    
    console.log(segments);
    return <>{view}</>;
    
}