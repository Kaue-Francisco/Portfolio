import { useState } from 'react';
import { Disclosure } from '@headlessui/react';

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-2">Kauê Francisco</h1>
          <p className="text-gray-400 text-lg">Desenvolvedor Backend</p>
        </div>
      </header>
      <main className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <section id="projetos" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Principais Projetos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Projeto 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Projeto 1</h3>
                <p className="text-gray-600">Descrição do Projeto 1</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Projeto 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Projeto 2</h3>
                <p className="text-gray-600">Descrição do Projeto 2</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Projeto 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Projeto 3</h3>
                <p className="text-gray-600">Descrição do Projeto 3</p>
              </div>
            </div>
          </div>
        </section>
        <section id="habilidades" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Habilidades</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <FileJsonIcon className="h-8 w-8 text-gray-600" />
              <span className="ml-2 text-gray-600">Node.js</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <PyramidIcon className="h-8 w-8 text-gray-600" />
              <span className="ml-2 text-gray-600">Python</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <DatabaseIcon className="h-8 w-8 text-gray-600" />
              <span className="ml-2 text-gray-600">MySQL</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <DatabaseIcon className="h-8 w-8 text-gray-600" />
              <span className="ml-2 text-gray-600">MongoDB</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <ContainerIcon className="h-8 w-8 text-gray-600" />
              <span className="ml-2 text-gray-600">Docker</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <CloudIcon className="h-8 w-8 text-gray-600" />
              <span className="ml-2 text-gray-600">AWS</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <GitGraphIcon className="h-8 w-8 text-gray-600" />
              <span className="ml-2 text-gray-600">Git</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <MailIcon className="h-8 w-8 text-gray-600" />
              <span className="ml-2 text-gray-600">Postman</span>
            </div>
          </div>
        </section>
        <section id="contato" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Contato</h2>
          <div className="bg-gray-100 rounded-lg p-4">
            <p className="text-gray-600">Entre em contato através do email: <a href="mailto:joao.silva@example.com" className="text-blue-500">joao.silva@example.com</a></p>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} João Silva. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

// Definindo os ícones fora da função principal
function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 16a4 4 0 0 0 0-8h-.88a5 5 0 0 0-9.24 1A4 4 0 0 0 4 16" />
      <path d="M16 16H4" />
      <path d="M16 16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4h0" />
    </svg>
  );
}

function ContainerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function FileJsonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" />
      <path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" />
    </svg>
  );
}

function GitGraphIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PyramidIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" />
      <path d="M12 2v20" />
    </svg>
  );
}
