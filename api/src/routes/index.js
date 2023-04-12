const { Router } = require("express");
const routerGames = require("./gamesRoutes");
const routerGenres = require("./genresRoutes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/games", routerGames);
router.use("/genres", routerGenres);
// router.use("/genres", routerGenres);

module.exports = router;
