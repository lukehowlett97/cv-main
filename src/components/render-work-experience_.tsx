// src/components/render-work-experience_.tsx

import React from 'react';
import { WorkExperienceType } from '@/data/resume-data.types'; // Adjust the import path as needed

type WorkExperienceProps = {
  experience: WorkExperienceType[];
};

const WorkExperience: React.FC<WorkExperienceProps> = ({ experience }) => {
  return (
    <>
      {experience.map((exp, index) => (
        <div key={index} className="bg-white shadow-sm rounded-md overflow-hidden">
          {/* Adjust padding here if necessary for the container */}
          <div className="px-4 sm:px-1">
            <div className="flex items-center justify-between">
              {/* Remove top margin for the company name */}
              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-0">
                <a href={exp.link} className="hover:underline">{exp.company}</a>
              </h3>
              <div className="flex-shrink-0 flex">
                {exp.badges.map((badge) => (
                  <p key={badge} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {badge}
                  </p>
                ))}
              </div>
            </div>
            {/* Remove top margin for the dates */}
            <div className="text-sm text-gray-500 mt-1">
              {exp.start} - {exp.end ?? 'Present'}
            </div>
            {/* Remove top margin for the job title */}
            <div className="font-mono text-sm text-gray-500 mt-0 mb-3">
              {exp.title}
            </div>
            {/* Maintain the list style */}
            <ul className="font-mono text-sm list-disc list-outside text-gray-600 space-y-1.5">
              {exp.description.map((item, itemIndex) => {
                const parts = item.split(/:(.+)/);
                return (
                  <li key={itemIndex} className="text-gray-500">
                    <span className="font-bold">{parts[0]}</span>{parts.length > 1 ? `:${parts[1]}` : ''}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkExperience



  
// const WorkExperience: React.FC<WorkExperienceProps> = ({ experience }) => {
//   return (
//     <div>
//       {experience.map((exp, index) => (
//         <div key={index}>
//           <h3>{exp.title}</h3>
//           <h4>{exp.company}</h4>
//           <p>{exp.start} - {exp.end}</p>
//           <ul>
//             {exp.description.map((item, itemIndex) => (
//               <li key={itemIndex}>{item}</li>
//             ))}
//           </ul>
//           {/* Render other details as needed */}
//         </div>
//       ))}
//     </div>
//   );
// };


