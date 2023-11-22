from flask import Flask, render_template

app = Flask(__name__)

projetos_pessoais = [["../static/imgs/climate.png", 
'ClimateCheck', 
'''Realizei este site simples com um amigo, 
onde seu objetivo é um usuário preencher o 
campo cidade e depois retornar o clima da 
cidade e a descrição do tempo atual.''',
'https://github.com/Kaue-Francisco/ClimateCheck'],

["../static/imgs/cep.png",
'Consulte-seu-Cep-PY',
'''O intuito do projeto é fazer uma consulta 
de um CEP especificado e retornar informações 
sobre ele. Por exemplo, o nome da rua, bairro, 
cidade, etc... Utilizei o framework Python Flask''',
'https://github.com/Kaue-Francisco/Consulte-seu-Cep-PY']]

projetos_academicos = [['../static/imgs/api.png',
'API',
'''Este projeto tem como objetivo principal criar 
um sistema de apoio para mães que enfrentam a 
situação desafiadora de ter um filho diagnosticado 
com Insuficiência Renal Crônica (IRC).''',
'https://github.com/Daiene/Pixels']]

@app.route('/')
@app.route('/inicio')
@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/projetos')
def projetos():
    return render_template('projetos.html', projetos_pessoais=projetos_pessoais, projetos_academicos=projetos_academicos)

@app.route('/curriculo')
def curriculo():
    return render_template('curriculo.html')

if __name__ == '__main__':
    app.run(debug=True)