'use strict'

const Aluno = require('../models/anoLectivo.model');

// List Student
exports.getAllStudents = async () => {
    const result = await Aluno.find();

    if (!result) {
        throw new Error("Não foi encontrado nenhum aluno!");
    }

    return result;
}

// Delete One
exports.deleteOneStudent = async (id) => {
    const result = await Aluno.deleteOne({ _id: id });

    if (!result) {
        throw new Error("Não foi possível eliminar um aluno com este ID!");
    }

    return result;
}

// Search for a Student
exports.findOneStudent = async (id) => {
    const result = await Aluno.findById(id)

    if (!result) {
        throw new Error("Não foi encontrado nenhum aluno com este ID!");
    }

    return result;
}

// Create a student
exports.createOneStudent = async (data) => {
    const aluno = await new Aluno(data);

    if (!aluno) {
        throw new Error("Não foi possível registrar um aluno!");
    }

    return aluno.save();
}

// Update a Student
exports.updateOneStudent = async (id, data) => {
    const result = await Aluno.findByIdAndUpdate(id, data);

    if (!result) {
        throw new Error("Não foi possivel atualizar dados de um aluno!");
    }

    return result;
}