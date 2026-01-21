'use strict'

const AlunoService = require('../../services/aluno.service');

// List all students
exports.getAll = async (req, reply) => {
    try {
        const result = await AlunoService.getAllStudents();
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ error: error.message })
    }
}

// Create a student
exports.create = async (req, reply) => {
    try {
        const data = req.body;
        const result = await AlunoService.createOneStudent(data);
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ message: "erro ao cadastrar um aluno", error: error })
    }
}

// Find Student by ID
exports.FindById = async (req, reply) => {
    try {
        const id = req.params.id;
        const result = await AlunoService.findOneStudent(id);
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ message: "erro ao pesquisar um aluno", error: error })
    }
}

// Delete a Student
exports.delete = async (req, reply) => {
    try {
        const id = req.params.id;
        const result = await AlunoService.deleteOneStudent(id);
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ message: "erro ao eliminar um aluno", error: error })
    }
}

// update a student
exports.update = async (req, reply) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await AlunoService.updateOneStudent(id, data);
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ message: "erro ao atualizar um aluno", error: error })
    }
}