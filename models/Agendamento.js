const mongoose = require("mongoose");

const { Schema } = mongoose;

const agendamentoSchema = new Schema({
    //campos do banco
},
{ timestamps: true } //Salva a data de Criação e Atualização
);

const Agendamento = mongoose.model("Agendamento", agendamentoSchema);

module.exports = {
    Agendamento,
    agendamentoSchema,
}