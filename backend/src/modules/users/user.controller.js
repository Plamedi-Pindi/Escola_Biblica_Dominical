
'use strict';

const UserService = require('../../services/user.service'); // Importa os serviços do modulo users

// Função para buscar os usuario na base de dados
exports.getAll = async (req, reply) => {
    const result = await UserService.getAll();
    return result;
};

// Função para criar um usario
exports.create = async (req, reply) => {
    try {
        const user = await UserService.create(req.body);
        return reply.code(201).send(user);
    } catch (error) {
        return reply.code(400).send({ error: error.message })
    }
}

// 
exports.deleteOne = async (req, reply) => {
    try {
        const id = req.params.id;
        const result = await UserService.deleteOne(id);
        return reply.code(200).send({ message: 'Usuário removido com sucesso', result });
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        return reply.code(500).send({ error: 'Erro interno ao deletar usuário.' });
    }
} 