const { Router } = require("express");
const {
  getGames,
  postGame,
  getGameById,
} = require("../controllers/gamesControllers");

const routerGames = Router();

routerGames.get("/", getGames);
routerGames.get("/:id", getGameById);
routerGames.post("/", postGame);

module.exports = routerGames;
