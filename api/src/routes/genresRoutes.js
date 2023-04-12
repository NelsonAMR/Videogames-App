const { Router } = require("express");
const { getGenres } = require("../controllers/genresControllers");

const routerGenres = Router();

routerGenres.get("/", getGenres);

module.exports = routerGenres;
