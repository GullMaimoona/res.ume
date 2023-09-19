import React from 'react'
import {motion} from "framer-motion"


const Skill = ({name, x, y}:any) => {

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black text-white py-3 px-6 shadow-black cursor-pointer absolute dark:text-black dark:bg-white' 
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y, }}
        transition={{duration: 1.5}}
        >
        {name}
    
     </motion.div>

     
    )


}

export default function Skills() {
  return (
    <div className=' bg-white dark:bg-black'>
     <h2 className='font-bold text-8xl mt-40 w-full text-center dark:text-white'>Skills</h2>
     <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight bg-white dark:bg-circularBlack'>

        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-black cursor-pointer dark:text-black dark:bg-white ' whileHover={{scale:1.05}}>
           Web
        </motion.div>
 
        <Skill name="HTML" x="-28vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="TypeScript" x="0vw" y="12vw" />
        <Skill name="Next.js" x="-20vw" y="-15vw" />
        <Skill name="Chakra UI" x="15vw" y="-12vw" />
        <Skill name="Tailwind CSS" x="32vw" y="-5vw" />
        <Skill name="ReactJS" x="-0vw" y="-20vw" />
        <Skill name="Figma" x="-25vw" y="18vw" />
        <Skill name="Web Designer" x="18vw" y="20vw" />



     </div>
    </div>
  )
}


