'use strict';

const fastifyPlugin = require('fastify-plugin'); // Torna um plugin acessavel globalmente
const mongoose = require('mongoose');            // Importando a ORM Mongoose para Conectar a BD

// Um plugin para conexão como a base de dados
const dbConnector = async (fastify, opts) => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ebd_app');  // Conecta ao BD

        console.log('📦 MongoDB conectado com sucesso!');            // Mensagem de conexão positiva
    } catch (error) {
        console.error('❌ Erro ao conectar ao MongoDB:', error);     // Mensagem de erro na conexão
    }
}

module.exports = fastifyPlugin(dbConnector);      // Exportar o modulo