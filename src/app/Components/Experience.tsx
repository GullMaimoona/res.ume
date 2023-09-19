import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({expertise, company, work }:any) => {
    const ref = useRef(null);
return <li ref={ref} className=' my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between '>
    
    <LiIcon reference={ref}/>
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
        <h3 className=' capitalize font-bold text-2xl'>
            {expertise}&nbsp;<a href="http://"
            target="_blank" 
            className=' text-pink-500 capitalize dark:text-sky-300'
            
            >@{company} </a>
        </h3>
        <p className=' font-medium w-full'>
            {work}
        </p>
    </motion.div>
</li>
}
export default function Experience() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end", "center start"]
        }
    )
  return (
    <div className=' mt-48 '>
    <h2 className=' font-bold text-8xl mb-32 w-full text-center dark:text-white'>Experience 
    
    </h2>
    <div ref={ref} className='  w-[75%] mx-auto relative dark:text-white'>
        <motion.div
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-black origin-top ml-36 dark:bg-white' />

         <ul className=' w-full flex flex-col items-start justify-between ml-4'>
          <Details 
           expertise="Skilled" company="Typescript & HTML"
           work="Calculator, ATM and Number Guessing Game."
          />
            <Details 
           expertise="Skilled" company="Next.js & Chakra UI"
           work=" Build a Todo app, Pricing UI and Website."
           />
            <Details 
           expertise="Skilled" company="Next.js & Tailwind"
           work="Designed a Panaverse Website with Tailwind."
          
          
          />
         </ul>
    </div>
    </div>
    
  )
    
}
