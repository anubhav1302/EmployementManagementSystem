import React from 'react'

const AcceptTask = ({data}) => {
 console.log(data);
 
  
  return (
    <div className='h-full flex-shrink-0 p-5 w-[300px] bg-gray-400 rounded-xl '>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-400 text-sm px-3 rounded py-1 '>{data.category}</h3>
        <h4 className='text-sm'> {data.date}</h4>
    </div>
    <h2 className='mt-5 font-semibold text-2xl '>{data.title}</h2>
    <p className='text-sm mt-2'>{data.description}</p>
    <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
    </div>
</div>

  )
}

export default AcceptTask