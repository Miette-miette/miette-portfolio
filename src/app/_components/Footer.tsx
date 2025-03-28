'use client'

import React , { Component, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {

    return(
        <footer className='flex justify-center items-center z-6 bg-[url(../../public/media/backgrounds/footer-sm.svg)]  md:bg-[url(../../public/media/backgrounds/footerxl.svg)] bg-bottom bg-no-repeat bg-cover'>
            <div>
                <Image src="/miettelogosolo.png" width={55} height={65} alt='logo'/>
            </div>
        </footer>
    )

}
