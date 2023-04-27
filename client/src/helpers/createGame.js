const url = "http://localhost:3001/games";

async function createGame(data) {
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(resp);
  } catch (error) {
    console.error(error.message);
  }
}

export default createGame;
