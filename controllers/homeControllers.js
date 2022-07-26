exports.paginaInicial = (request, response) => {
    response.send(`
    <form action='/' method='POST'>
    Nome: <input type='text' name='nome'>
    Idade: <input type='text' name='idade'>
    <button>Enviar</button>
    `)
};

exports.sentForm = (request, response) => {
    response.send(`Você me enviou ${request.body.nome} e ${request.body.idade}`)
};