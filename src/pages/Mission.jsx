import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion';
import { smoothEaseIn, blur, FillAnimX } from '../anim';

const Mission = () => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setwindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const container = useRef(null);
    const stickyMask = useRef(null);

    const initialMaskSize = 0.9;
    const targetMaskSize = 30;

    useEffect( () => {
      requestAnimationFrame(animate)
    }, [])

    const easing = 0.15;
    let easedScrollProgress = 0;

    const animate = () => {
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
      requestAnimationFrame(animate)
    }
    
    const getScrollProgress = () => {
      const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress
    }

  return (
    <>
     {
        windowWidth >= 1245 ? (
            <main className='pb-[50vh] bg-[#f4f0ea] flex flex-col' id='mission'>
            <div ref={container} className='relative h-[300vh] bg-[#f4f0ea]'>
                <div ref={stickyMask} className='flex overflow-hidden sticky top-0 h-[100vh] items-center justify-centers' 
                 style={{maskImage: 'url(/images/transforming.svg)', maskPosition: '52.35% center', maskRepeat: 'no-repeat', maskSize: '90%'}}>
                    <video autoPlay muted loop>
                        <source src='/images/steel-construction-horizontal.mp4' type='video/mp4' />
                    </video>
                </div>
            </div>
    
            <div className='flex flex-col px-12'>
             <motion.p 
              variants={smoothEaseIn}
              initial="hidden"
              whileInView="visible"
              className='self-center mt-12 font-roboto font-bold text-center text-8xl text-[#204365]'
             > Steel Into <span className='font-pinyon text-[#b03b5c]'>Style</span></motion.p>
             <motion.hr variants={FillAnimX} initial="initial" whileInView="open" className='w-full border border-[#e84574] origin-center' />
    
             <motion.div 
              variants={blur}
              initial="open"
              whileInView="closed"
              className='mt-12 px-20 font-roboto text-center text-2xl text-[#204365]'>
              Our mission at <span className='text-[#e84574] font-bold'>"Tranforming Steel into Style"</span> is to 
              revolutionize the way steel is perceived and utilized in design. 
              We aim to showcase the beauty, versatility, and sustainability of steel 
              through innovative and creative designs that merge functionality with aesthetics. 
              By transforming steel into style, we strive to inspire architects, 
              designers, and consumers to reimagine the possibilities of steel, 
              leading to a more sustainable and visually appealing built environment.
             </motion.div>
            </div>
            
            </main>
        ) : (
            <div className='min-h-screen w-full px-12 py-12 bg-[#f4f0ea] flex flex-col items-center justify-center' id='mission'>
                <div className='h-full w-full flex flex-col justify-center items-center'>
                  
                 <motion.h1 
                  variants={smoothEaseIn}
                  initial="hidden"
                  whileInView="visible" 
                  className='font-roboto font-bold text-[#204365] text-center text-5xl'>
                    Transforming Steel Into <span className='font-pinyon text-[#e84574]'>Style</span>
                 </motion.h1>

                 <motion.hr variants={FillAnimX} initial="initial" whileInView="open" className='w-full border border-[#e84574]' />
                 
                 <motion.p 
                  variants={blur}
                  initial="open"
                  whileInView="closed"
                  className='mt-12 font-roboto font-light text-center text-2xl text-[#204365]'>
                   Our mission at <span className='text-[#e84574] font-medium'>"Tranforming Steel into Style"</span> is to 
                   revolutionize the way steel is perceived and utilized in design. 
                   We aim to showcase the beauty, versatility, and sustainability of steel 
                   through innovative and creative designs that merge functionality with aesthetics. 
                   By transforming steel into style, we strive to inspire architects, 
                   designers, and consumers to reimagine the possibilities of steel, 
                   leading to a more sustainable and visually appealing built environment.
                 </motion.p>
                </div>
            </div>
        )
     }
    </>
  )
}

export default Mission