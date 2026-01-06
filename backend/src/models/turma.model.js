'use strict'

const mongoose = require('mongoose');

const TurmaSchema = new mongoose.Schema({
    name: String,
    desctription: String,
    anoLectivo: String,
    alunos: [
        { alunos_Id: String }
    ]
})

module.exports = mongoose.models.TurmaSchema || mongoose.model('Turma', TurmaSchema);