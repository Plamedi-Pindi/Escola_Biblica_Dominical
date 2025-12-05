

export type PorfessorDataType = {
    _id: String,
    image: string,
    name: { first: String, last: String },
    birthday: Date,
    telephone: { primary: String, secound: String },
    email: String,
    nationality: String,
    status: String,
    startDate: Date,
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