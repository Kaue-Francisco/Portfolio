import imageVendas from '../../../public/images/vendas.jpeg';
import API2 from '../../../public/images/api-2.gif';
import Barbearia from '../../../public/images/barbearia.jpeg';
import API1 from '../../../public/images/pixels.gif';
import API3 from '../../../public/images/api-3.gif';
import { Project } from '../interfaces/projetosInterface';

export const projects: Project[] = [
  {
    title: 'Tracking com DeepSort',
    image: 'https://github.com/Kaue-Francisco/Deepsort_Yolov5/raw/main/media/example.gif',
    category: 'Pessoal',
    details: "Este projeto contém um código simples de rastreamento em objetos (Deep SORT). O código carrega o modelo coco yolov5 e o utiliza para detectar carros na estrada, conforme mostrado no exemplo.",
    technologies: ['Python', 'JupyterNotebook', 'OpenCV', 'YOLOv5'], // Exemplo de tecnologias utilizadas
    link: 'https://github.com/Kaue-Francisco/Deepsort_Yolov5.git'
  },
  {
    title: 'API 3° Semestre',
    image: API3.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: "Este projeto é uma aplicação de portal de transparência para a fundação FAPG. Seu objetivo era realizar uma aplicação intuitiva que atingesse todos os requisistos de administração do cliente. No projeto eu colbarei com o envio de email para o administrador quando o projeto for vencer e refatoração do código. SoftSkills: Neste projeto atuei novamente como Scrum Master mas de uma forma mais correta, novamente fiz um grupo com pessoas diferentes na intenção de melhorar minha comunicação e trabalho em equipe.",
    technologies: ['Spring Boot', 'Java', 'React', 'MySQL'], // Exemplo de tecnologias utilizadas
    link: 'https://github.com/Sync-FATEC/API-2024.2-3SEM'
  },
  {
    title: 'API 2° Semestre',
    image: API2.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: 'O projeto é uma aplicação web desenvolvida para facilitar a gestão de solicitações de suporte técnico. Neste projeto eu colaborei com o desenvolvimento backend da aplicação. Realizei funcionalidade como criação de Problema, validação de horário de técnico, organização de código. SoftSkills: neste projeto eu me juntei ao novo grupo de pessoas na intenção de melhorar o trabalhar em equipe. Neste projeto atuei como desenvolvedor.',
    technologies: ['React', 'Prisma', 'Node.js', 'TypeScript', 'MySQL'], // Exemplo de tecnologias utilizadas
    link: 'https://github.com/TeamHiveAPI/API-2023.2'
  },
  {
    title: 'API 1° Semestre',
    image: API1.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: 'Este projeto teve o intuito de fazer uma plataforma de auxilio para mães que possuem filhos com Insuficiencia Renal Cronica. Neste projeto eu colaborei com o desenvolvimento backend da aplicação. Realizei funcinalidades como, troca de senha, validação de usuario, criar conta, criar postagem do blog. SoftSkills: este projeto foi realizado no primeiro semeste da minha faculdade com isso a dificuldade que encontrei foi a adaptação ao trabalho em equipe, a comunicação e a organização de tarefas. Neste projeto atuei como Scrum Master.',
    technologies: ['Python', 'JavaScript', 'Flask', 'HTML', 'CSS', 'MySQL'], // Exemplo de tecnologias utilizadas
    link: 'https://github.com/Kaue-Francisco/Pixels'
  },
  {
    title: 'Barbearia Companhia do Bigode',
    image: Barbearia.src,
    category: 'Pessoal',
    details: 'É um sistema de agendamento para a Barbearia Companhia do Bigode.',
    technologies: ['React', 'TypeScript', 'Prisma', 'Node.js', 'MySQL'], // Exemplo de tecnologias utilizadas
    link: 'https://github.com/Kaue-Francisco/Barbearia'
  },
  {
    title: 'Climate Check',
    image: 'https://github.com/Kaue-Francisco/ClimateCheck/raw/main/static/demonstracao/home.png',
    category: 'Pessoal',
    details: 'Um projeto aonde você consegue ver o clima de uma cidade específica.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'WeatherAPI'], // Exemplo de tecnologias utilizadas
    link: 'https://github.com/Kaue-Francisco/ClimateCheck'
  },
  {
    title: 'Projeto Final Desenvolvimento Web',
    image: imageVendas.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: 'É o Projeto Final Desenvolvimento Web na FATEC. Gerenciamento de Vendas de um mercado aonde o administrador consegue, adicionar, editar, excluir e visualizar produtos, vendas e clientes',
    technologies: ['React', 'Prisma', 'TypeScript', 'Node.js', 'Express', 'MySQL'], // Exemplo de tecnologias utilizadas
    link: 'https://github.com/Kaue-Francisco/Desenvolvimento-Web-2/tree/main/projeto_final',
  },
];
