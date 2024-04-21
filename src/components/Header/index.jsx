import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useMute } from '@/context/MuteContext';

export default function Index({ location }) {
  //console.log(location);
  const audioRef = useRef(null);
  const { toggleMute, muted } = useMute();
  //const [activeAudio, setActiveAudio] = useState(null);

  useEffect(() => {
    
    const customCursor = document.getElementById('cursor');

  
    const handleMouseMove = (e) => {
      // Set custom cursor position to match mouse position
      customCursor.style.left = e.clientX + 'px';
      customCursor.style.top = e.clientY + 'px';
    };

    const handleMouseDown = () => {
      // Change cursor background image when mouse is down
      customCursor.style.backgroundImage = "url('images/cursor2.svg')";
    };

    const handleMouseUp = () => {
      // Change cursor background image back to normal when mouse is up
      customCursor.style.backgroundImage = "url('images/cursor2.svg')";
    };

    // Listen for mousemove, mousedown, and mouseup events on the document
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Clean up event listeners when component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
 


  return (
    <div className='px-8 py-6 fixed w-full z-10'>
      <div style={{ 
      width: location === '/projects' ? '400px' : '20px',
      height: location === '/projects' ? '600px' : '20px',
   
    transform: location === '/projects' ? 'translate(-350px, -20px)' : 'translate(-10px,-10px)',
    
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
          backgroundImage: location === '/projects' ? 'url(images/dua2.png)' : 'url(images/cursor2.svg)' ,       


      }}
  id="cursor">
      
      </div>
      
        <div className="absolute flex gap-5 global-nav">
          <Link scroll={false} href="/">
          <img src='images/logo.svg' alt=""></img>
          </Link>
          
        </div>
        
        <div onClick={toggleMute} className="absolute right-8" id='audio-toggle'>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.3056 12.6334C24.3056 12.48 24.3055 12.3332 24.2988 12.1798C24.2308 10.1254 23.6876 8.19103 22.7775 6.4968C20.6995 2.6214 16.7266 0 12.1562 0C7.58572 0 3.6061 2.6214 1.52801 6.4968C0.617995 8.19771 0.0747094 10.1254 0.00679779 12.1798C6.63214e-06 12.3332 0 12.48 0 12.6334V18.9168C0 21.6716 1.97622 23.9661 4.61798 24.5197C4.90321 24.8066 5.33786 25 5.82682 25C6.31579 25 6.75042 24.8132 7.03565 24.5197L7.05602 24.4997V13.3338H7.04922C6.77079 13.0336 6.32257 12.8335 5.82003 12.8335C5.31748 12.8335 4.86927 13.0336 4.59083 13.3338H4.58403C3.67402 13.5205 2.8455 13.9274 2.15281 14.4811C2.09848 14.5277 1.65704 14.9146 1.52121 15.0747V12.52C1.52121 12.3399 1.67062 12.1865 1.86077 12.1865H1.87437H2.01018C2.23428 6.57017 6.68929 2.08778 12.1426 2.08778C17.5959 2.08778 22.0441 6.57017 22.2682 12.1865H22.4244C22.6145 12.1865 22.7639 12.3399 22.7639 12.52V15.0747C22.6281 14.9146 22.4719 14.7612 22.309 14.6345C22.309 14.6345 22.1867 14.5277 22.1324 14.4811C21.4397 13.9274 20.6112 13.5272 19.7012 13.3338C19.4159 13.0336 18.9677 12.8335 18.4652 12.8335C17.9626 12.8335 17.528 13.0203 17.236 13.3271V24.5131C17.236 24.5131 17.2427 24.5197 17.2495 24.5197C17.5348 24.8066 17.9762 25 18.4584 25C18.9405 25 19.382 24.8132 19.6672 24.5197C22.3089 23.9661 24.2852 21.6716 24.2852 18.9168C24.2852 18.4765 24.2309 18.043 24.1358 17.6294C24.2309 18.043 24.2852 18.4699 24.2852 18.9168V12.6334H24.3056Z" fill="#DBFF00" stroke="black"/>
          </svg>
        </div>

        <div className="site-map"></div>
    </div>
    
  )
}
