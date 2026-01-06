'use strict'

const AlunoController = require('./aluno.controller');

module.exports = async (fastify) => {
    // 
    fastify.get('/', AlunoController.getAll);
    // 
    fastify.post('/create', AlunoController.create);
    // 
    fastify.get('/searchone/:id', AlunoController.FindById);
    // 
    fastify.get('/delete/:id', AlunoController.delete);
    // 
    fastify.put('/update/:id', AlunoController.update);

}