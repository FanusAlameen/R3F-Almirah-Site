import React from 'react'
import { useState, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import { FillAnimX } from '../anim'

const clientData = [
    {
        id: 1,
        src: 'Amman-TRY.svg'
    },
    {
        id: 2,
        src: 'harihar-alloys.jpeg'
    },
    {
        id: 3,
        src: 'legend-saravana.png'
    },
    {
        id: 4,
        src: 'mangal-and-mangal.png'
    },
    {
        id: 5,
        src: 'pothys-logo.png'
    },
    {
        id: 6,
        src: 'revathy-redhills.png'
    },
    {
        id: 7,
        src: 'super-saravana.png'
    }
]

const Clients = () => {
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

  return (
    <>
     {
        windowWidth >= 1245 ? (
            <div className='min-h-screen bg-[#204365] px-12 py-12 flex flex-col items-center justify-center' id='clients'>
              <h1 className='font-roboto font-bold text-[#e84574] text-5xl mt-12'>Our <span className='font-pinyon text-[#f4f0ea]'>Clients</span></h1>
              <motion.hr variants={FillAnimX} initial="initial" whileInView="open" className='mb-12 w-full origin-center border border-[#f4f0ea]' />
              <Marquee gradient={true} gradientColor='#204365' pauseOnHover={true}>
                  <div className='w-full h-[300px] bg-[#ffffff] flex flex-row gap-8 justify-center items-center'>
                  {
                      clientData.map(data => (
                       <div key={data.id} className='w-[300px] h-[200px] overflow-y-hidden flex flex-col items-center justify-center'>
                        <img className='object-fit' src={`/images/${data.src}`} alt='logo' />
                       </div>
                      ))
                  }
                  </div>
              </Marquee>
            </div>
        ) : (
            <div className='min-h-screen bg-[#204365] px-12 py-12 flex flex-col items-center' id='clients'>
              <h1 className='font-roboto font-bold text-[#e84574] text-5xl mt-8'>Our <span className='font-pinyon text-[#f4f0ea]'>Clients</span></h1>
              <motion.hr variants={FillAnimX} initial="initial" whileInView="open" className='mb-12 w-full origin-center border border-[#f4f0ea]' />
              
              <div className='flex flex-wrap gap-8 justify-center'>
                  {
                      clientData.map(eachData => (
                        <div key={eachData.id} className='sm:w-full md:w-[30%] bg-white p-2 flex flex-col items-center justify-center'>
                            <img src={`/images/${eachData.src}`} className='object-cover' />
                        </div>
                      ))
                  }
              </div>
            </div>
        )
     }
    </>
  )
}

export default Clients