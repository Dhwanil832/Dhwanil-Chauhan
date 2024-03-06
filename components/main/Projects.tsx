import React from "react";
import ProjectCard from "../sub/projectcard";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    button: false,
    pauseOnHover: true,
    
};

const Projects = () => {
    return (
        <div
            className="pl-20 lg:pr-20"
            id="projects"
        >
            <div className="flex flex-col items-center justify-center">
                <h1 className=" text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                    My Projects
                </h1>
            </div>
            <Slider {...settings} className="w-full">
                <ProjectCard
                    src="/rnw.jpeg"
                    title="RNW E-commerce website"
                    description="Developed an eCommerce website for a small scale bakery."
                    tools="Django-Python, HTML, CSS, Java Script, Jinja Templating, MySQL"
                />
                <ProjectCard
                    src="/career.jpeg"
                    title="Career Prediction Tool"
                    description="Developed a career prediction tool where the algorithm uses the prospects grades and interests asinputs and suggests a suitable career path and provides a road map for the same."
                    tools="Gaussian Naive Bayes Algorithm, Django-Python, Jinja Templating, HTML, CSS, Javascript"
                />
                <ProjectCard
                    src="/sentiment.jpeg"
                    title="Sentiment based Music Recommendation system"
                    description="The system captures an individuals picture at any point in time and produces musicchoice based on the mood of the individual as predicted by the algorithm."
                    tools="OpenCV, Convolutional Neural Network, Flask Framework, Python"
                />
                <ProjectCard
                    src="/lip.jpeg"
                    title="Lip Reading Model"
                    description="The model takes a video input and estimates the words spoken in the video from the lipmovement captured by the
                video . This is based on LipNet deep learning model"
                    tools="Sequential Neural Network, Streamlit Framework, Python"
                />
                <ProjectCard
                    src="/ins.png"
                    title="Medical Insurance Cost Predictor"
                    description="Developed a Insurance cost prediction tool where the algorithm uses the medical details and other details as inputs to estimate the amount of insurance coverage."
                    tools="Decision Tree Algorithm, LASSO Regression"
                />
                <ProjectCard
                    src="/chroma magic.png"
                    title="ChromaMagic: B/W to Color Image using GANs"
                    description="Project to convert any Black and White Image to Color Image using Generative Adversial Networks"
                    tools="Python, Tensorflow, Unet, Convolutional Neural Network, Generative Adversial Network"
                />
                <ProjectCard
                    src="/mario.png"
                    title="Super Mario Bot"
                    description="Created a Super Mario Game Bot using Reinforcement Learning. A Mario game bot that plays Mario on its own, learn from it’s mistakes and implement its learning in next round."
                    tools=" DQTT, Reinforcement Learning, Python, Gym Library"
                />
                <ProjectCard
                    src="/ats.jpg"
                    title="Smart ATS Resume System "
                    description="The system takes the company's job description and a candidate's resume, producing a comprehensive percentage match along with a profile summary."
                    tools=" LLM(Large Language Model), Gemini API, StreamLit, Python"
                />
                <ProjectCard
                    src="/multi.jpg"
                    title="Multi Language Invoice Extractor "
                    description="This web app takes documents form user in any languages and gives answer from the document provided."
                    tools="LLM(Large Language Model), Gemini API, Python, StreamLit"
                />
                <ProjectCard
                    src="/store.png"
                    title="Super Store Sales Dashboard and Forecast"
                    description="Dashboard to monitor sales in a store. Moreover, it also forecasts the next 15 days sales so that store can stalk up or down the resources accordingly."
                    tools="PowerBi"
                />
                <ProjectCard
                    src="/hr.png"
                    title="HR Analystics Dashboard "
                    description="Dashboard specially created for company’s HR inorder to look at attrition related data to analyze attrition rate by gender, by Job Role, by serving years in company and also by education that too department wise."
                    tools="PowerBi"
                />
            </Slider>
        </div>

    );
};

export default Projects;