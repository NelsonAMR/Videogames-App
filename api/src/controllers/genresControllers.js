const { Genre } = require("../db");
require("dotenv");

const { URL, KEY } = process.env;

const getGenres = async (req, res) => {
  try {
    let genres = await Genre.findAll();

    if (!genres) {
      const response = await fetch(`${URL}/genres?key=${KEY}`);
      const { results } = await response.json();

      genres = await Promise.all(
        results.map(({ name }) => Genre.findOrCreate({ where: { name } }))
      );
    }

    res.status(200).json(genres);

    // await Promise.all(genres.map((genre) => Genre.create(genre)));
    // await Genre.bulkCreate(genres);
  } catch (error) {
    res.status(500);
    res.send({ error: error.message });
  }
};

module.exports = { getGenres };
