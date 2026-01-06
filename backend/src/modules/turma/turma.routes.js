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
    fastify.put('/search/:id', TurmaController.update)
    // 
    fastify.put('/delete/:id', TurmaController.update)
}