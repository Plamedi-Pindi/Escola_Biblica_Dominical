
'use strict';

const UserService = require('../../services/user.service'); // Importa os serviços do modulo users
const UserUtils = require('../../utils/criptografia/agron2');

// Função para buscar os usuario na base de dados
exports.getAll = async (req, reply) => {
    const result = await UserService.getAll();
    return result;
};

// Função para criar um usario
exports.create = async (req, reply) => {
    try {
        const user = await req.body  // pega os dados do usuario
        const hashed = await UserUtils.passwordHash(user.password);  // Criptografa a senha do usario

        //Cria um objeto de dados do usuario
        const data = {
            name: user.name,
            email: user.email,
            telefone: user.telefone,
            password: hashed
        }

        const result = await UserService.create(data);  // Cria um novo usario
        return reply.code(201).send(result);
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


// 
exports.findOneUser = async (req, reply) => {
    try {
        const id = req.params.id;
        const result = await UserService.getOneUser(id);
        return reply.code(200).send(result);
    } catch (error) {
        console.error("Erro ao pesquisar pelo usário!", error);

        return reply.code(500).send({ erro: "Erro ao pesquisar pelo usário!" });
    }
}

//
exports.updateOneUser = async (req, reply) => {
    try {
        const id = req.params.id;
        const data = req.body
        const result = await UserService.updateOneUser(id, data)
        console.log(result);
        
        return reply.code(200).send(result);
    } catch (error) {
        console.error("Erro ao atualizar o usário!", error);
        return reply.code(500).send({ erro: "Erro ao atualizar o usário!" });
    }
}