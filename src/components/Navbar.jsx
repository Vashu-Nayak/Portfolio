import React from 'react'
import logo from '../assets/letter-v.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";



const Navbar = () => {
  return (
    <nav className=" mb-10 flex items-center justify-between py-5 ">
        <div className="flex flex-shrink-0 items-center text-white ">
            <img className='mx-2 w-10  text-white bg-gradient-to-r from-pink-300 via--300 to-purple-500 tracking-tight ' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl text-white'>
            <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/vashu-nayak/")}/>
            <FaGithub onClick={() => window.open("https://github.com/Vashu-Nayak")}/>
            <SiLeetcode onClick={() => window.open("https://leetcode.com/u/vashu1408/")}/>
        </div>
    </nav>
  )
}

export default Navbar