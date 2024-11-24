import React from "react";
import { useScrollSpy } from "./useScrollSpy";

const Sidebar = () => {
    const sections = ['about', 'experience', 'projects'];
  const activeId = useScrollSpy(sections, 100); // Offset 100px dari atas

  return (
    <div className="w-1/4 bg-gray-900 text-white h-screen sticky top-0 flex flex-col justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Dian Afrilian Noery</h1>
      <h2 className="text-xl font-semibold text-gray-400 mb-6">
      iOS App Developer
      </h2>
      <p className="text-gray-400 mb-8">
      I craft seamless, user-friendly, and pixel-perfect iOS applications that deliver exceptional mobile experiences.
      </p>

      <nav className="space-y-8">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`flex items-center text-gray-300 hover:text-white transition-all duration-300 ${
              activeId === section ? 'text-white font-bold' : ''
            }`}
          >
            <span
              className={`block h-0.5 transition-all duration-500 mr-4 ${
                activeId === section
                  ? 'w-12 bg-white' // Garis aktif lebih panjang dan putih
                  : 'w-8 bg-gray-600' // Garis tidak aktif lebih pendek dan abu-abu
              }`}
            ></span>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>

      <div className="flex space-x-4 mt-8">
        <a href="https://github.com/diannoery" className="text-gray-400 hover:text-white">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/dian-afrilian-noery/" className="text-gray-400 hover:text-white">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/diiannoery?igsh=MTBmd21uZjF3ZnhpMA%3D%3D&utm_source=qr" className="text-gray-400 hover:text-white">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
