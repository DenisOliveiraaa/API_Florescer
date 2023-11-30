const { Paciente: PacientelModel } = require("../models/Paciente");

const pacienteController = {
    //POST
    create: async (req, res) => {
        try {
            const paciente = {
                nome: req.body.nome,
                dataNascimento: req.body.dataNascimento,
                cpf: req.body.cpf,
                responsavel: req.body.responsavel,
                rua: req.body.rua,
                numeroCasa: req.body.numeroCasa,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                cep: req.body.cep
            };

            const response = await PacientelModel.create(paciente);

            res.status(201).json({ response, msg: "Paciente adicionado com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },
      //GET ALL
      getAll: async (req, res) => {
        try {
            const pacientes = await PacientelModel.find();

            res.json(pacientes);
        } catch (error) {
            console.log(error);
        }
    },
    //GET BY ID
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const pacientes = await PacientelModel.findById(id);

            if(!pacientes) {
                res.status(404).json({ msg: "Paciente não encontrado!"});
                return;
            }

            res.json(pacientes);
        } catch (error) {
            console.log(error);
        }
    },
    //DELETE
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const pacientes = await PacientelModel.findById(id);

            if(!pacientes) {
                res.status(404).json({ msg: "Paciente não encontrado!"});
                return;
            }

            const deletePaciente = await PacientelModel.findByIdAndDelete(id);

            res
                .status(200)
                .json({ deletePaciente, msg: "Paciente deletado"})
        } catch (error) {
            console.log(error);
        }
    },
       //UPDATE
       update: async (req, res) => {
        const id = req.params.id;

        const paciente = {
            nome: req.body.nome,
            dataNascimento: req.body.dataNascimento,
            cpf: req.body.cpf,
            responsavel: req.body.responsavel,
            rua: req.body.rua,
            numeroCasa: req.body.numeroCasa,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            cep: req.body.cep
        };

        const updatePaciente = await PacientelModel.findByIdAndUpdate(id, paciente);

        if(!updatePaciente) {
            res.status(404).json({ msg: "Paciente não encontrado!"});
            return;
        }

        res
            .status(200)
            .json({ paciente, msg: "Paciente atualizado"});
    },
};

module.exports = pacienteController;