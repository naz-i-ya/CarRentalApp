import React from 'react'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";



function Navbar() {
  return (
    <div className='flex justify-between p-3 px-10 border-b-[1px] shadow-sm'>
        <div className='flex gap-10 items-center'>
            <Image src='/mytaxi.png' alt='logo' width={80} height={30} />
        <div className='hidden md:flex gap-6'>
            <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Home</h2>
            <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>History</h2>
            <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Contact Us</h2>
        </div>
        </div>
        <UserButton afterSignOutUrl="/"/>
       
    </div>
  )
}

export default Navbar