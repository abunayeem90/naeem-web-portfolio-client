import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const handleScrollToProjects = () => {
        const section = document.getElementById('projects'); // Get the element with the id 'projects'
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the 'projects' section
        }
      };



    const navLinks = <>
    
   <div className='gap-4 font-medium text-xl -ml-40 lg:flex'>
   <li> <Link to={'/'}>Home</Link></li>
   <li><Link>About</Link></li>
   <li><Link to={'#mytechstack'}> Tech Stack</Link></li>
   <li> <button onClick={handleScrollToProjects} className="cursor-pointer">Projects</button></li>
   <li><Link to={''}> Contact</Link></li>
    
   </div>

    </>


    return (
        <div className=''>
            
            <div className="navbar -mt-40 fixed z-10  max-w-screen-xl rounded-b-xl ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="ml-20">
    <div>
        <ul className='flex gap-2 text-2xl'>
            <li> <a target='_blank' href='https://github.com/abunayeem90'><FaGithub /></a></li>
            <li> <a href='' ><AiFillTwitterCircle /></a> </li>
            <li className='text-3xl'> <a target='_blank' href="https://www.linkedin.com/in/abunaeem9"> <TiSocialLinkedinCircular /> </a></li>
           
        </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;