import { motion } from 'framer-motion';
import { opacity } from '../../anim';

const Image = ({src, selectedLink}) => {
  return (
    <motion.div 
     variants={opacity} 
     initial="initial" 
     animate={selectedLink.isActive ? "open" : "closed"} 
     className='lg:w-1/2 lg:mt-0 lg:h-[500px] block mb-8 relative sm:w-full sm:h-[200px]' >
        <img 
        src={`/public/images/${src}`}
        alt="image"
        className='object-cover'
        />
    </motion.div>
  )
}

export default Image;