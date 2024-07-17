import React from 'react'
import { useSelector } from 'react-redux'
import about from '../assets/about-photo.png'
import { Link } from 'react-router-dom';

const About = () => {
    const theme = useSelector((state) => state.theme.value);
  return (
    <section className={` w-full ${theme === 'dark' ? 'bg-black' : 'bg-bluePrimary'} `} id='about'>
      <div className="aboutContainer px-8 md:px-16 flex flex-col items-center py-8 ">
        <p className="text-5xl max-sm:text-2xl w-full text-right underline my-12">About Us</p>
        <div className="content flex max-lg:flex-col justify-between items-center w-full">
            <img src={about} alt="about" className='w-2/5 max-lg:w-4/5 flex justify-center h-full'/>
            <div className="flex flex-col h-full justify-betweeen items-end gap-24 py-4 md:w-2/3 ">
                <p className='text-4xl max-lg:text-xl text-right '>Empowering Mental Health Professionals with Simplified CPT Coding</p>
                <p className='text-right font-extralight text-xl md:w-4/5 text-[#FEDBFF] drop-shadow-[0_0_5px_black] shadow-black/45'>Welcome to goCPT, where the journey of revolutionizing the medical coding and billing landscape began with a single idea - to make mental health care more accessible to everyone. <br/> <br/> Join us on this transformative journey as we continue to innovate and evolve, breaking down barriers and making mental health care accessible to all. Together, we can shape a future where healthcare providers are empowered, and quality mental health care knows no boundaries.</p>
            </div>
        </div>
        <Link to='/signup' className="signupButton bg-gradient-to-b from-bluePrimary px-24 rounded-md border border-white/50 flex shadow-[0_0_50px_#ffffff99]">Sign Up Today!</Link>
      </div>
    </section>
  )
}

export default About
