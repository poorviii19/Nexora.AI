import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { useUser, SignIn } from '@clerk/react'


const Layout = () => {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)
  const {user} = useUser()
  

  return  user ? (
    <div className='flex flex-col items-start justify-start h-screen'>
      <nav className='w-full px-8 min-h-14 flex items-center justify-between
      border-b border-gray-200'>
        <img
          src={assets.logoo}
          alt='logo'
          className='h-10 w-32 sm:w-44 cursor-pointer'
          onClick={() => navigate('/')}
        />
        <button
          type='button'
          className='sm:hidden'
          onClick={() => setSidebar(prev => !prev)}
        >
          {sidebar ? <X onClick = {()=> setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden' /> : <Menu onClick={()=>setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden' />}
        </button>
      </nav>
      <div className='flex-1 w-full flex h-[calc(100vh-56px)]'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
        <div className='flex-1 bg-[#F4F7FB]'>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className='flex h-screen w-full items-center justify-center'>
      <SignIn/>
    </div>
  )
}

export default Layout
