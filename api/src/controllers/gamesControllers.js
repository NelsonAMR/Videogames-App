require("dotenv");
const { Op } = require("sequelize");
const { Videogame, Genre } = require("../db");

const { URL, KEY } = process.env;

const getGames = async (req, res) => {
  try {
    const result = await Videogame.findAll();

    if (!result) {
      throw Error("No se encontraron juegos");
    }

    res.status(200).json(result);
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
        description: data.description,
        platforms: data.platforms.map((e) => e.platform.name),
        genres: data.genres.map((e) => e.name),
        image: data.image,
        rating: data.rating,
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
        platforms: result.platforms,
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
    const { name } = req.query;

    const response = await fetch(`${URL}/games?search=${name}&key=${KEY}`);
    const { results } = await response.json();

    const resultAPI = results.map((game) => ({
      name: game.name,
      description: game.description,
      platforms: game.platforms?.map((e) => e.platform.name),
      image: game.background_image,
      rating: game.rating,
      released: game.released,
      genres: game.genres?.map((e) => e.name),
    }));

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

    res.status(200).json(result);
  } catch (error) {
    res.status(400);
    res.send({ error: error.message });
  }
};

const postGame = async (req, res) => {
  try {
    const { name, description, platforms, image, rating, released } = req.body;

    if ((!name, !platforms, !rating, !released, !description)) {
      throw Error("Faltan datos");
    }

    await Videogame.create({
      name,
      description,
      platforms,
      image,
      rating,
      released,
    });

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
