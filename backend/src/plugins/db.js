'use strict';

const fastifyPlugin = require('fastify-plugin'); // Torna um plugin acessavel globalmente
const mongoose = require('mongoose');            // Importando a ORM Mongoose para Conectar a BD
const env = require("../config/env");

// Um plugin para conexão como a base de dados
const dbConnector = async (fastify, opts) => {

    try {
        // await mongoose.connect(PROD_DB);  // Conecta ao Atla BD
        await mongoose.connect(env.DATABASE);  // Conecta ao BD

        console.log('📦 MongoDB conectado com sucesso!');            // Mensagem de conexão positiva
    } catch (error) {
        console.error('❌ Erro ao conectar ao MongoDB:', error);     // Mensagem de erro na conexão
    }
}

module.exports = fastifyPlugin(dbConnector);      // Exportar o modulo