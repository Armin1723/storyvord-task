import React from 'react'
import { Link } from 'react-router-dom'
import logout from '../assets/leave.png'
import gocptLogo from '../assets/gocpt-logo.png'
import profile from '../assets/profile.png'

const NavSmall = () => {
    const dissolve = (e) =>{
        e.target.style.opacity = 0
    }
  return (
    <nav className='flex justify-between items-center w-full h-14 overflow-hidden px-1 bg-white/10 border border-white/15 drop-shadow-[0_0_30px_black] shadow-black/90 backdrop-blur-xl'>
      <Link to='/'><img src={logout} alt="logout" className='w-12 transition-all duration-700' onClick={(e)=>dissolve(e)}/></Link>
      <img src={gocptLogo} alt="logo" className='w-36 h-16 mt-4 object-fill'/>
      <Link to='/login'><img src={profile} alt="profile" className='w-12 transition-all duration-700' onClick={(e)=>dissolve(e)}/></Link>
    </nav>
  )
}

export default NavSmall
