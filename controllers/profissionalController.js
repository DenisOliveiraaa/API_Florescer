const { Profissional: ProfissionalModel } = require("../models/Profissional");

const profissionalController = {
    //POST
    create: async (req, res) => {
        try {
            const profissional = {
                nome: req.body.nome,
                dataNascimento: req.body.dataNascimento,
                cpf: req.body.cpf,
                formacaoAcademica: req.body.formacaoAcademica,
                especializacao: req.body.especializacao,
                crp: req.body.crp,
                rua: req.body.rua,
                numeroCasa: req.body.numeroCasa,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                cep: req.body.cep
            };

            const response = await ProfissionalModel.create(profissional);

            res.status(201).json({ response, msg: "Profissional adicionado com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },
    //GET ALL
    getAll: async (req, res) => {
        try {
            const profissionais = await ProfissionalModel.find();

            res.json(profissionais);
        } catch (error) {
            console.log(error);
        }
    },
    //GET BY ID
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const profissionais = await ProfissionalModel.findById(id);

            if(!profissionais) {
                res.status(404).json({ msg: "Profissional não encontrado!"});
                return;
            }

            res.json(profissionais);
        } catch (error) {
            console.log(error);
        }
    },
    //DELETE
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const profissionais = await ProfissionalModel.findById(id);

            if(!profissionais) {
                res.status(404).json({ msg: "Profissional não encontrado!"});
                return;
            }

            const deleteProfissional = await ProfissionalModel.findByIdAndDelete(id);

            res
                .status(200)
                .json({ deleteProfissional, msg: "Profissional deletado"})
        } catch (error) {
            console.log(error);
        }
    },
    //UPDATE
    update: async (req, res) => {
        const id = req.params.id;

        const profissional = {
            nome: req.body.nome,
            dataNascimento: req.body.dataNascimento,
            cpf: req.body.cpf,
            formacaoAcademica: req.body.formacaoAcademica,
            especializacao: req.body.especializacao,
            crp: req.body.crp,
            rua: req.body.rua,
            numeroCasa: req.body.numeroCasa,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            cep: req.body.cep
        };

        const updateProfissional = await ProfissionalModel.findByIdAndUpdate(id, profissional);

        if(!updateProfissional) {
            res.status(404).json({ msg: "Profissional não encontrado!"});
            return;
        }

        res
            .status(200)
            .json({ profissional, msg: "Profissional atualizado"});
    },
};

module.exports = profissionalController;