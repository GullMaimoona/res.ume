"use client"
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import jpeg from '../../../public/d.webp'
import {  useInView, useMotionValue, useSpring } from 'framer-motion'
import Layout from '../Components/Layout'
import Skills from '../Components/Skills'
import Experience from '../Components/Experience'
import Education from '../Components/Education'
import TransitionEffect from '../Components/TransitionEffect'







const AnimatedNumbers =({value}:any)   => {
const ref = useRef(null);  

const motionValue = useMotionValue (0);
const springValue = useSpring (motionValue, { duration: 3000 })
const isInView = useInView (ref);

useEffect(() => {
  if (isInView) {
    motionValue.set(value);
  }
}, [isInView, value, motionValue]);

useEffect(() => {
  springValue.on("change", (latest) => {
    if (ref.current && typeof latest === "number" && latest.toFixed(0) <= value) {
      // Use type assertion to tell TypeScript that ref.current is an HTML element
      (ref.current as HTMLElement).textContent = latest.toFixed(0);
    }
  });
}, [springValue, value]);

  
  
return <span ref={ref }></span>

  
}


  


export default function about() {
  return (
   <div className=' bg-white dark:bg-black'>
    
     <Head>
       <title >MaimoonaGull  |    About Page </title>
       <meta name='description' content='any description' />
     </Head >

     <TransitionEffect />
   

      <main className=' w-full mb-16 flex flex-col iteme-center justify-center dark:text-white '>
      <Layout className=' pt-16 '>
     <h1 className=' text-center text-bold text-6xl font-abc font-extrabold mt-16 mb-8 dark:text-white'>I Have No Special Talents. I Am Only Passionately Curious</h1>
      </Layout>
     <div className=' grid w-full grid-cols-8 gap-28  '>
      <div className=' col-span-3 flex flex-col items-start justify-start ml-24'>
        <h2 className=' mb-4 text-2xl font-bold uppercase text-black dark:text-white '>Biography</h2>
        <p className=' font-medium'>Hi, I&apos;m Maimoona Gull, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 1 year of experience in the field. I am always looking for new and innovative ways to bring my clients&apos; visions to life.</p>

        <p className=' font-medium my-4'>I believe that design is about more than just making things look pretty – it&apos;s about solving problems and creating intuitive, enjoyable experiences for users.</p>

        <p className=' font-medium mb-10 '>Whether I&apos;m working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
    </div>

   
    <div className=' col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8 dark:bg-black dark:border-white '>
      <div className=' absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-black dark:bg-white '  />
      <Image src={jpeg} alt="maimoona gull" className=' w-full h-auto rounded-2xl '
        priority
        sizes="(max-width: 768px) 100vw
        (max-width: 1200px) 50vw,
        33vw"
      />
    </div>

    <div className=' col-span-2  flex flex-col justify-between items-below dark:bg-black ' >

      <div className=' flex flex-col items-end justify center mr-24 '> 
        <span className=' inline-block text-7xl font-bold '>
           <AnimatedNumbers  value={10}/>+
        </span>
        <h2 className=' text-xl font-medium capitalize text-black/75 dark:text-white/75'>Satisfied Clients </h2>

      </div>

      <div className=' flex flex-col items-end justify center  mr-24'> 
        <span className=' inline-block text-7xl font-bold '>
        <AnimatedNumbers  value={20}/>+
        </span>
        <h2 className=' text-xl font-medium capitalize text-black/75 dark:text-white/75'>Projects Completed</h2>

      </div>

      <div className=' flex flex-col items-end justify center mr-24 '> 
        <span className=' inline-block text-7xl font-bold '>
        <AnimatedNumbers  value={1} className/>+
        </span>
        <h2 className=' text-xl font-medium capitalize text-black/75 dark:text-white/75'>Year Experience</h2>

      </div>
    </div>
    
     </div>
     </main>
     <Skills />
     <Experience />
    <Education />
    <div>
      <h1 className=' bg-white text-white dark:bg-black dark:text-black'>
      mamammamam
      </h1>
     </div>
     
     
   
   
   </div>
  )
}    