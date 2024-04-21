import React, { useState } from 'react'
import Image from './Image'
import Body from './Body'
import { height } from '../../anim'
import { motion } from 'framer-motion'

const links = [
    {
      title: "Home",
      href: "home",
      src: "sleek-design.jpg"
    },
    {
      title: "Our Mission",
      href: "mission",
      src: "mission.jpg"
    },
    {
      title: "Product Features",
      href: "product",
      src: "lock-system.jpg"
    },
    {
      title: "Our Clients",
      href: "clients",
      src: "doors.jpg"
    },
    {
      title: "Find Us",
      href: "location",
      src: "storage-system.jpg"
    },
    {
      title: "About Us",
      href: "about",
      src: "racks.jpg"
    }
]

const Nav = ({setIsActive}) => {
    const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0})

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className='flex flex-wrap justify-center items-center w-full mt-12 overflow-hidden'>
        <Body links={links} setIsActive={setIsActive} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
        <Image src={links[selectedLink.index].src} selectedLink={selectedLink} />
        <div className='flex flex-row flex-wrap justify-between w-full'>
          <p className='lg:w-1/3 lg:mt-0 font-roboto font-bold text-[#e84574] text-xl text-center sm:w-1/2'>Transforming Steel Into <span className='font-pinyon font-light text-[#f4f0ea]'>Style</span></p>
          <p className='lg:w-1/5 lg:mt-0 font-pinyon text-[#f4f0ea] text-xl text-center sm:w-1/2'>Aishwarya Armario</p>
          <p className='lg:w-1/3 lg:mt-0 font-roboto font-bold text-[#e84574] text-xl text-center sm:w-1/2'><span className='font-pinyon font-light text-[#f4f0ea]'>Since</span> 1992</p>
        </div>
    </motion.div>
  )
}

export default Nav