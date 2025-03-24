import React, { useContext } from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import { AuthContext } from '../../context/AuthProvider'

const AdminDashboard = () => {

  

  
  return (
    <div className='h-screen text-white w-full p-7'>
        <Header/>
        <CreateTask/>
        <AllTask/>
        
    </div>
  )
}

export default AdminDashboard