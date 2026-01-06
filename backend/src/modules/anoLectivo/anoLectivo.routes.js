'use strict'

const AnoLectivoController = require('./anoLectivo.controller');

module.exports = async (fastify) => {
    // 
    fastify.get('/', AnoLectivoController.getAll);
    // 
    fastify.post('/create', AnoLectivoController.create);
    // 
    fastify.get('/searchone/:id', AnoLectivoController.findById);
    // 
    fastify.get('/delete/:id', AnoLectivoController.delete);
    // 
    fastify.put('/update/:id', AnoLectivoController.update);

}