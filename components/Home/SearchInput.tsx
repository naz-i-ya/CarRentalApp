import React from 'react'
import {BiSolidLocationPlus} from 'react-icons/bi'

const SearchInput = () => {
  return (
    <div className='mt-[5rem]'>
        <h2 className='text-center text-[20px] text-yellow-600 mb-5'>Lets Search what you need</h2>
        <div className='flex justify-center '>
        <div className='flex bg-gray-100 p-1 px-3 gap-4 rounded-full divide-x-6'>
           
            <div className='flex items-center'> 
            <BiSolidLocationPlus className='w-6 h-6 '/>
                <input type='text' placeholder='Location'
                className='p-2 outlin
                 bg-trans
                 ' />
            </div>
            <div>
                <input type='date' className='p-2 outline-none bg-transparent text-gray-500' />
            </div>
        </div>
        </div>
    </div>
  )
}

export default SearchInput