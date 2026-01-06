'use strict'

const AnoLectivo = require('../models/anoLectivo.model');

// Get all years
exports.getAllYears = async () => {
    const result = await AnoLectivo.find();

    if (!result) {
        throw new Error("Erro ao buscar os anos lectivos");
    }

    return result;
}

// Create year
exports.createYears = async (data) => {
    const result = await new AnoLectivo(data)
    return result.save()
}

// Delete year
exports.deleteYear = async (id) => {
    const result = await AnoLectivo.findByIdAndDelete(id);

    if (!result) {
        throw new Error("Erro ao eliminar um ano lectivo");
    }

    return result
}

// Search a year
exports.findYearById = async (id) => {
    const result = await AnoLectivo.findById(id);

    if (!result) {
        throw new Error("Erro ao buscar um ano lectivo");
    }
    return result
}

// update a year
exports.updateYear = async (id, data) => {
    const result = await AnoLectivo.findByIdAndUpdate(id, data);

    if (!result) {
        throw new Error("Erro ao atualizar um ano lectivo");
    }
    return result
}