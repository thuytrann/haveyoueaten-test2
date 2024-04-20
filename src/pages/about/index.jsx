import React, { useRef, useContext } from 'react'
import Picture from '../../../public/images/3.jpg'
import Image from 'next/image';
import { TransitionContext } from '@/context/TransitionContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

export default function Index() {

  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const image = useRef();

  useGSAP( () => {
    const targets = gsap.utils.toArray(["p", ".vertical-sign"])
    gsap.fromTo(targets, {scale: 0.85, opacity: 0}, {scale: 1, opacity: 1, stagger: 0.5})
    timeline.add(gsap.to(container.current, { opacity: 0 }))
  }, {scope: container})

  return (
    <div ref={container} className='fixed h-screen w-screen overflow-clip living-room'>
      <div className="h-[100vh] w-full flex flex-col justify-center items-center gap-5">
      <Link scroll={false} href="/projects">
          <div className="vertical-sign" id="vs-kitchen">
        
            <div className="v-s-inner-container">
              <p className="vertical-sign-content">Kitchen</p>

            </div>
          </div>
        </Link>
        <Link scroll={false} href="/transportation">
          <div className="vertical-sign" id="vs-journey">
        
            <div className="v-s-inner-container">
              <p className="vertical-sign-content">Journey</p>

            </div>
          </div>
        </Link>
        
      </div>
      <div className="prefetch">
    <img src="images/Bango.jpeg" alt=""></img>
    <img src="images/Baninox.jpeg" alt=""></img>
    <img src="images/ca1.png" alt=""></img>
    <img src="images/ca2.png" alt=""></img>
    <img src="images/ca3.png" alt=""></img>
    <img src="images/canh-1.png" alt=""></img>
    <img src="images/canh-2.png" alt=""></img>
    <img src="images/canh-3.png" alt=""></img>
    <img src="images/rau-1.png" alt=""></img>
    <img src="images/rau-2.png" alt=""></img>
    <img src="images/rau-3.png" alt=""></img>
    <img src="images/cakhoto.png" alt=""></img>
    <img src="images/canhchua.png" alt=""></img>
    <img src="images/rauxao.png" alt=""></img>
    <img src="images/com-0.png" alt=""></img>
    <img src="images/com-1.png" alt=""></img>
    <img src="images/com-2.png" alt=""></img>
    <img src="images/com-3.png" alt=""></img>
  </div>
    </div>
    
  )
}
