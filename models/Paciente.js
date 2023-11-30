const mongoose = require("mongoose");

const { Schema } = mongoose;

const pacienteSchema = new Schema({
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
    responsavel: {
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

const Paciente = mongoose.model("Paciente", pacienteSchema);

module.exports = {
    Paciente,
    pacienteSchema,
}