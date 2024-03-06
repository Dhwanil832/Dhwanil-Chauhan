import React from 'react'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa"
import { FaYoutube,FaTwitter,FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] pt-[80px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact Me</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaPhoneAlt />
                        <span className="text-[15px] ml-[6px]">+91 72840 33848</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <MdOutlineMail />
                        <span className="text-[15px] ml-[6px]">dhwanil832@gmail.com</span>    
                    </p>
                </div>
            </div>
            <div className="mb-[20px] text-[15px] text-center">
                &copy; Dhwanil Chauhan 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer