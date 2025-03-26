'use client'

import React, { useEffect, useState } from 'react';

export default function Hobbies() {

  const Miette = [ 
    {
      src:"../media/hobbies-anim/base.png",
      text: "Cliquez sur les éléments verts pour découvrir mes passions!"
    },
    {
      src:"../media/hobbies-anim/art.png",
      text: "Je suis passionnée par tout type d'art visuel, et surtout par le dessin!"
    },
    {
      src:"../media/hobbies-anim/crochet.png",
      text: "J'adore crocheter des peluches rigolotes pour mon entourage!"
    },
    {
      src:"../media/hobbies-anim/game.png",
      text: "Pour me détendre, rien de mieux qu'un bon cosy game!"
    },
    {
      src:"../media/hobbies-anim/nature.png",
      text: "J'adore passer du temps en nature, faire pousser des plantes et observer les grenouilles!"
    }
  ]

    const [MietteImg, setMietteImg] = useState(Miette[0].src);
    const [MietteTxt, setMietteTxt] = useState(Miette[0].text);

    function changeMietteSrc(imgId) {
        setMietteImg(Miette[imgId].src);
        setMietteTxt(Miette[imgId].text)
    }

    console.log(MietteImg);
    

  return (
    <section id='hobbies'>
        <div className='bulle relative w-full h-30 -mb-15 md:h-50 md:-mb-30 flex items-center justify-center bg-[url(../../public/media/hobbies-anim/bulle.png)] bg-contain bg-center bg-no-repeat'>
            <p className='w-70 mb-8 md:w-90 md:mb-15'>{MietteTxt}</p>
        </div>
        <div className='h-80 md:h-150 bg-[url(../../public/media/hobbies-anim/bg.png)] bg-contain bg-center bg-no-repeat flex flex-col justify-center items-center'>
          
          <div className='flex flex-row'>
            <div className='flex flex-col items-center mt-20 mr-30 md:mt-40 md:mr-60'>
              <button id='art' className='w-25 h-18 mr-5 md:w-45 md:h-35 md:mr-10 relative z-1' onClick={() => changeMietteSrc(1)}></button>
              <button id='crochet' className='w-30 h-20 mt-8 md:w-50 md:h-40 md:mt-15 relative z-1' onClick={() => changeMietteSrc(2)}></button>
            </div>
            <div className='flex flex-col items-center mt-10 md:mt-20'>
              <button id='game' className='w-20 h-20 md:w-40 md:h-40 relative z-3' onClick={() => changeMietteSrc(3)}></button>
              <button id='nature' className='w-15 h-15 mt-20 ml-10 md:w-25 md:h-25 md:mt-40 md:ml-20 relative z-4' onClick={() => changeMietteSrc(4)}></button>
            </div>
          </div>
          
            
          <img id="miette-hobbies" src={MietteImg} className='flex justify-center items-center absolute h-80 md:h-150'/>
        </div>

    </section>
  );
}
