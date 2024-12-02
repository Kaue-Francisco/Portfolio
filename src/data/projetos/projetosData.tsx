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
    softskills: "",
    technologies: ['Python', 'JupyterNotebook', 'OpenCV', 'YOLOv5'], // Exemplo de tecnologias utilizadas
    link: 'https://github.com/Kaue-Francisco/Deepsort_Yolov5.git'
  },
  {
    title: 'API 3° Semestre',
    image: API3.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: "Este projeto é uma aplicação de portal de transparência para a fundação FAPG. Seu objetivo era realizar uma aplicação intuitiva que atingesse todos os requisistos de administração do cliente. No projeto eu colabarei com o envio de email para o administrador quando o projeto for vencer e refatoração do código.",
    softskills: "SoftSkills: Neste projeto atuei como Scrum Master mas de uma forma mais correta, novamente fiz um grupo com pessoas diferentes na intenção de melhorar minha comunicação e trabalho em equipe. Dificuldades que encontrei nesse projeto foi que ao longo do desenvolvimento do projeto teve novos integrantes no grupo e um grupo que era formado por 6 pessoas virou 9 pessoas, então teve um processo de adaptação.",
    technologies: ['Spring Boot', 'Java', 'React', 'MySQL'],
    link: 'https://github.com/Sync-FATEC/API-2024.2-3SEM'
  },
  {
    title: 'API 2° Semestre',
    image: API2.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: 'O projeto é uma aplicação web desenvolvida para facilitar a gestão de solicitações de suporte técnico. Neste projeto eu colaborei com o desenvolvimento backend da aplicação. Realizei funcionalidade como criação de Problema, validação de horário de técnico, organização de código.',
    softskills: 'SoftSkills: Neste projeto atuei como Desenvolvedor para aprimorar minha autonomia, comuncação e proatividadade eu me juntei ao novo grupo de pessoas na intenção de melhorar o trabalhar em equipe. Dificuldades que foi encontrei nesse projeto foi que o grupo não era totalmente comunicativo era separado em 2 polos o que prejudicava a comunicação.',
    technologies: ['React', 'Prisma', 'Node.js', 'TypeScript', 'MySQL'],
    link: 'https://github.com/TeamHiveAPI/API-2023.2'
  },
  {
    title: 'API 1° Semestre',
    image: API1.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: 'Este projeto teve o intuito de fazer uma plataforma de auxilio para mães que possuem filhos com Insuficiencia Renal Cronica. Neste projeto eu colaborei com o desenvolvimento backend da aplicação. Realizei funcinalidades como, troca de senha, validação de usuario, criar conta, criar postagem do blog.',
    softskills: 'SoftSkills: Neste projeto atuei como Scrum Master foi realizado no primeiro semeste da minha faculdade com isso eu tive minha primeira experiência em trabalho em equipe com pessoas que não conhecia, comunicação e a organização de tarefas. Dificuldades que encontrei nesse projeto foi que os integrantes não estavam muito interessantes no desenvolvimento do projeto, então teve pessoas com sobrecarga de tarefas e outras pessoas acabaram ficando sem fazer nada.',
    technologies: ['Python', 'JavaScript', 'Flask', 'HTML', 'CSS', 'MySQL'],
    link: 'https://github.com/Kaue-Francisco/Pixels'
  },
  {
    title: 'Barbearia Companhia do Bigode',
    image: Barbearia.src,
    category: 'Pessoal',
    details: 'É um sistema de agendamento para a Barbearia Companhia do Bigode.',
    softskills: '',
    technologies: ['React', 'TypeScript', 'Prisma', 'Node.js', 'MySQL'],
    link: 'https://github.com/Kaue-Francisco/Barbearia'
  },
  {
    title: 'Climate Check',
    image: 'https://github.com/Kaue-Francisco/ClimateCheck/raw/main/static/demonstracao/home.png',
    category: 'Pessoal',
    details: 'Um projeto aonde você consegue ver o clima de uma cidade específica.',
    softskills: '',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'WeatherAPI'],
    link: 'https://github.com/Kaue-Francisco/ClimateCheck'
  },
  {
    title: 'Projeto Final Desenvolvimento Web',
    image: imageVendas.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: 'É o Projeto Final Desenvolvimento Web na FATEC. Gerenciamento de Vendas de um mercado aonde o administrador consegue, adicionar, editar, excluir e visualizar produtos, vendas e clientes',
    softskills: '',
    technologies: ['React', 'Prisma', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    link: 'https://github.com/Kaue-Francisco/Desenvolvimento-Web-2/tree/main/projeto_final',
  },
];
