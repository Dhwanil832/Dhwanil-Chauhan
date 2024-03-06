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
        <circle cx="75" cy="50" r="20" className='stroke-1 fill-none stroke-white' />
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


const Cocurricular  = () => {
    const reff = useRef(null);
    const {scrollYProgress}=useScroll({
        target: reff,
        offset:["start end","center start"]
    })
  return (
    <div className='my-5 flex flex-col items-center justify-center'>
    <h2 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 '>My Cocurricular Responsibilities</h2>
    <div className='w-[75%] mx-auto relative'>
        <motion.div 
        style={{scaleY:scrollYProgress}}
        ref={reff} className='absolute left-20 top-0 w-[4px] h-full bg-gradient-to-t from-purple-500 to-cyan-500 py-20 origin-top' />
        
        <ul>
            <Details 
                position='Chairperson'
                company='ACM Student Body'
                companyLink='https://charusat.acm.org/'
                time='June 2021 - Present'
                address='CHARUSAT'
                work=' Responsible for developing chapter programs and ensuring that plans and assignments are carried out. Furthermore was also responsible for securing funding for chapter programs.'
            />
            <Details 
                position='TnP Coordinator'
                company='Training and Placement Cell Charusat'
                companyLink='https://www.charusat.ac.in/cdpc.php'
                time='August 2022 - Present'
                address='CHARUSAT'
                work='Maintained placed student database, managed and accompanied the companies through out the placement drive.'
            />
            <Details 
                position='Under-Graduate Student Fellow'
                company='DEPSTAR'
                companyLink='https://www.webbrainstechnologies.com/'
                time='August 2023 - Present'
                address='CHARUSAT'
                work='Received
                a monetary Under-Graduate Student Fellowship at CHARUSAT University.Where I was responsible for contributions to
                academic, research and development activities of
                the department'
            />
        </ul>
    </div>
    </div>
  )
}

export default Cocurricular