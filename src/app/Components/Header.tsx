'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/navigation'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
import {motion} from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher'



const CustomLink = ({href , title, className=""}:any) => {
  const router = useRouter();
  
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span 
      className={`
      h-[1px] inline-block bg-black
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router === href ? "w-full" : 'w-0'}
       dark:bg-white`}
      >
        &nbsp;
        </span>
    </Link>
  );
};


const CustomMobileLink = ({href , title, className="", toggle}:any) => {
  const router = useRouter();
  
  const handleClick = () => {
    toggle();
    router.push(href)
  }
  return(
    <button className={`${className} relative group text-white dark:text-black my-2`} onClick={handleClick}>
      {title}

      <span 
      className={`
      h-[1px] inline-block bg-white
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router === href ? "w-full" : 'w-0'}
       dark:bg-black`}
      
      >
        &nbsp;
        </span>
    </button>);
};


export default function Header() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () =>{

    setIsOpen(!isOpen)
  }

  return (
    <header className=' w-full py-8 px-32 font-semibold flex flex-col items-center justify-between bg-white dark:bg-black dark:text-white relative'  >

     <button className=' mr-72 fix flex-col justify-center items-center hidden lg:flex'onClick={handleClick} >
      <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
      <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
      <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} ></span>
     </button>



     <div  className='w-full flex justify-between items-center lg:hidden' >
     <nav >
        <CustomLink href="/"         title="Home"       className='mr-4' toggle={handleClick}/>        
        <CustomLink href='./about'   title="About"      className='mx-4' toggle={handleClick}/>    
        <CustomLink href="/projects" title="Projects"   className='mx-4' toggle={handleClick}/>
        <CustomLink href="/contact"  title="Contact"    className='ml-4' toggle={handleClick}/>
     </nav>


       <nav className=" flex items-center justify-center flex-wrap ">
        <motion.a href="https://twitter.com" target={"_blank"}
        whileHover={{y: -5}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3"
         >
          <TwitterIcon />
        </motion.a>

        <motion.a href="https://twitter.com" target={"_blank"} 
        className="w-6 mx-3" 
        whileHover={{y: -5}}
        whileTap={{scale:0.9}}
        >
          <GithubIcon />
        </motion.a>
        <motion.a href="https://twitter.com" target={"_blank"} 
          
          className="w-6 mx-3"
          whileHover={{y:-5}}
          whileTap={{scale:0.9}}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://twitter.com" target={"_blank"}
          
          className="w-6 mx-3 bg-white rounded-full"
          whileHover={{y:-5}}
          whileTap={{scale:0.9}}
        >
          <PinterestIcon />
        </motion.a>
        <motion.a href="https://twitter.com" target={"_blank"} 
          
          className="w-6 ml-3"
          whileHover={{y:-5}}
          whileTap={{scale:0.9}}
        >
          <DribbbleIcon />
        </motion.a>
        
        <button
         onClick={() => setMode(mode === "light" ? "dark" : "light")}
         className ={`ml-3 flex items-center justify-center rounded-full p-1
         
         ${mode === "light" ? "bg-black text-white" : "bg-white text-black" }
         
         `}
         >
       {
          mode === "dark" ?

            <SunIcon className={"fill-black"}/>
          : <MoonIcon className={"fill-black"}/>
       }
         </button>

    
    
      </nav>
      </div>


   { 
     isOpen ?
     <motion.div
     initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
     animate={{scale:1, opacity:1}}
     className=' min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 dark:bg-white/75 rounded-lg backdrop-blur-md py-32 '>
     <nav className='flex items-center flex-col justify-center'>
        <CustomMobileLink href="/"         title="Home"       className='' toggle={handleClick}/>        
        <CustomMobileLink href='./about'   title="About"      className='' toggle={handleClick}/>    
        <CustomMobileLink href="/projects" title="Projects"   className='' toggle={handleClick}/>
        <CustomMobileLink href="/contact"  title="Contact"    className='' toggle={handleClick}/>
     </nav>


       <nav className=" flex items-center justify-center flex-wrap mt-2  ">
        <motion.a href="https://twitter.com" target={"_blank"}
        whileHover={{y: -5}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3 sm:mx-1"
         >
          <TwitterIcon />
        </motion.a>

        <motion.a href="https://twitter.com" target={"_blank"} 
        className="w-6 mx-3 bg-white rounded-full dark:bg-black sm:mx-1" 
        whileHover={{y: -5}}
        whileTap={{scale:0.9}}
        >
          <GithubIcon />

        </motion.a>
        <motion.a href="https://twitter.com" target={"_blank"} 
          
          className="w-6 mx-3 sm:mx-1"
          whileHover={{y:-5}}
          whileTap={{scale:0.9}}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://twitter.com" target={"_blank"}
          
          className="w-6 mx-3 bg-white rounded-full sm:mx-1"
          whileHover={{y:-5}}
          whileTap={{scale:0.9}}
        >
          <PinterestIcon />
        </motion.a>
        <motion.a href="https://twitter.com" target={"_blank"} 
          
          className="w-6 ml-3 sm:mx-1"
          whileHover={{y:-5}}
          whileTap={{scale:0.9}}
        >
          <DribbbleIcon />
        </motion.a>
        
        <button
         onClick={() => setMode(mode === "light" ? "dark" : "light")}
         className ={`ml-3 flex items-center justify-center rounded-full p-1
         
         ${mode === "light" ? "bg-black text-white" : "bg-white text-black" }
         
         `}
         >
       {
          mode === "dark" ?

            <SunIcon className={"fill-black"}/>
          : <MoonIcon className={"fill-black"}/>
       }
         </button>

    
    
      </nav>
      </motion.div>


     : null

   }
      <div className=' absolute left-[43%] top-2 translate-x-[100%]'>
        <Logo />
      </div>
      
    </header>
  )
  
}
