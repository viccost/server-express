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
podemos até remover algumas pastas assistidas pelo nodemon, assim como node_modules, e tal*/


const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


/* precisamos configurar o express pra tratar a req.body pra gente, do contrário, teremos 
undefined ao tentar acessar o objeto: */
app.use(
    express.urlencoded({ extended: true})
)

app.use(express.static(path.resolve(__dirname, 'public')))

app.use(
    routes
)

// configurando porta
app.listen(
    3000, () => 
    {console.log("Servidor executando na porta 3000");
     console.log("Acesse  http://localhost:3000");
}
);