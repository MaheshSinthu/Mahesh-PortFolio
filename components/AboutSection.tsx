import React from 'react';
import SectionTitle from './SectionTitle';

const SoftwareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);

const ApplicationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 container mx-auto px-6 md:px-12 lg:px-24">
      <SectionTitle 
        title="WHO AM I?"
        subtitle="ABOUT US"
      />
      <div className="animate-fade-in-up text-center max-w-4xl mx-auto" style={{ animationDelay: '0.3s' }}>
        <p className="text-secondary text-lg leading-relaxed mb-8">
          Hi, I’m Mahesh. As a Full Stack Developer with over 3 years of experience, I specialize in designing and delivering scalable, high-performance web applications. My expertise spans front-end frameworks such as <span className="font-semibold">React.js, Angular, and TypeScript</span>, combined with strong back-end skills in <span className="font-semibold">Python, Django, Flask, FastAPI, MongoDB, PostgreSQL, and MySQL</span>. I excel at building robust APIs and integrating them seamlessly with modern front-end architectures. Beyond coding, I also bring experience in creating <span className="font-semibold">flow diagrams, business process diagrams, and technical documentation</span> to ensure clarity and efficiency across project lifecycles.
        </p>

        <p className="text-secondary text-lg leading-relaxed mb-12">
          I am passionate about translating business requirements into intuitive, user-centric applications while maintaining clean, maintainable code. With hands-on experience in <span className="font-semibold">API integration, cloud services (AWS), and cross-functional collaboration</span>, I consistently deliver solutions that are efficient, scalable, and aligned with organizational goals. By combining technical expertise with problem-solving skills, I aim to drive innovation and deliver impactful digital products that enhance user experience and business growth.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <SoftwareIcon />
                <h3 className="text-2xl font-bold text-primary mt-4">Software</h3>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <ApplicationIcon />
                <h3 className="text-2xl font-bold text-primary mt-4">Application</h3>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;