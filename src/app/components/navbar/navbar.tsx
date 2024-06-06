"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id") ?? "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-purple-600 text-white py-4 px-4 sm:px-6 lg:px-8 fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mb-2 sm:mb-0">Portfólio</h1>
          <p className="text-gray-300 text-lg hidden sm:block ml-4">Desenvolvedor Backend</p>
        </div>
        <button 
          className="block sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.707 5.293a1 1 0 00-1.414 0L12 10.586 6.707 5.293a1 1 0 10-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 000-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2z"
              />
            )}
          </svg>
        </button>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:items-center w-full sm:w-auto transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-6 mt-4 sm:mt-0">
            <li><a href="#sobre" className={`block py-2 text-lg transition-colors duration-300 ${activeSection === "sobre" ? "font-bold text-purple-900" : "text-white hover:text-gray-300"}`}>Sobre</a></li>
            <li><a href="#projetos" className={`block py-2 text-lg transition-colors duration-300 ${activeSection === "projetos" ? "font-bold text-purple-900" : "text-white hover:text-gray-300"}`}>Projetos</a></li>
            <li><a href="#habilidades" className={`block py-2 text-lg transition-colors duration-300 ${activeSection === "habilidades" ? "font-bold text-purple-900" : "text-white hover:text-gray-300"}`}>Habilidades</a></li>
            <li><a href="#contato" className={`block py-2 text-lg transition-colors duration-300 ${activeSection === "contato" ? "font-bold text-purple-900" : "text-white hover:text-gray-300"}`}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
