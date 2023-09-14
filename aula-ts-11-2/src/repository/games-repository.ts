import { connection } from "../database/databaseConnection";
import { Game, GameInf } from "../protocols/game-protocol";

const gamess: Game[] = [];

async function getGames() {
  const games = await connection.query(`SELECT * FROM games`)
  return games.rows;
}

async function createGame(game: GameInf) {
  const {title, platform} = game
  return await connection.query(`INSERT INTO games ("title", "platform") VALUES ($1, $2)`, [title, platform])
}

async function getGameByTitleAndPlatform(game: GameInf) {
  const {title, platform} = game
  console.log(game)
  const selectedGame = await connection.query(`SELECT * FROM games WHERE "title" = $1 AND "platform" = $2`, [title, platform])
  console.log(selectedGame.rows[0])
  return selectedGame.rows[0]
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;