const express = require('express')
const route = express.Router()
const homeControler = require('./controllers/homeControllers');
const contatoControler = require('./controllers/contatoControllers');


// para o parametro ser opcional basta adicionar o ?
// parâmetros de url: teste/luizmiranda/ - mais comum, na rota da URL
// query string params:  testes/?nome=Luiz&sobrenome=Miranda&idade=30 - comum em coisas mais simples como marketing
// vemos mais para coisas simples, é mais comum ver parâmetro de url mesmo
// req.params, req.query e req.body

// Rotas da home
route.get('/', homeControler.paginaInicial);

route.post('/', homeControler.sentForm);

route.get('/contato', contatoControler.paginaInicial);

route.get('/testes/:iduser?/', (request, response) => {
    test = request.params.iduser + request.query.nome
    response.send(typeof(request.params.iduser))
});

module.exports = route