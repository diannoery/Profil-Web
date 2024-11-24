import React from 'react';

const Experience = () => {
  const experiences = [
    {
      year: '2023 — PRESENT',
      title: 'iOS App Developer',
      company: 'Phincon',
      description:
        'I work at PHINCON as an iOS Developer, contributing to the development and maintenance of iOS applications. I collaborate with the development team, implement new features, and ensure optimal performance and user experience. My technical expertise includes Swift, Objective-C, Xcode, UIKit, SwiftUI, RxSwift, and Git. I have expertise in iOS application development leveraging Swift and Model-View-Controller (MVC) architecture. I also use RxSwift for reactive programming and efficient asynchronous tasks. Additionally, I have experience integrating Restful APIs to maintain seamless communication between front-end and back-end and work with cross-functional teams to enhance features and optimize application performance.',
      technologies: ['Swift', 'MVVM', 'UIKit', 'XCode', 'RXSwift'],
      link: '#',
    },
    {
      year: '2021 — 2023',
      title: 'iOS App Developer',
      company: 'PT. Infosys Solusi Terpadu',
      description: "Experienced in Front-End development with a focus on integrating Restful APIs in collaboration with Back-End Developers to ensure seamless data flow and functionality. Proficient in implementing UI kits to translate designs into user-friendly features using the Swift programming language on mobile platforms. Skilled in managing dependencies such as CocoaPods for efficient dependency management and RXSwift for handling asynchronous and event-driven tasks. Additionally, adept at applying the VIPER architecture to ensure scalability, maintainability, and a clear separation of concerns in the development process.",
      technologies: ['Swift', 'VIPER', 'UIKit', 'XCode', 'RXSwift'],
      link: '#',
    },
  ];

  return (
    <div id="experience" className="p-8">
      <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Flex container for two columns */}
            <div className="flex justify-between items-start mb-4">
              {/* Column 1: Year */}
              <div className="w-1/6 text-gray-400 text-sm">{exp.year}</div>
              {/* Column 2: Title */}
              <div className="w-5/6 text-left">
                <a
                  href={exp.link}
                  className="text-xl font-bold text-teal-400 hover:text-teal-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.title} · {exp.company}
                </a>
                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm bg-gray-700 text-teal-400 rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
              </div>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
