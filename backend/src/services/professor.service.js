
'use strict'

const Professor = require('../models/professor.model');

// 
exports.getAllProfessores = async () => {
    const result = await Professor.find();

    if (!result) {
        throw new Error("Nenhum professor foi encontrado!")
    }

    return result;
}

// 
exports.createOneProfessor = async (data) => {
    const professor = await new Professor(data);
    return professor.save();
}

// 
exports.findOneProfessor = async (id) => {
    const result = await Professor.findById(id);

    if (!result) {
        throw new Error("Não foi achado professor com este ID!");
    }

    return result;
}

// 
exports.deleteOneProfessor = async (id) => {
    const result = await Professor.deleteOne({ _id: id });

    if (!result) {
        throw new Error("Não foi possível remover professor com este ID!");
    }

    return result;
}

exports.updateOneProfessor = async (id, data) => {
    const result = await Professor.findByIdAndUpdate(id, data);

    if (!result) {
        throw new Error('Usuário não encontrado ou já removido.');
    }
}
