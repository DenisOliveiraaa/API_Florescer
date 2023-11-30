const mongoose = require("mongoose");

const { Schema } = mongoose;

const profissionalSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    dataNascimento: {
        type: Number,
        required: true,
    },
    cpf: {
        type: Number,
        required: true,
    },
    formacaoAcademica: {
        type: String,
        required: true,
    },
    especializacao: {
        type: String,
        required: true,
    },
    crp: {
        type: String,
        required: true,
    },
    rua: {
        type: String,
        required: true,
    },
    numeroCasa: {
        type: Number,
        required: true,
    },
    bairro: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    cep: {
        type: Number,
        required: true,
    }
},
{ timestamps: true } //Salva a data de Criação e Atualização
);

const Profissional = mongoose.model("Profissional", profissionalSchema);

module.exports = {
    Profissional,
    profissionalSchema,
};