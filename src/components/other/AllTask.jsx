import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-4 rounded h-60 '>
      <div className='bg-red-400 mb-2 rounded py-2 mt-3 px-4 gap-2 flex justify-between rounded-2xl'>
         <h2 className='text-lg font-medium  w-1/5 rounded-sm'>Employee Name</h2>
         <h2 className='text-lg font-medium w-1/5 rounded-sm'>New Task</h2>
         <h2 className='text-lg font-medium w-1/5 rounded-sm'>Active Task</h2>
         <h3 className='text-lg font-medium w-1/5 rounded-sm'>Completed</h3>
         <h3 className='text-lg font-medium w-1/5 rounded-sm'>Failed</h3>
         
         </div>
     <div className='overflow-auto'>
     {authData.employees.map(function(elem){
        

        return <div className='border-emerald-600 border-2 mb-2 rounded py-2 mt-3 gap-3 px-4 flex justify-between rounded-2xl'>
         <h2 className=' text-lg font-medium w-1/5 rounded-sm'>{elem.firstName}</h2>
         <h2 className='text-blue-400 text-lg font-medium w-1/5 rounded-sm'>{elem.taskNumbers.newTask}</h2>
         <h3 className='text-yellow-400 text-lg font-medium w-1/5 rounded-sm'>{elem.taskNumbers.active}</h3>
         <h3 className=' w-1/5 text-lg font-medium rounded-sm'>{elem.taskNumbers.completed}</h3>
         <h3 className='text-red-500 w-1/5 text-lg font-medium rounded-sm'>{elem.taskNumbers.failed}</h3>
         </div>
         
         
      })}
     </div>
       
 
    </div>
  )
}

export default AllTask