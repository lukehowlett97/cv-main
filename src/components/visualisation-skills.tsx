// src/components/VisualisationSkills.tsx

import React from 'react';

const VisualisationSkills: React.FC = () => {
  const skills = ['Tableau', 'Power BI', 'd3.js'];

  return (
    <div>
      <h2 className="text-xl font-bold">Visualization Skills</h2>
      <ul className="list-disc list-inside text-sm text-gray-500">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default VisualisationSkills;
