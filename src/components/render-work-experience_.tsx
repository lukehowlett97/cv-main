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
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  <a href={exp.link} className="hover:underline">{exp.company}</a>
                </h3>
                <div className="ml-2 flex-shrink-0 flex">
                  {exp.badges.map((badge) => (
                    <p key={badge} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {badge}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                {exp.start} - {exp.end}
              </div>
              <div className="mt-1 font-mono text-sm text-gray-500">
                {exp.title}
              </div>
              <ul className="mt-2 font-mono text-sm list-disc list-inside text-gray-600">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="font-mono text-sm text-gray-500">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </>
    );
  };
  
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

export default WorkExperience;

