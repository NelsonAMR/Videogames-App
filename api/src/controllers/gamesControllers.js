require("dotenv");
const { Op } = require("sequelize");
const { Videogame, Genre, Platform } = require("../db");
const { apiGetGames } = require("../helpers");

const { URL, KEY } = process.env;

const getGames = async (req, res) => {
  try {
    const { name } = req.query;
    const whereCondition = name ? { name: { [Op.iLike]: `%${name}%` } } : {};

    const resultAPI = await apiGetGames(name);
    const videogames = await Videogame.findAll({
      where: whereCondition,
      include: [
        {
          model: Genre,
          attributes: ["name"],
        },
        {
          model: Platform,
          attributes: ["name"],
        },
      ],
    });

    const resultDB = videogames.map((videogame) => ({
      id: videogame.id,
      name: videogame.name,
      description: videogame.description,
      released: videogame.released,
      rating: videogame.rating,
      image: videogame.image,
      genres: videogame.genres.map((genre) => genre.name),
      platforms: videogame.platforms.map((platform) => platform.name),
    }));

    const result = [...resultDB, ...resultAPI];

    if (!result) {
      throw Error("No se encontraron juegos");
    }

    return res.status(200).json(result);
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
      const result = await Videogame.findByPk(id, {
        include: [
          {
            model: Genre,
            attributes: ["name"],
          },
          {
            model: Platform,
            attributes: ["name"],
          },
        ],
      });

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

    const platformIds = platforms.map((platform) => platform.id);
    const genreIds = genres.map((genre) => genre.id);

    await newGame.addGenre(genreIds);
    await newGame.addPlatform(platformIds);

    res.status(200).send({ msg: "created" });
  } catch (error) {
    res.status(500);
    res.send({ error: error.message });
  }
};

module.exports = {
  getGames,
  getGameById,
  postGame,
};
