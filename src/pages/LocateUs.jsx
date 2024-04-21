import React from 'react'
import { motion } from 'framer-motion'
import { FillAnimX } from '../anim'

const LocateUs = () => {
  return (
    <div className='min-h-screen bg-[#204365] px-12 flex flex-col items-center' id='location'>
      <h1 className='font-roboto font-bold text-[#e84574] text-5xl mt-12'>Find <span className='font-pinyon text-[#f4f0ea]'>Us</span> At</h1>
      <motion.hr variants={FillAnimX} initial="initial" whileInView="open" className='mb-12 w-full origin-center border border-[#f4f0ea]' />
      <div className='w-full mb-12'>
      <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4503825351107!2d78.685425!3d10.776776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf533f5cc9a49%3A0x69927ccd52a0726f!2sAishwarya%20Steel%20Corporation!5e0!3m2!1sen!2sin!4v1713430390743!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default LocateUs