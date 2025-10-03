import React from 'react';
import Mahesh from "../Images/mahesh.png";
const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.375c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0110.5 10.5z" />
  </svg>
);

const CircularHireMe: React.FC = () => (
    <div className="absolute bottom-5 left-5 w-40 h-40 hidden lg:block animate-spin-slow">
        <div className="relative w-full h-full">
            <svg viewBox="0 0 100 100">
                <defs>
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                </defs>
                <text letterSpacing="2.5">
                    <textPath xlinkHref="#circle" className="text-sm uppercase font-medium fill-primary">
                        •Full Stack Developer
                    </textPath>
                </text>
            </svg>
            <a href="#contact" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-background font-semibold hover:bg-gray-800 transition-colors">
                Hire Me
            </a>
        </div>
    </div>
);

const LightbulbIcon: React.FC = () => (
    <div className="absolute bottom-10 right-10 hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 21.5C9 20.42 9.42 19.5 10.5 19.5h3c1.08 0 1.5.92 1.5 2" stroke="#FFD700" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19.5V17M9 16.5H15" stroke="#FFD700" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 14.5h4" stroke="#FFD700" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 12.33V10.2c0-1.52-.72-2.94-1.89-3.92-.9-.76-2-1.28-3.23-1.48C11.14 4.62 10 5.66 10 7v.2c0 1.29-.53 2.47-1.38 3.28C7.53 11.69 6.5 12.97 6.5 14.33c.01 1.48 1.03 2.67 2.37 2.67h6.27c1.34 0 2.36-1.19 2.37-2.67Z" fill="#FFD700" fillOpacity="0.3" stroke="#FFD700" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
);


const HeroSection: React.FC = () => {
  return (
    <section id="home" className="container mx-auto px-6 md:px-12 lg:px-24 min-h-screen flex items-center justify-center relative pt-24 md:pt-0">
       <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 w-full animate-fade-in-up">
            {/* Image Section */}
            <div className="flex justify-center items-center">
                <img 
                    src={Mahesh} 
                    alt="Developer Portrait" 
                    className="max-w-md w-full"
                />
            </div>

            {/* Text Content Section */}
            <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight mb-6">
                    Hi, I’m Mahesh — Full Stack Developer.
                </h1>
                <p className="text-lg md:text-xl text-secondary max-w-xl mx-auto lg:mx-0 mb-10">
                    I build scalable, high-performance web applications using Python, Django, Flask, FastAPI, and modern frontend frameworks like React.js & Angular.
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-6">
                    <a 
                    href="/MS1.pdf"        // path to your PDF in public
                    target="_blank"           // open in a new tab
                    rel="noopener noreferrer" // security best practice
                    className="inline-flex items-center gap-2 bg-primary text-background font-semibold py-3 px-6 rounded-lg text-lg hover:bg-gray-800 transition-colors shadow-lg"
                    >
                    <span>Resume</span>
                    <ExternalLinkIcon className="w-5 h-5"/>
                    </a>

                    <a href="#contact" className="font-semibold text-lg text-primary hover:text-secondary underline underline-offset-4">
                        Contact
                    </a>
                </div>
            </div>
       </div>
       <CircularHireMe />
       {/* <LightbulbIcon /> */}
    </section>
  );
};

export default HeroSection;