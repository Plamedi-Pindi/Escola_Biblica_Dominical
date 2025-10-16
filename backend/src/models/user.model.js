/*
    Modelo da collection usuário, 
    pertenente ou módulo users
*/

'use strict'

const mongoose = require('mongoose');   // Import o mongoose ORM

// Cria um esquema tipado para o usuário
const UserSchema = new mongoose.Schema({
    name: { first: String, last: String },
    email: String,
    telefone: {primary: String, secound: String},
    password: String
});

// Eporta o modulo
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);