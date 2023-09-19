import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className=' w-full border-t-2 border-solid border-black font-medium text-lg dark:text-white dark:border-white '>
      <Layout className=' py-16 flex items-center justify-between '>
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <div className='flex items-center '>
         <span className=' text-pink-700 dark:text-sky-300 text-2xl px-1 '> &hearts; </span>

        <Link href="/" className=' underline underline-offset-2'>MaimoonaGull</Link>
        </div>
        <Link href="/" className=' underline underline-offset-2 '>Say Hello</Link>
      </Layout>
    </footer>
  )
}
