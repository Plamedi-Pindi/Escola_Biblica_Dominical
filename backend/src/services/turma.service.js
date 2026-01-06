'use strict'

const Turma = require('../models/turma.model');

// Get all
exports.getAllTurma = async () => {
    const result = await Turma.find();

    if (!result) {
        throw new Error("Erro ao buscar todas as turmas!")
    }

    return result
}

// create turma
exports.createTurma = async (data) => {
    const turma = await new Turma(data);

    if (!turma) {
        throw new Error("Erro ao criar uma turma!")
    }

    return turma
}

// update turma
exports.updateTurma = async (id, data) => {
    const result = await Turma.findByIdAndUpdate(id, data);

    if (!result) {
        throw new Error("Erro ao atualizar uma turma!")
    }

    return result
}

// delete turma
exports.deleteTurma = async (id) => {
    const result = await Turma.findByIdAndDelete(id);

    if (!result) {
        throw new Error("Erro ao deletar uma turma!")
    }

    return result
}

// search a turma
exports.searchTurmaById = async (id) => {
    const result = await Turma.findById(id);

    if (!result) {
        throw new Error("Erro ao pesquisar uma turma por id!")
    }

    return result
}