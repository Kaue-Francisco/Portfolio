import React from 'react';
import FotoKaue from '../../../../public/images/Foto-Kauê.png';
import { FaDownload } from 'react-icons/fa'; // Importa o ícone de download

export default function Sobre() {
  return (
    <section id='sobre' style={{minHeight: '100vh'}}  className="py-12 px-4 md:px-0 flex justify-center items-center"> {/* Adiciona padding à seção e centraliza conteúdo */}
      <div className="flex flex-col-reverse items-center justify-center gap-8 sm:flex-row">
        <div className="relative w-full max-w-md rounded-full overflow-hidden sm:w-80 sm:h-80 sm:mr-8 order-2 sm:order-1">
          <img
            src={FotoKaue.src}
            alt="Profile Picture"
            width={320}
            height={320}
            className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-300"
          />
        </div>
        <div className="text-center sm:text-left order-1 sm:order-2">
          <h1 className="text-4xl sm:text-5xl font-bold">Kauê dos Santos Francisco</h1>
          <p className="text-gray-400 mt-4 max-w-md">
            Kauê Francisco é um desenvolvedor backend apaixonado por tecnologia. Ele tem trabalhado na área por mais
            de 2 anos, explorando constantemente novas tecnologias. Com interesse em Visão Computacional e Segurança da
            Informação, ele está sempre em busca de novos desafios.
          </p>
          <span className="block text-gray-400 text-lg font-normal mt-2">Software Developer Intern </span>
          <div className="mt-6">
            <a
              href="/curriculo.pdf"
              download
              className="bg-purple-500 text-white py-2 px-4 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
              style={{ borderRadius: '10px' }}
            >
              <FaDownload className="mr-2" /> {/* Adiciona o ícone aqui */}
              Baixar Currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
