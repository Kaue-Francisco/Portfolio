// components/Projetos.js
import React from 'react';
import imageVendas from '../../../../public/images/vendas.jpeg';
import API2 from '../../../../public/images/api-2.gif';
import Barbearia from '../../../../public/images/barbearia.jpeg';

const Projetos = () => {
  return (
    <section id="projetos" className="mb-12">
      <h2 className="text-2xl font-bold  mb-6">Principais Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://github.com/Kaue-Francisco/Deepsort_Yolov5/raw/main/media/example.gif"
            width={600}
            height={400}
            alt="Projeto 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl text-gray-500 font-bold mb-2">Tracking com DeepSort</h3>
            <p className="text-gray-600">Descrição do Projeto 1</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={API2.src}
            width={600}
            height={400}
            alt="Projeto 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-500 mb-2">API 2° Semestre</h3>
            <p className="text-gray-600">Descrição do Projeto 2</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://github.com/Kaue-Francisco/Pixels/raw/main/docs/readme/mvp/mvp3/pixels.gif"
            width={600}
            height={400}
            alt="Projeto 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-500 mb-2">API 1° Semestre</h3>
            <p className="text-gray-600">Descrição do Projeto 3</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={Barbearia.src}
            width={600}
            height={400}
            alt="Projeto 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-500 mb-2">Barbearia Companhia do Bigode</h3>
            <p className="text-gray-600">Descrição do Projeto 3</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://github.com/Kaue-Francisco/Pixels/raw/main/docs/readme/mvp/mvp3/pixels.gif"
            width={600}
            height={400}
            alt="Projeto 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-500 mb-2">Projeto 3</h3>
            <p className="text-gray-600">Descrição do Projeto 3</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={imageVendas.src}
            width={600}
            height={400}
            alt="Projeto 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-500 mb-2">Projeto Final Desenvolvimento Web</h3>
            <p className="text-gray-600">Descrição do Projeto 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;