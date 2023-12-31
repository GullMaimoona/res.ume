import React from 'react'


export default function Layout({children, className=""}:any) {
  return (
    <div className={`w-full h-full inline-block z-0 bg-white p-32 dark:bg-black xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
        
        
        {children}
        
    </div>
  )
}
