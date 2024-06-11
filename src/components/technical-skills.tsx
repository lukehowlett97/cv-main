// src/components/CompetentTools.tsx

import React from 'react';

const TechincalSkills: React.FC = () => {
  // Replace with your actual tools and technologies
  const tools = ['Python', 'Mathematics (BSc.)', 'Data Engineering', 
  'Data Analysis', 'Data Science',  'Data Visualisation', 
  'Machine Learning', 'Statistics', 'Cloud Platforms', 
  'Web Development', 'Project Management', 'System Deployment', 
  'Version Control', 'Mathematical Modelling','Data Modelling', 
  'SQL', 'Docker', 'GIS'  ];

  return (
    <div>
      <h2 className="text-xl font-bold">Technical Skills</h2>
      <div className="flex flex-wrap gap-2 mt-3">
        {tools.map((tool, index) => (
          <span key={index} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechincalSkills;
