exports.paginaInicial = (request, response) => {
    response.render('index.ejs')
};

exports.sentForm = (request, response) => {
    response.send(`Você me enviou ${request.body.nome} e ${request.body.idade}`)
};