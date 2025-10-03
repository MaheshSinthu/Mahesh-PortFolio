import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import AccordionItem from './AccordionItem';

const experienceData = [
  {
    role: 'Senior Developer',
    company: 'DSAT',
    companyUrl: 'https://dsatglobal.com/',
    period: '10/2024 – Present',
    description:
      'At DSAT, I lead the development of end-to-end solutions across multiple projects, ensuring scalable and maintainable architectures. I implemented CI/CD pipelines using GitHub Actions to streamline deployments and improve release efficiency. Additionally, I guided a Proof of Concept (POC) for multi-tenancy applications, managing technical design and mentoring the team. My work also includes exploring and applying ML/LLM models to enhance system intelligence and align solutions with business use cases.',
    iconColor: 'bg-blue-600',
    highlights: [
      'Developed full-stack solutions (frontend + backend) across 4 projects.',
      'Implemented CI/CD with GitHub Actions for automated deployments.',
      'Led POC on multi-tenancy systems, including architecture and design.',
      'Explored ML/LLM models to add intelligence into business workflows.',
    ],
    projects: [
      {
        title: 'RO – Route Optimization System',
        details:
          'Designed and implemented a logistics optimization solution that reduced travel time and costs. Used Google OR-Tools for efficient route generation, with real-time planning and tracking capabilities.',
      },
      {
        title: 'DMS – Dock Management System',
        details:
          'Developed a multi-tenancy dock management platform for handling operations, inventory, and invoicing across multiple clients. Integrated with accounting tools (Tally, Busy) and enabled real-time sync using JSON.',
      },
      {
        title: 'Alkanz – Online Gold Purchase Platform',
        details:
          'Built and deployed a secure web platform for online gold transactions. Implemented REST APIs for user management, payments, and ensured real-time transaction updates with backend–frontend integration.',
      },
      {
        title: 'Daikin',
        details:
          'Built and optimized Angular-based frontend for an AC service/management platform. Integrated APIs with backend services to manage product data, service requests, and customer operations.',
      },
    ],
  },
  {
    role: 'Software Developer',
    company: 'Uniq Technologies',
    companyUrl: 'https://www.uniqtechnologies.co.in/',
    period: '02/2023 – 09/2024',
    description:
      'As a Software Developer at Uniq Technologies, I focused on building scalable backend applications using Python, Django REST Framework, and MySQL. I delivered mission-critical systems such as FlexiDMS and Insurance & Warranty Management platforms, enhancing operational efficiency and enabling real-time data synchronization. I worked closely with teams to implement third-party integrations, optimize databases, and ensure smooth API communication between backend and frontend systems.',
    iconColor: 'bg-red-500',
    highlights: [
      'Built REST APIs and integrated them with React.js frontends.',
      'Delivered FlexiDMS and Insurance & Warranty Management systems.',
      'Implemented Twilio and third-party integrations for automation.',
      'Optimized databases and modularized code for maintainability.',
    ],
    projects: [
      {
        title: 'INSURANCE & WARRANTY MANAGEMENT SYSTEM',
        details:
          'Developed a comprehensive insurance and warranty management system for home appliances, allowing users to track products, warranties, and AMCs. Users receive timely alerts for renewals or claims, helping protect assets and reduce unexpected expenses. Built with Django, MySQL, Pandas, and Twilio.',
      },
      {
        title: 'STOCKFLOW',
        details:
          'Created an inventory and sales management system for wholesale shops, automating stock tracking, invoice management, and error-free record keeping. Data is stored and retrieved from AWS Bucket for secure backup and easy access. Built with Flask, MySQL, Pandas, Flask-Login, and Boto3.',
      },
      {
        title: 'FDMS – Flexi Distribution Management System',
        details:
          'Enhanced a distribution management system to automate supply chain workflows. Improved order processing and inventory tracking using Python, Django REST, MySQL, and React.js.',
      },
    ],
  },
];

const LinkIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.536a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

interface TimelineItemProps {
  item: typeof experienceData[0];
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast }) => {
  const [openProjects, setOpenProjects] = useState<number | null>(null);

  return (
    <div className="relative pl-20 pb-12">
      {/* Timeline Icon */}
      <div
        className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center ring-8 ring-white ${item.iconColor}`}
      >
        <LinkIcon />
      </div>

      {/* Timeline Connector Line */}
      {!isLast && (
        <div className="absolute left-[22px] top-14 h-full w-px bg-gray-200"></div>
      )}

      {/* Content Box */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-full">
        {/* Role + Period */}
        <h3 className="text-xl font-bold text-primary mb-1">
          {item.role}
          <span className="text-sm font-normal text-secondary ml-2">
            {item.period}
          </span>
        </h3>

        {/* Company */}
        {item.company && (
          <a
            href={item.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm underline"
          >
            {item.company}
          </a>
        )}

        {/* Description */}
        <p className="text-secondary leading-relaxed mt-2">{item.description}</p>

        {/* Highlights */}
        {item.highlights && item.highlights.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold text-primary mb-2">Highlights</h4>
            <ul className="list-disc list-inside space-y-1 text-secondary text-sm">
              {item.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Projects */}
        {item.projects && item.projects.length > 0 && (
          <div className="mt-6 space-y-3">
            <h4 className="font-semibold text-primary mb-2">Projects</h4>
            {item.projects.map((project, idx) => (
              <AccordionItem
                key={idx}
                title={project.title}
                isOpen={openProjects === idx}
                onToggle={() =>
                  setOpenProjects(openProjects === idx ? null : idx)
                }
              >
                <p className="text-secondary whitespace-pre-line">{project.details}</p>
              </AccordionItem>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24" style={{ backgroundColor: "#0e387a", color: "#9fafca" }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <SectionTitle
          title="WORK EXPERIENCE"
          subtitle="EXPERIENCE"
        />
        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {experienceData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
