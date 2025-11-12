

export type PorfessorDataType = {
    _id: String
    name: { first: String, last: String },
    nascimento: Date,
    telephone: { primary: String, secound: String },
    email: String,
    nationality: String,
    status: String,
    startDate: Date,
    address: String
}