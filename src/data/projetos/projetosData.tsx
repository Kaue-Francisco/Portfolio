
import imageVendas from '../../../public/images/vendas.jpeg';
import API2 from '../../../public/images/api-2.gif';
import Barbearia from '../../../public/images/barbearia.jpeg';
import API1 from '../../../public/images/pixels.gif';
import { Project } from '../interfaces/projetosInterface';

export const projects: Project[] = [
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