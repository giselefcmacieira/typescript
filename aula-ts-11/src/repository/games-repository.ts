import { connection } from "../database/databaseConnection";
import { Game } from "../protocols/game-protocol";

const gamess: Game[] = [];

async function getGames() {
  const games = await connection.query(`SELECT * FROM games`)
  return games;
}
type createGame = Omit<Game, "id">
function createGame(game: Game) {
  
  gamess.push(game);
}

function getGameByTitleAndPlatform(game: Game) {
  return gamess.find(({ title, platform }) => {
    return game.title === title && game.platform === platform;
  })
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;