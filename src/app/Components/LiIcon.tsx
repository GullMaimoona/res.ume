import React from 'react'
import { useScroll } from "framer-motion"
import { motion } from "framer-motion"


export default function LiIcon({reference}:any)  {

    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

  return (
   <figure className=' absolute left-0 stroke-black dark:stroke-white'>
    <svg className=' ml-36 -rotate-90' width="75" height="75" viewBox="0 0 100 100">

        <circle cx="75" cy="50" r="20" className=' stroke-pink-500 dark:stroke-sky-300 stroke-1 fill-none' />
        <motion.circle cx="75" cy="50" r="20" className='  stroke-[5px] fill-white dark:fill-black'
        style={{
            pathLength : scrollYProgress
        }}
        />
        <circle cx="75" cy="50" r="10" className=' stroke-1 fill-pink-500 dark:fill-sky-300'/>
    </svg>
   </figure>
  )
}
