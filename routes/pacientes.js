const router = require("express").Router();

const pacienteController = require("../controllers/pacienteController");

//POST
router
    .route("/pacientes")
    .post((req, res) => pacienteController.create(req, res));
//GET ALL
router
    .route("/pacientes")
    .get((req, res) => pacienteController.getAll(req, res));
//GET BY ID
router 
    .route("/pacientes/:id")
    .get((req, res) => pacienteController.get(req, res));
//DELETE
router 
    .route("/pacientes/:id")
    .delete((req, res) => pacienteController.delete(req, res));
//UPDATE
router 
    .route("/pacientes/:id")
    .put((req, res) => pacienteController.update(req, res));

module.exports = router;