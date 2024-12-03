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
    contribution: '',
    hardskills: '',
    softskills: "",
    technologies: ['Python', 'JupyterNotebook', 'OpenCV', 'YOLOv5'],
    link: 'https://github.com/Kaue-Francisco/Deepsort_Yolov5.git'
  },
  {
    title: 'API 3° Semestre',
    image: API3.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: "No segundo semestre de 2024 colaborei em um projeto onde seu objetivo foi o desenvolvimento de um Portal de Transparência em parceria com a fundação FAPG localizada no PIT (Parque de Inovação Tecnológica) em São José dos Campos. Um de seus requisítos era realizar uma aplicação intuitiva que fosse fácil para o usuário comum que está acessando para visualizar os determinandos projetos e também pela parte do administrador, onde seu foco era na parte de gestão de novos projetos, coordenadores, empresas, bolsistas e bolsas. Também é possível gerar relatórios de dados informados no dashboard e um documento do projeto.",
    contribution: 'Contribuição: Neste projeto eu tive uma experiência muito boa em que acredito que vai servir para mim nos próximos anos na minha carreira profissional, no começo do semestre eu formei grupo com pessoas de outros grupos afim de ter uma nova experiência e aprimorar a habilidade de comunicação, trabalho em equipe a adaptação. Nas primeiras sprints nossa equipe estava ganhando ritmo até que tivemos uma surpresa com outros grupos da nossa turma e acabamos aceitando 3 novos integrante e um grupo de 6 foi papra 9 pessoas. Após essa integração um dos maiores desafios foi a adaptação após a entrade desses novos integrantes pois elas entraram no meio do desenvolvimento do projeto, não estavam acostumada com nosso ritmo e também tivemos que fazer um replanejamento das tarefas pois nós tinhamos definidos tarefas para 6 pessoas e com um grupo maior também se espera mais resultados. Então nosso grupo se juntou e discutiu novas funcionalidades que podiam ser implementadas na aplicação. No projeto na questão de desenvolvimento eu colabarei com o envio de email para o administrador quando o projeto for vencer e refatoração de código. Também contribuí com documentação do produto e a comunicação entre a equipe.',
    hardskills: 'HardSkills: Trabalhado neste projeto foram: Java, Spring Boot, React, HTML, CSS, Python, MySQL, Git',
    softskills: "SoftSkills: Neste projeto a comunicação, trabalho em equipe, adaptação e proatividade foram os pontos mais trabalhos. Com a entrada de novos integrantes tivemos que nos adaptar a nova realidade e também tivemos que ser proativos para que o projeto não atrasasse. A comunicação foi um dos pontos mais importantes pois com a entrada de novos integrantes tivemos que explicar o projeto, as funcionalidades e também tivemos que explicar o que cada um estava fazendo. Dificuldades que encontrei nesse projeto foi a comunicação com os novos integrantes, pois eles não estavam acostumados com o nosso ritmo e também tivemos que fazer um replanejamento das tarefas pois nós tinhamos definidos tarefas para 6 pessoas e com um grupo maior também se espera mais resultados.",
    technologies: ['Spring Boot', 'Java', 'React', 'MySQL', 'Python', 'HTML', 'CSS', 'Git'],
    link: 'https://github.com/Sync-FATEC/API-2024.2-3SEM'
  },
  {
    title: 'API 2° Semestre',
    image: API2.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: 'No primeiro semestre de 2024 colaborei em um projeto onde foi uma aplicação web desenvolvida para facilitar a gestão de solicitações de suporte técnico. Nós tivemos a liberdade de escolher o tema e com isso escolhemos uma empresa de móveis. Onde seu foco era receber chamados de clientes, com dúvidas, problemas ou insatisfeitos e teria um técnico com um horário específico para resolver o problema. O técnico teria um horário específico para resolver o problema e o cliente poderia avaliar o técnico após o problema ser resolvido. O administrador teria acesso a todas as informações e poderia criar, editar, excluir e visualizar os problemas, técnicos e clientes. O administrador também poderia gerar relatórios de dados informados no dashboard e um documento do projeto.',
    contribution: 'Contribuição: Neste semestre eu me decidi junto com um colega de ir atrás de novos integrantes para formar um novo grupo devido aos problemas que tivemos no grupo do semestre anterior, então formamos um grupos com pessoas com um conhecimento técnico muito bom mas o maior problema nesse projeto foi a comunicação. A equipe era divida entre 2 polos aonde eles não converssavam muito e com isso atrapalhou na questão de conhecimento do andar das atividades, dúvidas, prazos, etc. A comunicação é um peça vital para qualquer time com elas podemos enfrentar os problemas que poderão vir ao decorrer do desenvolvimento do projeto. Neste projeto eu colaborei com o desenvolvimento backend da aplicação. Realizei funcionalidade como criação de Problema, validação de horário de técnico e refatoração de código.',
    hardskills: 'HardSkills: Trabalhado neste projeto foram: React, Prisma, Node.js, TypeScript, MySQL, HTML, CSS, Git',
    softskills: 'SoftSkills: Neste projeto atuei como Desenvolvedor para aprimorar minha autonomia, comuncação e proatividadade eu me juntei ao novo grupo de pessoas na intenção de melhorar o trabalhar em equipe. E de certa forma a comunicação não foi algo muito trabalho nesse semestre por conta do problema que tivemos neste grupo.',
    technologies: ['React', 'Prisma', 'Node.js', 'TypeScript', 'MySQL', 'HTML', 'CSS', 'Git'],
    link: 'https://github.com/TeamHiveAPI/API-2023.2'
  },
  {
    title: 'API 1° Semestre',
    image: API1.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: 'No segundo semestre de 2023 participei do meu primeiro projeto pelo instituto FATEC Jessen Vidal, onde neste projeto seu objetivo foi fazer uma plataforma de auxilio para mães que possuem filhos com Insuficiencia Renal Cronica. Com funcionalidade de blogs, onde as mães poderiam compartilhar suas experiências, dúvidas e também teriam acesso a informações sobre a doença. O administrador teria acesso a todas as informações e poderia criar, editar, excluir e visualizar os posts, usuários e comentários. O administrador também poderia gerar relatórios de dados informados no dashboard e um documento do projeto.',
    contribution: 'Contribuição: Inicialmente neste semestre eu formei um grupo com amigos e pessoas que demonstravam ter bastante interesse em aprender pois nesse semestre eu não conhecia muito bem as pessoas da minha turma então foi uma surpresa. Mas ao decorrer do projeto precisamos enfrentar alguns problemas, pois uma integrante do nosso grupo resoolveu trancar a faculdade e com isso perdemos um ponto chave na nossa equipe pois ela era bem colaborativa e experiente. E após a primeira sprint foi percebido que nem todos os integrantes do grupo estavam com a mesma motivação em realizar o projeto e determinado a entregar algo bem feito, com isso eu e mais alguns integrantes ficamos com uma grande responssabilidade de ter que fazer a tarefas dessas outras pessoas. Neste projeto eu colaborei com o desenvolvimento backend da aplicação. Realizei funcinalidades como: troca de senha, validação de usuario, criar conta e criar postagem do blog.',
    hardskills: 'HardSkills: Trabalhado neste projeto foram: Python, Flask, JavaScript, HTML, CSS, MySQL, Git',
    softskills: 'SoftSkills: Neste projeto atuei como Scrum Master foi realizado no primeiro semeste da minha faculdade com isso eu tive minha primeira experiência em trabalho em equipe com pessoas que não conhecia, comunicação e a organização de tarefas. E o maior ponto que eu percebi nesse projeto foi o quão melhor é realizar um grupo com pessoas que são ageis e com o mesmo nível de determinação que você.',
    technologies: ['Python', 'JavaScript', 'Flask', 'HTML', 'CSS', 'MySQL', 'Git'],
    link: 'https://github.com/Kaue-Francisco/Pixels'
  },
  {
    title: 'Barbearia Companhia do Bigode',
    image: Barbearia.src,
    category: 'Pessoal',
    details: 'Este projeto está sendo desenvolvido para uma barbearia real chamada Companhia do Bigode locaizada no bairro Parque Industrial de São José dos Campos. O objetivo é criar um sistema de gerenciamento de clientes, serviços e agendamentos. O sistema terá uma área de administração onde o administrador poderá visualizar, adicionar, editar e excluir clientes, serviços e agendamentos. O sistema também terá uma área de usuário onde o usuário poderá visualizar os serviços, agendar um horário e visualizar os horários agendados.',
    contribution: '',
    softskills: '',
    hardskills: '',
    technologies: ['React', 'TypeScript', 'Prisma', 'Node.js', 'MySQL'],
    link: 'https://github.com/Kaue-Francisco/Barbearia'
  },
  {
    title: 'Climate Check',
    image: 'https://github.com/Kaue-Francisco/ClimateCheck/raw/main/static/demonstracao/home.png',
    category: 'Pessoal',
    details: 'Este é um projeto com valor sentimental para mim pois foi uma das primeiras aplicações que realizei quando tinha somente 16 anos. Meu primeiro contato com serviços backend, APIRestFull e frontend. Foi uma experiência unica para mim, seu objetivo era você poder visualizar o clima que está atualmente em uma determinada cidade.',
    contribution: '',
    softskills: '',
    hardskills: '',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'WeatherAPI'],
    link: 'https://github.com/Kaue-Francisco/ClimateCheck'
  },
  {
    title: 'Projeto Final Desenvolvimento Web',
    image: imageVendas.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: 'É o Projeto Final Desenvolvimento Web na FATEC. Gerenciamento de Vendas de um mercado aonde o administrador consegue, adicionar, editar, excluir e visualizar produtos, vendas e clientes',
    contribution: '',
    softskills: '',
    hardskills: '',
    technologies: ['React', 'Prisma', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    link: 'https://github.com/Kaue-Francisco/Desenvolvimento-Web-2/tree/main/projeto_final',
  },
];
