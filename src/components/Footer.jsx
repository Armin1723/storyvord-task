import React from 'react'
import logo from '../assets/gocpt-logo.png'
import { navLinks } from '../../public/utils'

const Footer = () => {
  return (
    <footer className='w-full px-8 md:px-16 bg-black flex max-lg:flex-col justify-between'>
      <div className="left flex flex-col justify-center gap-4 py-4 md:w-1/3">
        <img src={logo} alt="logo" className=" w-28 aspect-video" />
        <p>We are not here to sell you products, we sell value through our expertise.</p>
        <p>Email: <span className='text-nav'>info@gocpt.ai</span></p>
        <p>© 2024 All rights reserved gocpt.ai</p>
      </div>
      <div className=" flex justify-center flex-col gap-2 items-end max-lg:items-start py-4">
        {navLinks.map((link, index) => (
          <a href={link.url} key={index} className='text-white/80 text-lg hover:text-white/50 capitalize cursor-pointer'>{link.name}</a>
        ))}
        <a href='Terms and Conditions' className='text-white/80 text-lg hover:text-white/50 capitalize cursor-pointer'>Terms & Conditions</a>
      </div>
    </footer>
  )
}

export default Footer
