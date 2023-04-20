const { Platform } = require("../db");
require("dotenv");

const { URL, KEY } = process.env;

const getPlatforms = async (req, res) => {
  try {
    let platforms = await Platform.findAll();

    if (!platforms) {
      const response = await fetch(`${URL}/platforms?key=${KEY}`);
      const { results } = await response.json();

      platforms = await Promise.all(
        results.map(({ name }) => Platform.findOrCreate({ where: { name } }))
      );
    }

    res.status(200).json(platforms);

    // await Promise.all(genres.map((genre) => Genre.create(genre)));
    // await Genre.bulkCreate(genres);
  } catch (error) {
    res.status(500);
    res.send({ error: error.message });
  }
};

module.exports = { getPlatforms };
