require("dotenv");
const { URL, KEY } = process.env;
const sets = "&page_size=40&metacritic=70,100";

const apiGetGames = async (name = null) => {
  const numPages = 1;
  const pages = Array.from({ length: numPages }, (_, i) => i + 1);

  if (!name) {
    const promises = pages?.map((page) =>
      fetch(`${URL}/games?key=${KEY}${sets}&page=${page}`)
        .then((response) => response.json())
        .then(({ results }) =>
          results.map((game) => ({
            id: game.id,
            name: game.name,
            image: game.background_image,
            genres: game.genres?.map((genre) => genre.name),
            rating: game.metacritic,
          }))
        )
    );

    const result = await Promise.all(promises);
    return result.flat();
  } else {
    const promises = pages.slice(0, 3)?.map((page) =>
      fetch(`${URL}/games?key=${KEY}${sets}&page=${page}&search=${name}`)
        .then((response) => response.json())
        .then(({ results }) =>
          results.map((game) => ({
            id: game.id,
            name: game.name,
            image: game.background_image,
            genres: game.genres?.map((genre) => genre.name),
            rating: game.metacritic,
          }))
        )
        .catch((error) => console.error(error))
    );

    const result = await Promise.all(promises);
    return result.flat();
  }
};

module.exports = apiGetGames;
