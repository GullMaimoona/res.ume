import Image from 'next/image'
import {Inter} from 'next/font/google'
import Layout from './Components/Layout'
import pink from '../../public/n.webp'
import Link from 'next/link'
import { LinkArrow } from './Components/Icons'
import HireMe from './Components/HireMe'
import TransitionEffect from './Components/TransitionEffect'


const inter =Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>


    <TransitionEffect />
      <main className=' flex flex-col items-center text-black w-full min-h-screen  dark:text-white 2xl:dkashdjksdh '>
           
      <Layout className="pt-5 md:pt-16 sm:pt-8">

      <div className='  flex items-center justify-between w-full lg:flex-col'>
        <div className='w-1/3'> 
          <Image src={pink} alt="Maimoona Gull" className='w-full h-auto md:max-w-md mx-auto  lg:hidden  md:inline-block  md:w-full' 
          priority
          sizes="(max-width: 768px) 100vw
          (max-width: 1200px) 50vw,
          33vw"
          />
        </div>

        
        
        
        <div className=' w-1/2 flex flex-col items-center self-center lg:text-center md:text-center sm:text-center'>
          
          <h3 className=' text-6xl -ml-28 mr-6 capitalize mt-10 font-abc font-bold ml- xl:text-5xl lg:text-center md:text-center sm:text-center lg:text-6xl md:text-5xl sm:text-3xl lg:w-full sm:py-0  '> Hi, Maimoona Here. </h3>
          
          <h3 className='font-bold  -ml-56   text-5xl capitalize font-abc  mt-5 text-black/80 dark:text-white/75 xl:text-5xl lg:text-center md:text-center sm:text-center lg:text-6xl md:text-5xl sm:text-3xl lg:w-full sm:py-0'>Full Stack Developer.</h3>
          <p className=' my-4 text-base -ml-28 mr-6  font-medium mt-10 mb-10  xl:text-5xl lg:text-center lg:text-6xl md:text-2xl sm:text-3xl lg:w-full md:text-center sm:text-center  sm:py-0 '>
       As a skilled Full-Stack Developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my expertise in React.js and web development.
          </p>
         <div className=' flex items-center self-start mt-2 lg:self-center -ml-64 '>
          <Link href="/dummy.pdf" target={"_blank"} className=" ml-36 flex items-center bg-black text-white p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black
          
          dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white hover:dark:border-white"


          download={true}
          >
            Resume <LinkArrow className={"w-6 ml-1"}/>
            
            
            </Link>
          <Link href="/mailto:gullmaimoona853@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-black underline dark:text-white "
          
          
          >Contact</Link>
         </div>


        </div>

      </div>


      </Layout>

      <HireMe />
     



      </main>
    </>

  )
}