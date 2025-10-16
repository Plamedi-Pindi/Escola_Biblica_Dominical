/** 
 * Serviços para o modulo usuário
 * Conjunto de métodos que acessão o modelo usario
 * 
 * */

'use strict'

const User = require('../models/user.model');  // Importa o modelo do usario

// Métodos para obter todos os usarios 
exports.getAll = async () => {
    return await User.find();
}

// Método para criar novos usarios
exports.create = async (data) => {
    const user = new User(data)
    return user.save();
}

// Método para eliminar um usuário
exports.deleteOne = async (id) => {
    const result = await User.deleteOne({ _id: id });

    if (!result || result.deletedCount === 0) {
        throw new Error('Usuário não encontrado ou já removido.');
    }

    return result;
}