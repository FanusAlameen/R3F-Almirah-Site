import { motion } from 'framer-motion';
import { blur } from '../../anim';

const Body = ({links, selectedLink, setSelectedLink, setIsActive}) => {
    
    return (
        <div className='md:w-1/2 mb-8 flex flex-col gap-4 sm:w-full'>
        {
            links.map( (link, index) => {
                const { title, href } = link;
                return <a key={index} href={`#${href}`} className='no-underline uppercase'>
                <motion.p 
                 onMouseOver={() => {setSelectedLink({isActive: true, index})}} 
                 onMouseLeave={() => {setSelectedLink({isActive: false, index})}}
                 onClick={() => setIsActive(false)} 
                 variants={blur} 
                 animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}
                 className='font-roboto md:mt-1 md:mb-2 text-center text-[#f4f0ea] md:text-5xl overflow-hidden hover:text-[#e84574] sm:text-2xl'
                >
                    {title}
                </motion.p>
                </a>
            })
        }
        </div>
    )
}

export default Body;