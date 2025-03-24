import React ,{useState} from 'react'

const Header = ({data}) => {
  
  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }
  
  const logOutUser =()=>{
    localStorage.setItem("loggedInUser" , '')
    window.location.reload()
  }

  return (
    <div className='flex items-center justify-between'>
        <h1 className=' text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>username😊 </span> </h1>
        <button onClick={logOutUser} className='bg-red-500 text-white font-medium px-5 py-2 text-lg rounded-2xl '>Log Out</button>
    </div>
  )
}

export default Header