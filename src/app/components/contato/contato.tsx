import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importando os ícones

export default function Contato() {
    return (
        <section id="contato" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Contato</h2>
            <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-gray-600">
                    Entre em contato através do email: <a href="mailto:kauesantos.francisco@gmail.com" className="text-blue-500">kauesantos.francisco@gmail.com</a>
                </p>
                <div className="flex items-center justify-end mt-4">
                    <a href="https://github.com/Kaue-Francisco" className="text-gray-900 hover:text-purple-500 mr-4" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/kau%C3%AA-francisco-3b13aa255/" className="text-gray-900 hover:text-purple-500" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </div>
        </section>
    );
}
