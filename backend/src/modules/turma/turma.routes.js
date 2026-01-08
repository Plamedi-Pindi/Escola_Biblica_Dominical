'use strict'

const TurmaController = require('./turma.controller');

module.exports = async (fastify) => {
    // 
    fastify.get('/', TurmaController.getAll)
    // 
    fastify.post('/create', TurmaController.create)
    // 
    fastify.put('/update/:id', TurmaController.update)
    // 
    fastify.get('/search/:id', TurmaController.update)
    // 
    fastify.get('/delete/:id', TurmaController.update)
}