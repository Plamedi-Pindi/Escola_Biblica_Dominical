'use strict'

const AnoLectivoSevices = require('../../services/anoLectivo.service');

// Get all years
exports.getAll = async (req, reply) => {
    try {
        const result = await AnoLectivoSevices.getAllYears();
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ error: error.message })
    }
}

// create year
exports.create = async (req, reply) => {
    try {
        const data = req.body;
        const result = await AnoLectivoSevices.createYears(data);
        // const result = data
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ message: "erro ao criar um ano", error: error })
    }
}

// delete a year
exports.delete = async (req, reply) => {
    try {
        const id = req.params.id
        const result = await AnoLectivoSevices.deleteYear(id);
        return reply.code(200).send(result);
    } catch (error) {
        return reply.code(400).send({ message: "erro ao eliminar um ano", error: error })
    }
}

// Find by id
exports.findById = async (req, reply) => {
    try {
        const id = req.params.id
        const result = await AnoLectivoSevices.findYearById(id);
       return result;
    } catch (error) {
        return reply.code(400).send({ message: "erro ao peaquisar um ano", error: error })
    }
}

// update year
exports.update = async (req, reply) => {
    try {
        const id = req.params.id
        const data = req.body;
        const result = await AnoLectivoSevices.updateYear(id, data);
        return reply.code(200).send(data);
    } catch (error) {
        return reply.code(400).send({ message: "erro ao atualizar um ano", error: error })
    }
}