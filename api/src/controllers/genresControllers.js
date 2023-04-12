const { Genre } = require("../db");

require("dotenv");

const { URL, KEY } = process.env;

const getGenres = async (req, res) => {
  try {
    const response = await fetch(`${URL}/genres?key=${KEY}`);
    const { results } = await response.json();

    const genres = results.map((genger) => ({ name: genger.name }));

    // await Promise.all(genres.map((genre) => Genre.create(genre)));
    await Genre.bulkCreate(genres);

    res.status(200).send({ msg: "success" });
  } catch (error) {
    res.status(500);
    res.send({ error: error.message });
  }
};

module.exports = { getGenres };
