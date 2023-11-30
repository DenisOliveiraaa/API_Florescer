const router = require("express").Router();

const profissionalController = require("../controllers/profissionalController");

//POST
router
    .route("/profissionais")
    .post((req, res) => profissionalController.create(req, res));
//GET ALL
router
    .route("/profissionais")
    .get((req, res) => profissionalController.getAll(req, res));
//GET BY ID
router 
    .route("/profissionais/:id")
    .get((req, res) => profissionalController.get(req, res));
//DELETE
router 
    .route("/profissionais/:id")
    .delete((req, res) => profissionalController.delete(req, res));
//UPDATE
router 
    .route("/profissionais/:id")
    .put((req, res) => profissionalController.update(req, res));
    
module.exports = router;