# PORTFÓLIO

<br>

<div align="center">
    <img src="./mgt/perfil.png" width="480" height='600'>
</div>

### Quem sou Eu?
<p>Sou o Kauê tenho 18 anos e estou cursando na FATEC de São José dos Campos e também sou estágiario em Desenvolvimento de Software.</p>

### Contato
<p>email: kauesantos.francisco@gmail.com</p>
<p>linkedin: https://www.linkedin.com/in/kau%C3%AA-francisco-3b13aa255/ </p>

<br><br>

<h2 align="center">TECNOLOGIAS</h2>

<div align="center" style="display:flex;">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="50px" style="padding-left:10px;"/>

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" width="50px" style="padding-left:10px;"/> 


<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50px" style="padding-left:10px;"/>


<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50px" style="padding-left:10px;"/>


<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="50px" style="padding-left:10px;"/>


<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="50px" style="padding-left:10px;"/>


<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50px" style="padding-left:10px;"/>
</div>

<br><br>

<h2 align="center">Como executar</h2>

```bash

# Navegando pelo github acesse o repositório ou acesse este link: https://github.com/Kaue-Francisco/portfolio_digital_dsm

# Depois clique no botão VERDE <> Code

# Selecione a opção HTTPS e copie o link.

# Agora vá para o terminal e digite o seguinte comando e cole o link:
$ git clone https://github.com/Kaue-Francisco/portfolio_digital_dsm.git

# Agora acesse a pasta clonada
$ cd portfolio_digital_dsm

# Para executar os seguinte comandos a seguir você deve ter python instalado em seu computador!

# Você irá precisar criar um ambiente virtual em python
$ python -m venv venv

# Agora você deve acessar esse ambiente virtual com o seguinte comando:

# Windows:
$ .\venv\Scripts\activate

# Linux:
$ source venv/bin/activate

# Agora que você esta dentro do ambiente virtual você deve baixar as depêndencias com o seguinte comando:
$ pip install -r requeriments.txt

# Agora acesse a pasta api
$ cd api/

# E execute o seguinte comando:
$ flask run

# Depois irá liberar um ip local para você 127.0.0.1:5000
# Se você digitar este IP no seu navegador ira abrir o projeto!

```

<h2 align="center">Instruções para a implementação no Vercel</h2>

1. Instalar o node e seu gerenciador de pacotes, ou seja, o npm 
1. Instalar o vercel através do comando: 
    ```console 
    npm install -g vercel 
    ```
1. Considerando que você já criou uma conta no Vercel, e que
 está logado, utilize o comando seguinte no mesmo nível do arquivo vercel.json
    ```console 
    vercel
    ```
1. Defina um nome para a sua aplicação e utilize todas as demais opções de acordo com o padrão sugerido. 
1. Verifique se o link disponibilizado ao final do processo de upload/build está acessível, caso não esteja, execute o comando 
    ```console 
    vercel --prod 
    ```

(Validação professor FGMC - 1DSM - 2023-02)