import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { smoothEaseIn, background } from '../../anim'
import Nav from './Nav'

const Header = () => {
    const [isActive, setIsActive] = useState(false)

  return (
    <motion.div 
     variants={smoothEaseIn}
     initial="hidden"
     animate="visible" 
     className='w-full flex flex-col px-12 py-4 fixed top-0 z-10'>
        <div className='self-start flex items-center justify-between w-full'>
            <div className='w-[70px] h-[70px]'>
                <img className='object-cover' src='/images/aishwarya-logo-3.png' />
            </div>
            
            <div onClick={() => {setIsActive(!isActive)}} className='flex items-center justify-center gap-2 cursor-pointer' >
                <div className='relative flex items-center'>
                    <p className='font-roboto font-bold text-xl text-[#e84574] transition duration-150 ease-out hover:text-[#f4f0ea]'>{!isActive ? 'Menu' : 'Close'}</p>
                </div>
            </div>
        </div>

        <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className='bg-[#204365] w-full absolute left-0 top-0 -z-10'></motion.div>
        <AnimatePresence mode="wait">
            {isActive && <Nav setIsActive={setIsActive} />}
        </AnimatePresence>
    </motion.div>
  )
}

export default Header