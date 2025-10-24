

export type UserFormType = { 
    name: { first: string, last: string },
    email: string,
    telefone: { primary: string, secound: string },
    password: string
}

export type UserDataType = {
    _id: string,
    name: { first: string, last: string },
    email: string,
    telefone: { primary: string, secound: string },
}