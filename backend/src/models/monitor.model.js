'use strict'

const mongoose = require('mongoose')

const MonitorSchema = new mongoose.Schema({
    name: {first: String, last: String},
    nascimento:  Date,
    telefone: {firstNum: String, secoundNum: String},
    email: String,
}) 