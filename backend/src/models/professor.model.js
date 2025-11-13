'use strict'

const mongoose = require('mongoose')

const ProfessorSchema = new mongoose.Schema({
    name: {first: String, last: String},
    nascimento:  Date,
    telephone: {primary: String, secound: String},
    email: String,
    nationality: String,
    status: String,
    startDate: Date,
    address: String,
    gender: String,
    biography: String
}) 


module.exports = mongoose.models.Pofessor || mongoose.model('Professor', ProfessorSchema)