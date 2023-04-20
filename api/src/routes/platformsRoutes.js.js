const { Router } = require("express");
const { getPlatforms } = require("../controllers/platformsControllers");

const routerPlatforms = Router();

routerPlatforms.get("/", getPlatforms);

module.exports = routerPlatforms;
