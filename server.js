// o express vai nos ajudar a cuidar das rodas da nossa apliação! 


/* http://www.meusite.com <- GET -> Entregue a página! 
CREATE PUST
READ GET
UPDATE PUT
DELETE DELETE */


/* dependencia de desenvolvimento, é onde instalamos o nodemoon 
npm install nodemon --save-dev
pra executar podemos alterar o start lá em scripts { start:  nodemon SCRIPT}
ou 
npx nodemon server.js

podemos até remover algumas pastas assistidas pelo nodemon, assim como*/




const express = require('express')
const app = express()

app.listen(3000, () => {console.log("Servidor executando na porta 3000")});

app.get('/', (request, response) => {
    response.send(`
    <form action='/' method='POST'>
    Nome: <input type='text' name='nome'>
    <button>Enviar</button>
    `)
});

app.post('/', (request, response) => {
    response.send('Formulário recebido!')
})

app.get('/contato', (request, response) => {
    response.send('<h1>Obrigado por entrar em contato com a gente</h1>')
} )