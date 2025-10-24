'use strict';

const UserController = require('./user.controller'); // Importar o controlador lógico do módulo usario

// Rotas para o módulo users
module.exports = async (fastify) => {
    // rota buscar os users
    fastify.get('/', UserController.getAll);
    // rota para criar novo user
    fastify.post('/new', UserController.create);
    // rota para deletar um user
    fastify.delete('/remover/:id', UserController.deleteOne);
    // rota para encontrar um usuario
    fastify.get('/pesquisar/:id', UserController.findOneUser );
    // 
    fastify.put('/atualizar/:id', UserController.updateOneUser);
}