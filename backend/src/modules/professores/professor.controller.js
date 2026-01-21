'use strict'

const ProfessorService = require('../../services/professor.service');

// 
exports.getAll = async (req, reply) => {
    try {
        const result = await ProfessorService.getAllProfessores()
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ error: error.message })
    }
}
 
// 
exports.deleteOne = async (req, reply) => {
    try {
        const id = req.params.id;
        const result = await ProfessorService.deleteOneProfessor(id);
        return reply.code(200).send({ message: 'Professor eliminado com sucesso!', result });
    } catch (error) {
        return reply.code(400).send({ message: "Não foi possivel eliminar professor!", error: error })
    }
}

// 
exports.create = async (req, reply) => {
    try {
        const result = await ProfessorService.createOneProfessor(req.body);
        return reply.code(200).send(result)
    } catch (error) {
        return reply.code(400).send({ message: "Não foi possivel criar este registo!", error: error })
    }
}

// 
exports.findOne = async (req, reply) => {
    try {
        const id = req.params.id;
        const result = await ProfessorService.findOneProfessor(id);
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ message: "Não foi um registo com este ID!", error: error })
    }
}

exports.updateOneProfessor = async (req, reply) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await ProfessorService.updateOneProfessor(id, data);
        console.log(result);

        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ messge: "Não foi possível atualizar dados do professor" });
    }
}