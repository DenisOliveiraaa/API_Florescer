const router = require("express").Router();

//Profissional router
const profissionalRouter = require("./profissionais");

router.use("/", profissionalRouter);

//Paciente router
const pacienteRouter = require("./pacientes");

router.use("/", pacienteRouter);

module.exports = router;