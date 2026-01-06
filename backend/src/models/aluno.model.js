'use strict'

const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    name: { first: String, last: String },
    image: String,
    birthday: Date,
    telephone: { primary: String, seound: String },
    nacionality: String,
    address: String,
    status: String,
    startDate: Date,
    LeftDate: Date,
    father: { name: String, phone: String },
    mother: { name: String, phone: String },
})

module.exports = mongoose.models.Aluno || mongoose.model('Aluno', AlunoSchema);