// src/components/AboutMe.tsx

import React from 'react';

type AboutMeProps = {
  aboutMePoints: string[]; // Assuming it's an array of strings
};

const AboutMe: React.FC<AboutMeProps> = ({ aboutMePoints }) => {
    return (
        <div className="bg-white shadow-sm rounded-md overflow-hidden">
        <div className="px-4 sm:px-6 py-1">
            <ul className="font-mono text-sm list-disc list-outside text-gray-600 space-y-1">
            {aboutMePoints.map((point, index) => (
                <li key={index} className="text-gray-500">
                {point}
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
    };

export default AboutMe;
