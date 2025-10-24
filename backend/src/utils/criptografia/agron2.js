'use strict'

const { hash, verify, argon2id } = require('@node-rs/argon2')

exports.passwordHash = async (password) => {
    const hashedPW = await hash(password, {
        memoryCost: 19456,  // 19 MiB
        timeCost: 2,        // iterações
        parallelism: 1,     // threads
        type: argon2id,     // modo Argon2id
    })

    return hashedPW;
}

exports.passwordVerification = async (hashed, password) => {
    const isValid = await verify(hashed, password);
    return isValid;
}