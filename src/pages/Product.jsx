import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ImageAnim, FillAnimX, FillAnim, smoothEaseIn, smoothEaseInX } from '../anim'

const productData = [
  {
    id: 1,
    src: 'lock-system.jpg',
    heading: 'Lock',
    span: 'System',
    position: 'top-1/2 left-1/2',
    content: 'Our almirahs are equipped with a state-of-the-art locking mechanism, ensuring the safety and security of your belongings. The locks are designed to be durable and reliable, providing you with peace of mind.'
  },
  {
    id: 2,
    src: 'doors.jpg',
    heading: 'Durable',
    span: 'Doors',
    position: 'top-1/2 right-1/2',
    content: 'The steel doors of our almirahs are crafted using high-quality steel, making them strong and resistant to wear and tear. They are designed to withstand daily use and maintain their elegance over time.'
  },
  {
    id: 3,
    src: 'storage-system.jpg',
    heading: 'Stylish',
    span: 'Storage',
    position: 'top-1/2 left-1/2',
    content: 'Our almirahs feature drawers with a sleek and modern design, adding a touch of sophistication to your storage space. The drawers are spacious and easy to open and close, making organizing your belongings a breeze.'
  },
  {
    id: 4,
    src: 'racks.jpg',
    heading: 'Roomy',
    span: 'Shelves',
    position: 'top-5 right-0',
    content: 'The racks in our almirahs are designed to be spacious and practical, allowing you to store a wide range of items with ease. Whether you need to store clothes, books, or other belongings, our almirahs have ample space to accommodate your needs.'
  },
  {
    id: 5,
    src: 'sleek-design.jpg',
    heading: 'Sleek',
    span: 'Design',
    position: 'top-1/4 left-0',
    content: 'Our almirahs are designed with a sleek and modern aesthetic, adding a touch of elegance to any room. The clean lines and minimalist design make our almirahs a stylish addition to your home or office.'
  }
]

const Product = () => {
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
          <div className='min-h-screen w-full bg-[#204365] flex flex-col' id='product'>
           {
             productData.map(eachProduct => (
               <div key={eachProduct.id} className='w-full h-full flex relative'>
                <div className='w-full h-full'>
                    <motion.img variants={ImageAnim} initial="initial" whileInView="open" className='object-fit origin-left' src={`/images/${eachProduct.src}`} alt={eachProduct.heading} />
                </div>
     
                <motion.div variants={FillAnim} initial="initial" whileInView="open" className={`w-2/5 py-8 px-10 bg-[#000000]/50 absolute ${eachProduct.position} origin-top`}>
                  <motion.h1 className='font-roboto font-bold mb-2 text-xl text-[#f4f0ea]'>0{eachProduct.id}</motion.h1>
                  <motion.hr variants={FillAnimX} initial="initial" whileInView="open" className='w-full origin-center border border-[#f4f0ea]' />
                  <motion.h1 variants={smoothEaseInX} initial="hidden" whileInView="visible" className='mt-2 font-roboto font-bold text-5xl text-[#204365]' >{eachProduct.heading} <span className='font-pinyon text-[#f4f0ea]'>{eachProduct.span}</span></motion.h1>
                  <motion.p variants={smoothEaseIn} initial="hidden" whileInView="visible" className='font-roboto font-light text-xl text-[#f4f0ea]'>
                   {eachProduct.content}
                  </motion.p>
                </motion.div>
               </div>
             ))
           }
          </div>
        ) : (
          <div className='min-h-screen w-full bg-[#204365] flex flex-col px-12' id='product'>
            <div className='my-8'>
              <motion.h1 
                variants={smoothEaseIn}
                initial="hidden"
                whileInView="visible" 
                className='font-roboto font-bold text-[#f4f0ea] text-center text-5xl'>
                  Product <span className='font-pinyon text-[#e84574]'>Highlights</span>
               </motion.h1>
               <motion.hr variants={FillAnimX} initial="initial" whileInView="open" className='w-full border border-[#f4f0ea]' />
            </div>
           {
             productData.map(eachProduct => (
               <div key={eachProduct.id} className='w-full h-full my-8'>

                <div className='w-full'>
                    <motion.img variants={ImageAnim} initial="initial" whileInView="open" className='object-fit origin-left' src={`/images/${eachProduct.src}`} alt={eachProduct.heading} />
                </div>
     
                <motion.div variants={FillAnim} initial="initial" whileInView="open" className={`bg-[#000000]/50 origin-top px-4 py-4`}>
                  <motion.h1 className='font-roboto font-bold mb-2 text-xl text-[#f4f0ea]'>0{eachProduct.id}</motion.h1>
                  <motion.hr variants={FillAnimX} initial="initial" whileInView="open" className='border-[#f4f0ea]' />
                  <motion.h1 variants={smoothEaseInX} initial="hidden" whileInView="visible" className='mt-2 font-roboto font-bold text-2xl text-[#e84574]' >{eachProduct.heading} <span className='font-pinyon text-[#f4f0ea]'>{eachProduct.span}</span></motion.h1>
                  <motion.p variants={smoothEaseIn} initial="hidden" whileInView="visible" className='font-roboto font-light text-xl text-[#f4f0ea]'>
                   {eachProduct.content}
                  </motion.p>
                </motion.div>
               </div>
             ))
           }
          </div>
        )
      }
    </>
  )
}

export default Product