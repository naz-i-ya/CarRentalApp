


const AutoCompleteAddress = () => {
 
  return (
    <div className='mt-5'>
        <div>
            <label className='text-gray-400'>Where From..??</label>
            </div>
            <input type='text' className='bg-white p-1 border-[1px] rounded-md outline-none focus:border-yellow-300' />
        
         <div className='mt-3'>
            <label className='text-gray-400'>Where To..??</label>
            </div>
            <input type='text' className='bg-white p-1 border-[1px] rounded-md outline-none focus:border-yellow-300' />
        
    </div>
  )
}

export default AutoCompleteAddress