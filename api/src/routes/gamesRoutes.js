const { Router } = require("express");
const {
  getGames,
  postGame,
  getGameById,
  getGamesByName,
} = require("../controllers/gamesControllers");

const routerGames = Router();

routerGames.get("/", getGames);
routerGames.get("/search", getGamesByName);
routerGames.get("/:id", getGameById);
routerGames.post("/", postGame);

module.exports = routerGames;
