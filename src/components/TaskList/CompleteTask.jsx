import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 p-5 w-[300px] bg-purple-400 rounded-xl '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-400 text-sm px-3 rounded py-1 '>{data.category}</h3>
                <h4 className='text-sm'> {data.date}</h4>
            </div>
            <h2 className='mt-5 font-semibold text-2xl '>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className='mt-2'>
                <button className='w-full'>Complete</button>
            </div>
        </div>
  )
}

export default CompleteTask