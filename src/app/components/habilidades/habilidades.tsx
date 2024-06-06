import React from "react";
import { FaPython, FaJs, FaDatabase, FaDocker, FaNode, FaGithub, FaGit, FaLinux } from 'react-icons/fa';
import { SiOpencv, SiTypescript, SiC, SiFlask } from 'react-icons/si'; // Outros ícones

export default function Habilidades() {
    const iconClass = "h-8 w-8 mb-2 transition-transform duration-300";
    const boxClass = "bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center transform transition-transform duration-300 hover:shadow-lg hover:scale-105";

    return (
        <section id="habilidades" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Principais Habilidades</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className={`${boxClass} group`}>
                    <FaPython className={`${iconClass} group-hover:text-purple-500 text-black`} />
                    <span className="text-gray-600">Python</span>
                </div>
                <div className={`${boxClass} group`}>
                    <SiOpencv className={`${iconClass} group-hover:text-purple-500 text-black`} />
                    <span className="text-gray-600">OpenCV</span>
                </div>
                <div className={`${boxClass} group`}>
                    <FaJs className={`${iconClass} group-hover:text-purple-500 text-black`} />
                    <span className="text-gray-600">JavaScript</span>
                </div>
                <div className={`${boxClass} group`}>
                    <SiTypescript className={`${iconClass} group-hover:text-purple-500 text-black`} />
                    <span className="text-gray-600">TypeScript</span>
                </div>
                <div className={`${boxClass} group`}>
                    <SiC className={`${iconClass} group-hover:text-purple-500 text-black`} />
                    <span className="text-gray-600">Linguagem C</span>
                </div>
                <div className={`${boxClass} group`}>
                    <FaDatabase className={`${iconClass} group-hover:text-purple-500 text-black`} />
                    <span className="text-gray-600">MySQL</span>
                </div>
                <div className={`${boxClass} group`}>
                    <FaDocker className={`${iconClass} group-hover:text-purple-500 text-black`} />
                    <span className="text-gray-600">Docker</span>
                </div>
                <div className={`${boxClass} group`}>
                    <FaNode className={`${iconClass} group-hover:text-purple-500 text-black`} />
                    <span className="text-gray-600">Node.js</span>
                </div>
                <div className={`${boxClass} group`}>
                    <SiFlask className={`${iconClass} group-hover:text-purple-500 text-black`} />
                    <span className="text-gray-600">Flask</span>
                </div>
                <div className={`${boxClass} group`}>
                    <FaGithub className={`${iconClass} group-hover:text-purple-500 text-black`} />
                    <span className="text-gray-600">GitHub</span>
                </div>
                <div className={`${boxClass} group`}>
                    <FaGit className={`${iconClass} group-hover:text-purple-500 text-black`} />
                    <span className="text-gray-600">Git</span>
                </div>
                <div className={`${boxClass} group`}>
                    <FaLinux className={`${iconClass} group-hover:text-purple-500 text-black`} />
                    <span className="text-gray-600">Linux</span>
                </div>
            </div>
        </section>
    );
}
