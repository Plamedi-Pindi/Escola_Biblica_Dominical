'use strict'

const TurmaService = require('../../services/turma.service');

// Get all
exports.getAll = async (req, reply) => {
    try {
        const result = await TurmaService.getAllTurma()
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ message: "erro ao buscar as turmas", error: error })
    }
}

// create 
exports.create = async (req, reply) => {
    try {
        const data = req.body;
        const result = await TurmaService.createTurma(data)
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ message: "erro ao criar turma", error: error })
    }
}

// update
exports.update = async (req, reply) => {
    try {
        const id = req.params.id
        const data = req.body;
        const result = await TurmaService.updateTurma(id, data)
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ message: "erro ao autalizar uma turma", error: error })
    }
}

// search
exports.findById = async (req, reply) => {
    try {
        const id = req.params.id
        const result = await TurmaService.searchTurmaById(id)
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ message: "erro ao pesquisar uma turma por id", error: error })
    }
}

// search
exports.delete = async (req, reply) => {
    try {
        const id = req.params.id
        const result = await TurmaService.deleteTurma(id)
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ message: "erro ao eliminar uma turma", error: error })
    }
}

