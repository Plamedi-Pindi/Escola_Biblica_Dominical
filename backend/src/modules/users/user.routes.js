'use strict';

const UserController = require('./user.controller'); // Importar o controlador lógico do módulo usario

// Rotas para o módulo users
module.exports = async (fastify) => {
    // rota buscar os users
    fastify.get('/', UserController.getAll);
    // rotas para criar novo user
    fastify.post('/new', UserController.create);
    // rotas para deletar um user
    fastify.delete('/remover/:id', UserController.deleteOne);
}