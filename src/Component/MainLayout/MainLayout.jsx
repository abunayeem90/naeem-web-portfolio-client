import React, { useEffect } from 'react';
import Navbar from '../pages/Navbar';
import I1 from '../../assets/p1.png';
import I2 from '../../assets/p2.png';
import I3 from '../../assets/p3.png';
import I4 from '../../assets/p4.png';
import I5 from '../../assets/p5.png';
import I6 from '../../assets/p6.png';
import I7 from '../../assets/p7.png';
import I8 from '../../assets/p8.png';
import I9 from '../../assets/p9.png';
import I10 from '../../assets/p10.png';
import I11 from '../../assets/p11.png';
import I12 from '../../assets/p12.png';

import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';
import card4 from '../../assets/card4.png';
import card5 from '../../assets/card5.png';
import card6 from '../../assets/card6.png';
import { IoIosLink } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import Footer from '../pages/Footer';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const MainLayout = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true,     // Whether animation should happen only once
        });
      }, []);
    return (
        <div>
                <Navbar></Navbar>
           
            

            <div className='mt-40 grid grid-cols-1 lg:grid-cols-2 '>
                <div className="order-2 lg:order-1">
                    <div className='w-full h-80 space-y-4  font-extrabold text-6xl animate__animated '>
                        <p className='animate__animated  animate__backInLeft'>Hi 👋,</p>
                        <p className='animate__animated animate__fadeInDown'> My name is</p>
                        <p className='animate__animated animate__zoomIn'>Abu Naeem</p>
                        <p className='animate__animated animate__backInRight'>  I build things for web</p>
                    </div>
                </div>


                <div className="order-1 -ml-12 flex justify-center items-center lg:order-2">
                    <div className="relative inline-block">
                        {/* Outer colorful circle border */}
                        <div
                            className="w-96 -mt-12 h-96 rounded-full p-3 animate__animated animate__zoomIn"
                            style={{
                                background: "linear-gradient(to right, #f50057, #3f51b5)"
                            }}
                        >
                            {/* Inner image circle */}
                            <img
                                src="https://i.ibb.co.com/K0Dk9Qb/author11.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>







            </div>

            {/* My Tech Stack Section */}
            <div id='mytechstack' className='mt-56 mb-40'>
                <div className='mb-20'>
                    <h1 className="text-4xl font-bold flex justify-center items-center">My Tech Stack</h1>
                    <p className='flex justify-center items-center mt-4 text-3xl'> Technologies I’ve been working with recently</p>
                </div>
                <div className='grid sm:grid-cols-4 lg:grid-cols-6 gap-y-10'>
                    <img className='h-36 w-36' src={I1} alt="" />
                    <img className='h-36 w-36' src={I2} alt="" />
                    <img className='h-36 w-36' src={I3} alt="" />
                    <img className='h-36 w-36' src={I4} alt="" />
                    <img className='h-36 w-36' src={I5} alt="" />
                    <img className='h-36 w-36' src={I6} alt="" />
                    <img className='h-36 w-36' src={I7} alt="" />
                    <img className='h-36 w-36' src={I8} alt="" />
                    <img className='h-36 w-36' src={I9} alt="" />
                    <img className='h-36 w-36' src={I10} alt="" />
                    <img className='h-36 w-36' src={I11} alt="" />
                    <img className='h-36 w-36' src={I12} alt="" />
                </div>
            </div>

            {/* Projects Section */}
       
            <div>
                <div data-aos="zoom-in" id='projects' className='mb-16'>
                    <h1  className="text-4xl font-bold flex justify-center items-center ">Projects</h1>
                    <p className='flex justify-center items-center mt-4 text-3xl'> Things I’ve built so far</p>
                </div>

                <div className='mb-10  gap-x-14 gap-y-16 grid grid-cols-1 lg:grid-cols-3'>
                    {/* 1 */}
                    <div data-aos="zoom-in" className=" rounded-3xl shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={card1} alt="" className="object-cover object-center w-full rounded-t-3xl h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide ">Project Tile goes here</h2>
                                <p className="dark:text-gray-800">
                                This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
                                </p>
                                <p className=''>
                                    <span className='text-xl font-semibold'> Tech stack :</span>
                                    <span>HTML , JavaScript, SASS, React</span>
                                </p>

                                <div className=' flex justify-between'>
                                    <div className='flex'>
                                    <IoIosLink className='m-auto'/> <span className='ml-2 underline'>Live Preview</span>
                                    </div>
                                    <div className='flex'>
                                    <FaGithub className='m-auto' /> <span className='ml-2 underline'>View Code</span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>

                    {/* 2 */}
                    <div data-aos="zoom-in" className=" rounded-3xl shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={card2} alt="" className="object-cover object-center w-full rounded-t-3xl h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Project Tile goes here</h2>
                                <p className="dark:text-gray-800">
                                This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
                                </p>
                                <p className=''>
                                    <span className='text-xl font-semibold'> Tech stack :</span>
                                    <span>HTML , JavaScript, SASS, React</span>
                                </p>

                                <div className=' flex justify-between'>
                                    <div className='flex'>
                                    <IoIosLink className='m-auto'/> <span className='ml-2 underline'>Live Preview</span>
                                    </div>
                                    <div className='flex'>
                                    <FaGithub className='m-auto' /> <span className='ml-2 underline'>View Code</span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>


                    {/* 3 */}
                    <div data-aos="zoom-in" className=" rounded-3xl shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={card3} alt="" className="object-cover object-center w-full rounded-t-3xl h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Project Tile goes here</h2>
                                <p className="dark:text-gray-800">
                                This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
                                </p>
                                <p className=''>
                                    <span className='text-xl font-semibold'> Tech stack :</span>
                                    <span>HTML , JavaScript, SASS, React</span>
                                </p>

                                <div className=' flex justify-between'>
                                    <div className='flex'>
                                    <IoIosLink className='m-auto'/> <span className='ml-2 underline'>Live Preview</span>
                                    </div>
                                    <div className='flex'>
                                    <FaGithub className='m-auto' /> <span className='ml-2 underline'>View Code</span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>


                    {/* 4 */}
                    <div data-aos="zoom-in" className=" rounded-3xl shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={card4} alt="" className="object-cover object-center w-full rounded-t-3xl h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Project Tile goes here</h2>
                                <p className="dark:text-gray-800">
                                This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
                                </p>
                                <p className=''>
                                    <span className='text-xl font-semibold'> Tech stack :</span>
                                    <span>HTML , JavaScript, SASS, React</span>
                                </p>

                                <div className=' flex justify-between'>
                                    <div className='flex'>
                                    <IoIosLink className='m-auto'/> <span className='ml-2 underline'>Live Preview</span>
                                    </div>
                                    <div className='flex'>
                                    <FaGithub className='m-auto' /> <span className='ml-2 underline'>View Code</span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>


                    {/* 5 */}
                    <div data-aos="zoom-in" className=" rounded-3xl shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={card5} alt="" className="object-cover object-center w-full rounded-t-3xl h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Project Tile goes here</h2>
                                <p className="dark:text-gray-800">
                                This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
                                </p>
                                <p className=''>
                                    <span className='text-xl font-semibold'> Tech stack :</span>
                                    <span>HTML , JavaScript, SASS, React</span>
                                </p>

                                <div className=' flex justify-between'>
                                    <div className='flex'>
                                    <IoIosLink className='m-auto'/> <span className='ml-2 underline'>Live Preview</span>
                                    </div>
                                    <div className='flex'>
                                    <FaGithub className='m-auto' /> <span className='ml-2 underline'>View Code</span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>


                    {/* 6 */}
                    <div data-aos="zoom-in" className=" rounded-3xl shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={card6} alt="" className="object-cover object-center w-full rounded-t-3xl h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Project Tile goes here</h2>
                                <p className="dark:text-gray-800">
                                This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
                                </p>
                                <p className=''>
                                    <span className='text-xl font-semibold'> Tech stack :</span>
                                    <span>HTML , JavaScript, SASS, React</span>
                                </p>

                                <div className=' flex justify-between'>
                                    <div className='flex'>
                                    <IoIosLink className='m-auto'/> <span className='ml-2 underline'>Live Preview</span>
                                    </div>
                                    <div className='flex'>
                                    <FaGithub className='m-auto' /> <span className='ml-2 underline'>View Code</span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>




                    





                </div>
            </div>

          


            {/* Footer */}

            <Footer></Footer>

        </div>
    );
};

export default MainLayout;