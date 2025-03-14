'use client'

import React , { Component, useState } from 'react';
import Link from 'next/link';

export default function Footer() {

    return(
        <footer className='flex justify-center items-center bg-[url(../../public/media/backgrounds/footer-sm.svg)]  md:bg-[url(../../public/media/backgrounds/footerxl.svg)] bg-bottom bg-no-repeat bg-cover'>
            <div>
                <img src='/'/>
            </div>
        </footer>
    )

}
