"use client";
import React, { useRef } from 'react';
import { motion,useScroll } from "framer-motion";



interface Props {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
  }
  const Details = ({ position, company,companyLink, time, address,work}: Props) => {
    
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        

        <div className=''>
        
            <h3 className='capitalize font-bold text-2xl text-white'>{position}&nbsp;<a href={companyLink}
            target='_blank' className='opacity-85'
            >@{company}</a></h3>
            <span className='capitalize font-medium opacity-75 text-white'>
                {time} | {address}
            </span>
            <p className='capitalize font-medium w-full opacity-75 text-white '>
                {work}
            </p>

        </div>
    </li>}


const Experience = () => {
    const reff = useRef(null);
    const {scrollYProgress}=useScroll({
        target: reff,
        offset:["start end","center start"]
    })
  return (
    <div id='exp' className='my-5 flex flex-col items-center justify-center'>
    <h2 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 '>My Experience</h2>
    <div className='w-[75%] mx-auto relative'>
        <motion.div 
        style={{scaleY:scrollYProgress}}
        ref={reff} className='absolute left-20 top-0 w-[4px] h-full bg-gradient-to-t from-purple-500 to-cyan-500 py-20 origin-top' />
        
        <ul>
            <Details 
                position='AI/ML Intern'
                company='TechXi'
                companyLink='https://hiretechxi.com/'
                time='December 2023 - Present'
                address='Vadodara, Gujarat'
                work='Worked on a team responsible for developing a health diagnostic assistance tool 
                and a Educational platform tailored for teaching Machine Learning to beginners'
            />
            <Details 
                position='Data Science Intern'
                company='BrainyBeam Technologies'
                companyLink='https://www.brainybeam.com/'
                time='May 2023 - June 2023'
                address='Ahemdabad, Gujarat'
                work='Focused on basic implementation of machine learning fundamentals and basics of Data Science and worked on developing a medical insurance cost predictor attributable to Healthcare Domain.'
            />
            <Details 
                position='Python Intern'
                company='WebBrains Technologies'
                companyLink='https://www.webbrainstechnologies.com/'
                time='May 2022 - July 2022'
                address='Vadodara, Gujarat'
                work='Worked on development of E-commerce website on Django framework using python, Java and front-end Ui frameworks.'
            />
        </ul>
    </div>
    </div>
  )
}

export default Experience