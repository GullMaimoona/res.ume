import React from 'react'
import Head from 'next/head'
import Layout from '../Components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import jpeg from '../../../public/fe.jpg'
import p from '../../../public/mg.jpg'
import U from '../../../public/U.jpg'
import TransitionEffect from '../Components/TransitionEffect'



const FeaturedProject = ({type, title, summary, img, link}:any) => {
  return( 
    
      

    <article className=' w-full flex items-center justify-between relative 
    rounded-3xl border-solid border-pink-500 bg-white shadow-lg p-12  border-[25px]   dark:bg-black  dark:border-purple-700 dark:text-white'>
      <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black '/>
    <Link href=  {link} target="_blank "
    className=' w-1/2 cursor-pointer overflow-hidden rounded-lg'
    >
      <Image src={img} alt={title} className='w-full h-auto' 
        priority
        sizes="(max-width: 768px) 100vw
        (max-width: 1200px) 50vw,
        50vw"
      />
    </Link>

    <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
      <span className=' text-pink-600 font-medium text-xl dark:text-sky-300'>{type}</span>
      <Link href=  {link} target="_blank" className=' hover:underline underline-offset-2'>
        <h2 className=' my-2 w-full text-left text-4xl font-bold'>{title}</h2>
    </Link>
    <p className=' my-2 font-medium text-black dark:text-white'>{summary}</p>
   <div className=' mt-2 flex items-center '>
   <Link href={link} target="_blank"
   className=' rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold dark:bg-white dark:text-black '
   >
    Visit Project
   </Link>
   </div>
    </div>
    </article>
  )
}


const Project = ({title, type, image, link}:any) => {
  return(
    <article className=' w-full flex flex-col items-center justify-center rounded-2xl 
    border-[25px] border-solid border-blue-500 bg-white p-6 relative ml-28 border-md  dark:bg-black dark:border-lime-700 dark:text-white
    '>
        <Link href=  {link} target="_blank "
    className=' w-full cursor-pointer overflow-hidden rounded-lg'
    >
      <Image src={p} alt={title} className=' w-full h-auto' 
        priority
        sizes="(max-width: 768px) 100vw
        (max-width: 1200px) 50vw,
        50vw"
      />
    </Link>

    <div className='w-full flex flex-col items-start justify-between mt-4'>
      <span className=' text-pink-600 font-medium text-xl dark:text-sky-300 '>{type}</span>
      <Link href=  {link} target="_blank" className=' hover:underline underline-offset-2'>
        <h2 className=' my-2 w-full text-left text-3xl font-bold'>{title}</h2>
    </Link>
   
   <div className=' mt-2 flex items-center '>
   <Link href={link} target="_blank"
   className='  text-2xl font-semibold underline underline-offset-2'
   >
    Visit
   </Link>
   </div>
    </div>
    </article>
  )
}

export default function pppp() {
  return (
    < div className=' bg-white dark:bg-black'>
      <Head>
       <title >
          MaimoonaGull  |   Projects Page 
        </title>
      </Head >
   
     <TransitionEffect />
      <main className=' w-full mb-16 flex flex-col iteme-center justify-center '>
        <Layout className=' pt-16 '>
        <h1 className=' text-center text-bold text-8xl font-abc font-bold mt-20 dark:text-white '> Imagination Trumps Knowledge</h1>
        </Layout>
        <div className=' grid grid-cols-12 gap-24 '>
          <div className=' col-span-10 ml-48'>

            <FeaturedProject 
              title="Todo App"  
          img={jpeg}
          summary="Todo app by using Next.js and HTML. It acts as an external memory aid. It also  allows you to prioritize the tasks that are more important."
          link="https://todo-tau-green.vercel.app/"  
          type="Featured Project"  
            />
          </div>
          <div className=' col-span-5'>

          <Project
              title="Ecommerce website"  
              img={p}
              summary="Todo app by using Next.js and HTML. It acts as an external memory aid. It also  allows you to prioritize the tasks that are more important."
              link="  https://hkc-cttnumb5h-gullmaimoona853-gmailcom.vercel.app/"  
              type="Website" />
          </div>
          <div className=' col-span-5'>
          <Project 
              
              title="Panaverse Website"  
              img={p}
              summary="Todo app by using Next.js and HTML. It acts as an external memory aid. It also  allows you to prioritize the tasks that are more important."
              link="https://wt-kdj36m3dw-gullmaimoona853-gmailcom.vercel.app/"  
              type="Website" />
          </div>

          <div className=' col-span-10 ml-48 '>
          <FeaturedProject 
              title="Pricing UI"  
          img={U}
          summary="Pricing UI by using Next.js and Chakra UI. Chakra UI provides more components, improved styling API, accessibility, and intuitive component APIs ."
          link="https://pricing-fkgkja6dd-gullmaimoona853-gmailcom.vercel.app/"  
          type="Featured Project"  
            />
          </div>
        
        </div>
   </main>
      
   <div>
      <h1 className=' bg-white text-white dark:bg-black dark:text-black'>
      mamammamam
      </h1>
     </div>
      
      </div>
  )
}
