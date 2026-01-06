'use strict'

const mongoose = require('mongoose');

const AnoLectivoSchema = new mongoose.Schema({
    name: String,
    initDate: Date,
    closeDate: Date
});

module.exports = mongoose.models.AnoLectivoSchema || mongoose.model('AnoLectivo', AnoLectivoSchema);