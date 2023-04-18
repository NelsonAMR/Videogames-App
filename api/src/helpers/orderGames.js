const orderGames = (data, order) => {
  let results = [];

  switch (order) {
    case "a-z": {
      results = data.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        else return 0;
      });

      break;
    }

    case "z-a": {
      results = data.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        else return 0;
      });

      break;
    }

    default: {
      results = data;
      break;
    }
  }

  return results;
};

module.exports = orderGames;
