import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1c1dc1c] mt-7 rounded'>
            <form className='flex w-full flex-wrap items-start justify-between ' action="">
                <div className='w-1/2'>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] ' type="text" placeholder='Make a UI Design' />
                </div>
                <div>
               <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'  type="Date" />
               </div>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Employee Name' />
                </div>
               <div>
               <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
               <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='design,dev,etc'/>
               </div>
               </div>
                <div className='w-2/5 flex flex-col items-start'>
                
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea className='bg-white text-black border-emerald-500 w-full h-44 text-sm py-2 px-4 rounded outline-nmone bg-transparent ' name="" id=""></textarea>
                <button className='bg-red-500 hover:bg-emerald-500 text-sm py-2 px-3 mt-4 rounded'>Create Task</button>
                </div>
             
                
            </form>
        </div>
  )
}

export default CreateTask