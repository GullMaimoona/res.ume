import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

export default function HireMe() {
  return (
    <div className=' fixed left-4 bottom-4 flex items-center jusitfy-center overflow-hidden'>
        
        <div className=' w-48 h-auto flex items-center justify-center relative '>
        <CircularText className={" fill-black dark:fill-white animate-spin-slow"} />

        <Link href="mailto:gullmaimoona853@gmail.com" className=' flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border boder-solid border-black w-20 h-20 rounded-full font-semibold hover:bg-white hover:text-black
        
        dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white hover:dark:border-white"
        '>

            Hire Me 
        </Link>
 

        </div>
        
        
        </div>
  )
}
