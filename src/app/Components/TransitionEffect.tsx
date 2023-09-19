"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function TransitionEffect() {
  return (
    <>
   <motion.div
  className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-pink-600'
  initial={{ x: "100%", width: "100%" }}
  animate={{ x: "0%", width: "0%" }}
  exit={{ x: ["0%", "100"] }} // Change "exist" to "exit"
  transition={{ duration: 0.8, ease: "easeInOut" }}
/>

<motion.div
  className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white'
  initial={{ x: "100%", width: "100%" }}
  animate={{ x: "0%", width: "0%" }}
  exit={{ x: ["0%", "100"] }} // Change "exist" to "exit"
  transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
/>

<motion.div
  className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-black'
  initial={{ x: "100%", width: "100%" }}
  animate={{ x: "0%", width: "0%" }}
  exit={{ x: ["0%", "100"] }} // Change "exist" to "exit"
  transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
/>

<motion.div
  className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-purple-500'
  initial={{ x: "100%", width: "100%" }}
  animate={{ x: "0%", width: "0%" }}
  exit={{ x: ["0%", "100"] }} // Change "exist" to "exit"
  transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
/>

    </>
  )
}
