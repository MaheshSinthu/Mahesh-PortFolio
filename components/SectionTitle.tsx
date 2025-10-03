import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12 animate-fade-in-up">
      <p className="text-sm font-medium uppercase tracking-widest mb-2">{subtitle}</p>
      <h2 className="text-4xl md:text-5xl">{title}</h2>
    </div>
  );
};

export default SectionTitle;