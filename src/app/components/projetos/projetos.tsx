"use client";

import React, { useState } from 'react';
import imageVendas from '../../../../public/images/vendas.jpeg';
import API2 from '../../../../public/images/api-2.gif';
import Barbearia from '../../../../public/images/barbearia.jpeg';
import API1 from '../../../../public/images/pixels.gif';

interface Project {
  title: string;
  image: string;
  category: string;
  details: string;
}

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
        <button className="text-gray-500 absolute top-4 right-4" onClick={onClose}>X</button>
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4" />
        <p className="text-gray-600 mb-4">{project.category}</p>
        <p className="text-gray-600">{project.details}</p>
      </div>
    </div>
  );
};

const Projetos: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Tracking com DeepSort',
      image: 'https://github.com/Kaue-Francisco/Deepsort_Yolov5/raw/main/media/example.gif',
      category: 'Pessoal',
      details: "Este repositório contém um código simples de rastreamento com a Métrica de Associação Profunda (Deep SORT). O código carrega o modelo coco yolov5 e o utiliza para detectar carros na estrada, conforme mostrado no exemplo.",
    },
    {
      title: 'API 2° Semestre',
      image: API2.src,
      category: 'FATEC',
      details: 'Detalhes do projeto API 2° Semestre.',
    },
    {
      title: 'API 1° Semestre',
      image: API1.src,
      category: 'FATEC',
      details: 'Detalhes do projeto API 1° Semestre.',
    },
    {
      title: 'Barbearia Companhia do Bigode',
      image: Barbearia.src,
      category: 'Pessoal',
      details: 'Detalhes do projeto Barbearia Companhia do Bigode.',
    },
    {
      title: 'Climate Check',
      image: 'https://github.com/Kaue-Francisco/ClimateCheck/raw/main/static/demonstracao/home.png',
      category: 'Pessoal',
      details: 'Detalhes do projeto Climate Check.',
    },
    {
      title: 'Projeto Final Desenvolvimento Web',
      image: imageVendas.src,
      category: 'FATEC',
      details: 'Detalhes do projeto Projeto Final Desenvolvimento Web.',
    },
  ];

  return (
    <section id="projetos" className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Principais Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden transform transition duration-500 hover:shadow-lg hover:scale-105 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              width={600}
              height={400}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-gray-500 font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Projetos;
