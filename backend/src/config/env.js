'use strict'

const envSchema = require('env-schema');
const path = require("path")

const NODE_ENV = process.env.NODE_ENV || 'development';

const schema = {
    type: 'object',
    required: ['DATABASE', 'FRONT_HOST'],
    properties: {
        DATABASE: { type: 'string' },
        FRONT_HOST: { type: 'string' },
        PROD_DB: { type: 'string' },
    }
};

module.exports = envSchema({
    schema,
    dotenv: {
        path: path.resolve(process.cwd(), `.env.${NODE_ENV}`)
    }
});