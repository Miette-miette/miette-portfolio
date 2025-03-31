'use client'

import { usePathname } from "next/navigation"
import { v4 as uuidv4 } from 'uuid';

export const Breadcrumbs = () => {
    const pathname = usePathname();
    const segments = pathname.split("/");

    const lastSegments = segments[segments.length -1]
    
    segments.splice(1,1); 
    segments[0] = "Accueil";

    const view = segments.map((path) => (
        <div key={uuidv4()}>
            <p className={path !== lastSegments ? "text-rose-100" : "text-rose-300"}>{path}</p>
        </div>

    ))
    
    console.log(segments);
    return <>{view}</>;
    
}