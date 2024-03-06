"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';



export const HeroComponent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex flex-row items-center justify-center px-20 ml-10 mt-40 w-full z-[20] md:flex-row md:px-20 md:mt-40'
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start lg:pl-[5rem] md:w-1/2 md:text-start'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]'>
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                    <h1 className='Welcome-text text-[13px]'>
                        AI Engineers Portfolio
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto md:text-6xl">
                    <span>
                        <span className='text-[35px] md:text-[35px]'> Hello I&apos;m </span>  <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}

                            Dhwanil Chauhan{" "}
                        </span>
                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I&apos;m an aspiring AI engineer who enjoys connecting the dots: be it ideas from different disciplines, people from different teams, or applications from various industries. I have strong technical skills and an academic background in engineering, statistics, and machine learning.
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                    href='/Resume_Dhwanil.pdf'
                    download="CV.pdf"
                >
                    Download CV
                </motion.a>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center md:w-1/2">
                <Image
                    src="/dh.png"
                    alt="work icons"
                    height={500}
                    width={500}
                    style={{
                        borderBottom: '2px solid #9361f3',
                        borderRight: '2px solid #26a3db',
                    }}
                />
            </motion.div>
        </motion.div>

    )
}   
