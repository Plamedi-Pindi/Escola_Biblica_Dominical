

export type PorfessorDataType = {
    _id: String,
    image: String,
    name: { first: String, last: String },
    birthday: String,
    telephone: { primary: String, secound: String },
    email: String,
    nationality: String,
    status: String,
    startDate: String,
    address: String,
    gender: String
}

export type FormDataType = {
    name: { first: string, last: string },
    birthday: string,
    email: string,
    telephone: { primary: string, secound: string },
    nationality: string,
    startDate: string,
    address: string
    gender: string,
    status: string
}