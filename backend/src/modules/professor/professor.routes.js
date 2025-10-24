
'use strinct'

const ProfessorController = require('./professor.controller') 

module.exports = async (fastify) => {
    // 
    fastify.get('/', ProfessorController.create);
    // 
    fastify.post('/create', ProfessorController.create);
    // 
    fastify.get('/find/:id', ProfessorController.findOne);
    // 
    fastify.delete('/remove/:id', ProfessorController.deleteOne);
}