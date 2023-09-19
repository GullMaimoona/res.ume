import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info }:any) => {
    const ref = useRef(null);
return <li ref={ref} className=' my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between '>
    
    <LiIcon reference={ref}/>
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
        <h3 className=' capitalize font-bold text-2xl'>
            {type}
        </h3>
        <span className=' capitalize font-medium text-black/75 dark:text-white/75'>
           {time} | {place}
        </span>
        <p className=' font-medium w-full'>
            {info}
        </p>
    </motion.div>
</li>
}
export default function Education() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end", "center start"]
        }
    )
  return (
    <div className=' my-48 bg-white dark:bg-black'>
    <h2 className=' font-bold text-8xl mb-32 w-full text-center dark:text-white'>Education
    
    </h2>
    <div ref={ref} className='  w-[75%] mx-auto relative '>
        <motion.div
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-black origin-top ml-36 dark:bg-white ' />
         <ul className=' w-full flex flex-col items-center justify-center ml-4 dark:text-white'>

          <Details 
           type="Matric with Bio Science" 
           time="2019"
           place="KIPS School & KIPS Evening Coaching"
           info="Explored nature in matric. Learned self discipline and took part in Extracurricular activities  "
          />

          <Details 
           type="FSc Pre-Medical" 
           time="2021"
           place="Govt College & KIPS Evening Coaching"
           info="I have a basic knowledge of Medical. I can treat myself and others in minor Diseses. Also teach them about general nutrition, food and health.  "
           
          />

          <Details 
           type="Bachelor (BSIT)" 
           time="2022-Continue"
           place="Virtual University Of Pakistan"
           info="Relevant courses included Data Structures and OPP, Computer Systems Engineering, and much more in Future."
          />

          <Details 
           type="BootCamp PIAIC" 
           time="2022-Continue"
           place="University of Management and Technology"
           info="Completing coursework in advanced topics such as Next.js, React, and Machine Learning Engineering."
           
          />
            
     
         </ul>
    </div>
    </div>
    
  )
    
}
