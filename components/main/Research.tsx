import React from "react";
import ResearchCard from "../sub/researchcard";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    button: false,
    pauseOnHover: true
};

const Research = () => {
    return (
        <div
            className="pl-20 lg:pr-20"
            id="research"
        >
            <div className="flex flex-col items-center justify-center">
                <h1 className=" text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                    My Research Work
                </h1>
            </div>
            <Slider {...settings} className="w-full">
                <ResearchCard
                    src="/ids.png"
                    title="A Novel Intrusion Detection System based on Machine Learning for Internet of Things (IoT) Devices"
                    description="The study compares machine learning models to detect intrusions."
                />

                <ResearchCard
                    src="/blockchain.png"
                    title="Blockchain Wallets in Ethereum using Kotlin"
                    description="The paper examines Ethereum blockchain as a wallet, showcasing its revolutionary potential, security, transparency, and need for ongoing development to overcome challenges"
                />

                <ResearchCard
                    src="/tech.png"
                    title="Technological Trends and Their Impact on Society: A Comprehensive Analysis"
                    description="The study compares of the impact of various technological trends on society and business."
                />
                <ResearchCard
                    src="/lungs.png"
                    title="Harnessing Artificial Intelligence for Precise Pulmonary Disease Diagnosis"
                    description="The study proposes a deep learning model to detect the air flow blockage in lungs."
                />
                <ResearchCard
                    src="/image.png"
                    title="Comparative Analysis of Deep Learning Models for Image Classification: A Study on Synthetic Images ofbags"
                    description="The study compares results of 3 different model that are trained on synthetic dataset."
                />
                <ResearchCard
                    src="/brain.png"
                    title="Enhanced Brain Tumor Localization Techniques: A Paradigm Shift in Diagnosis"
                    description="The study proposes a deep learning model for accurate brain tumor detection in MRI scans."
                />
                <ResearchCard
                    src="/rfmal.png"
                    title="RF-MalDetect: Harnessing Random Forest for Malware Identification in PE Files"
                    description="The study proposes a random forest based solution for malware detection."
                />
                <ResearchCard
                    src="/stress.png"
                    title="Stress Detection Across Demographics: Leveraging Linear Regression Analysis"
                    description="The study proposes a regressor based solution stress detection."
                />
                
            </Slider>
        </div>

    );
};


export default Research;
