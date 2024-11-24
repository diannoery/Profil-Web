import React from "react";

const Projects = () => {
  const projects = [
    {
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/13/f0/8e/13f08e50-170a-e895-e6fc-053d168b0923/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/460x0w.webp", // Ganti dengan URL gambar
      title: "Build a MyTelkomsel App",
      description:
        "I contribute to the development and maintenance of iOS applications, including MyTelkomsel. My responsibilities include implementing new features, optimizing performance, and ensuring a seamless user experience. I specialize in Swift, RxSwift, and MVC architecture, leveraging reactive programming for efficient asynchronous tasks. Additionally, I integrate Restful APIs for smooth front-end and back-end communication while collaborating with cross-functional teams to enhance and refine application features.",
      installs: "",
      link: "https://apps.apple.com/id/app/mytelkomsel/id651412430?l=id",
    },
    {
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/05/e9/01/05e901c1-dd9a-f3d2-93aa-8f1442e4437b/AppIcon-0-0-1x_U007emarketing-0-6-0-sRGB-85-220.png/460x0w.webp", // Ganti dengan URL gambar
      title: "Build a OCTOMobile App",
      description:
        "Contributed to the development of Octo Mobile for iOS by implementing VIPER architecture, integrating Restful APIs, and translating UI/UX designs into functional features using Swift. Managed dependencies with CocoaPods and utilized RXSwift for efficient asynchronous programming to deliver a high-performance and user-friendly digital banking application.",
      technologies: [],
      link: "https://apps.apple.com/id/app/octo-mobile-by-cimb-niaga/id505917174",
    },
    {
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b6/0f/e2/b60fe2a8-db19-8522-05b9-ee270224c8b5/AppIcon-0-0-1x_U007emarketing-0-10-0-0-85-220.png/460x0w.webp", // Ganti dengan URL gambar
      title: "Build a BTNMobile App",
      description:
        "Contributed to the development of BTN Mobile App for iOS by implementing VIPER architecture, integrating Restful APIs, and translating UI/UX designs into functional features using Swift. Managed dependencies with CocoaPods and utilized RXSwift for efficient asynchronous programming to deliver a high-performance and user-friendly digital banking application.",
      technologies: [],
      link: "https://apps.apple.com/id/app/btn-mobile/id6443466424",
    },
  ];

  return (
    <div id="projects" className="p-8">
      <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="flex items-start space-x-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-40 h-24 object-cover rounded-lg shadow-md"
            />
            <div>
              <a
                href={project.link}
                className="text-xl font-bold text-white hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title} ↗
              </a>
              <p className="text-gray-300 mt-2">{project.description}</p>
              {project.technologies && (
                <div className="flex flex-wrap mt-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-gray-800 text-gray-300 rounded-full px-3 py-1 mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {project.stars && (
                <p className="text-gray-400 mt-2">★ {project.stars}</p>
              )}
              {project.installs && (
                <p className="text-gray-400 mt-2">⬇ {project.installs}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
