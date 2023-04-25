const url = "http://localhost:3001/games";

async function createGame(data) {
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error.message);
  }
}

export default createGame;
