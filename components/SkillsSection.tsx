import React from 'react';
import SectionTitle from './SectionTitle';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24" style={{ backgroundColor: "#0e387a", color: "#9fafca" }}>
      <div className="container-fluid mx-auto px-6 md:px-12 lg:px-24 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <SectionTitle 
          title="MY SKILLS"
          subtitle="MY SPECIALTY"
        />
        <p className="text-center max-w-4xl mx-auto text-lg leading-relaxed mb-12">
        With over 3 years of professional experience, I bring strong expertise in <span className="font-semibold">backend development</span> using <span className="font-semibold">Django, Flask, FastAPI, and REST APIs</span>, combined with robust database management skills in <span className="font-semibold">MySQL, PostgreSQL, MongoDB, and SQLAlchemy</span>.ensuring scalable, reliable, and secure application delivery. On the <span className="font-semibold">frontend</span>, I specialize in building dynamic and responsive interfaces with <span className="font-semibold">React.js, Angular, TypeScript, JavaScript, Bootstrap 5, HTML, and CSS</span>.  
        <br /><br />
        I also have hands-on experience in <span className="font-semibold">API design and integration</span>, supported by tools like <span className="font-semibold">Postman</span> and <span className="font-semibold">Swagger</span> for testing and documentation. My workflow is strengthened by <span className="font-semibold">Git and version control best practices</span>, along with the ability to create <span className="font-semibold">flow diagrams and business process documentation</span> to align technical solutions with business goals. This combination of skills allows me to deliver efficient, scalable, and user-focused applications across the full development lifecycle.
      </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto text-lg">
          <div>
            <ul className="list-disc list-outside space-y-4">
              <li>
                <span className="font-bold">Frameworks</span>
                <ul className="list-[circle] list-outside ml-6 mt-2 space-y-1">
                  <li>Django</li>
                  <li>Flask</li>
                  <li>FastAPI</li>
                  <li>Rest API</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Databases</span>
                <ul className="list-[circle] list-outside ml-6 mt-2 space-y-1">
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>SQLAlchemy</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Cloud</span>
                <ul className="list-[circle] list-outside ml-6 mt-2 space-y-1">
                  <li>AWS</li>
                  <li>Docker</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-disc list-outside space-y-4">
              <li>
                <span className="font-bold">Frontend</span>
                <ul className="list-[circle] list-outside ml-6 mt-2 space-y-1">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap5</li>
                  <li>JavaScript</li>
                  <li>ReactJs</li>
                  <li>AngularTs</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Tools</span>
                <ul className="list-[circle] list-outside ml-6 mt-2 space-y-1">
                  <li>Git</li>
                  <li>Postman</li>
                  <li>Swagger</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;