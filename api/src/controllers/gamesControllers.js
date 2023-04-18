require("dotenv");
const { Op } = require("sequelize");
const { Videogame, Genre } = require("../db");
const { apiGetGames, orderGames } = require("../helpers");

const { URL, KEY } = process.env;

const getGames = async (req, res) => {
  try {
    const { page = 1, size = 15, name, order } = req.query;

    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;

    const resultAPI = await apiGetGames(name);
    const resultDB = await Videogame.findAll();

    const result = [...resultDB, ...resultAPI];

    if (!result) {
      throw Error("No se encontraron juegos");
    }

    if (!order) {
      const pageResult = result.slice(startIndex, endIndex);
      return res.status(200).json(pageResult);
    }

    const games = orderGames(result, order);
    const pageResult = games.slice(startIndex, endIndex);

    return res.status(200).json(pageResult);
  } catch (error) {
    res.status(400);
    res.send({ error: error.message });
  }
};

const getGameById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isNaN(Number(id))) {
      const response = await fetch(`${URL}/games/${id}?key=${KEY}`);
      const data = await response.json();

      if (!data) {
        throw Error("No se encontraron juegos");
      }

      const videogame = {
        name: data.name,
        description: data.description.replace(/<[^>]*>?/gm, ""),
        platforms: data.platforms.map((e) => e.platform.name),
        genres: data.genres.map((e) => e.name),
        image: data.background_image,
        rating: data.metacritic,
        released: data.released,
      };

      res.status(200).json(videogame);
    } else {
      const result = await Videogame.findByPk(id, { include: Genre });

      if (!result) {
        throw Error("No se encontraron juegos");
      }

      const videogame = {
        name: result.name,
        description: result.description,
        platforms: result.platforms.map((platform) => platform.name),
        genres: result.genres.map((genre) => genre.name),
        image: result.image,
        rating: result.rating,
        released: result.released,
      };

      res.status(200).json(videogame);
    }
  } catch (error) {
    res.status(400);
    res.send({ error: error.message });
  }
};

const getGamesByName = async (req, res) => {
  try {
    const { page = 1, size = 15, name } = req.query;

    const resultAPI = await apiGetGames(name);
    const resultDB = await Videogame.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });

    const result = [...resultDB, ...resultAPI];

    if (!result) {
      throw Error("No se encontraron juegos");
    }

    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;

    const pageResult = result.slice(startIndex, endIndex);

    res.status(200).json(pageResult);
  } catch (error) {
    res.status(400);
    res.send({ error: error.message });
  }
};

const postGame = async (req, res) => {
  try {
    const { name, description, platforms, image, rating, released, genres } =
      req.body;

    if ((!name, !platforms, !rating, !released, !description)) {
      throw Error("Faltan datos");
    }

    const newGame = await Videogame.create({
      name,
      description,
      platforms,
      image,
      rating,
      released,
    });

    // const genres1 = [1, 2];

    await newGame.addGenre(genres);

    res.status(200).send({ msg: "created" });
  } catch (error) {
    res.status(500);
    res.send({ error: error.message });
  }
};

module.exports = {
  getGames,
  getGameById,
  getGamesByName,
  postGame,
};
