import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'

const Layout = () => {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)

  return (
    <div className='flex flex-col items-start justify-start h-screen'>
      <nav className='w-full px-8 min-h-14 flex items-center justify-between
      border-b border-gray-200'>
        <img
          src={assets.logoo}
          alt='logo'
          className='h-10 cursor-pointer'
          onClick={() => navigate('/')}
        />
        <button
          type='button'
          className='sm:hidden'
          onClick={() => setSidebar(prev => !prev)}
        >
          {sidebar ? <X onClick = {()=> setSidebar(false)} className='w-6 h-6 text-gray-600' /> : <Menu onClick={()=>setSidebar(true)} className='w-6 h-6 text-gray-600' />}
        </button>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
