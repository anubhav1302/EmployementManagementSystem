import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='p-10 w-[45%] rounded-xl py-3 px-9 bg-red-300'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className='p-10 w-[45%] rounded-xl py-3 px-9 bg-blue-300'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h2 className='text-xl font-medium'>Completed Task</h2>
        </div>
        <div className='p-10 w-[45%] rounded-xl py-3 px-9 bg-green-300'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h2 className='text-xl font-medium'>Accepted Task</h2>
        </div>
        <div className='p-10 w-[45%] rounded-xl py-3 px-9 bg-yellow-300'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h2 className='text-xl font-medium'>Failed Task</h2>
        </div>
    </div>
  )
}

export default TaskListNumbers