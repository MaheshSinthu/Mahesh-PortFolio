import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import AccordionItem from './AccordionItem';

const educationData = [
  {
    title: 'BACHELOR DEGREE OF COMPUTER SCIENCE',
    institution: 'TAGORE INSTITUTE OF ENGINEERING AND TECHNOLOGY',
    degree: "Bachelor's Degree(BE) Computer Science And Engineering (CSE)",
    years: '2018 to 2022',
    details: [
      'CGPA 7.33',
      'Classification : FIRST CLASS'
    ]
  },
  {
    title: 'HIGH SCHOOL SECONDARY EDUCATION',
    institution: 'GOVERNMENT BOYS HR SECONDARY SCHOOL',
    degree: 'HSC',
    years: '2017 to 2018',
    details: [
      'Completed with a focus on science and mathematics.',
      // 'Achieved a score of 75%.'
    ]
  },
  {
    title: 'SECONDARY SCHOOL EDUCATION',
    institution: 'ST.PHILOMINAL HR SEC SCHOOL , Kulumur',
    degree: 'SSLC',
    years: '2015 to 2016',
    details: [
      'Completed with a score of 80%.',
      // 'Active member of the science club.'
    ]
  }
];

const EducationSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="education" className="py-24 container mx-auto px-6 md:px-12 lg:px-24">
      <SectionTitle
        title="EDUCATION"
        subtitle="EDUCATION"
      />
      <div className="max-w-4xl mx-auto space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        {educationData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          >
            <p className="mb-4">
              {item.institution}, {item.degree}, {item.years}
            </p>
            <ul className="list-disc list-inside text-secondary space-y-2">
              {item.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
