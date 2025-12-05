'use strict'

const mongoose = require('mongoose') 

const ProfessorSchema = new mongoose.Schema({
    name: {first: String, last: String},
    image: String,
    birthday:  Date,
    telephone: {primary: String, secound: String},
    email: String,
    nationality: String,
    status: String,
    startDate: Date,
    lefttDate: Date,
    address: String,
    gender: String,
    biography: String
}) 


module.exports = mongoose.models.Pofessor || mongoose.model('Professor', ProfessorSchema)