import gamesRepository from "../repository/games-repository";
import { Game, GameInf } from "./../protocols/game-protocol";

async function getGames() {
  return await gamesRepository.getGames();
}

async function createGame(game: GameInf) {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  if (result) {
    //console.log(gameAlreadyExists(game))
    throw { message: "Game already exists" }
  }

  return await gamesRepository.createGame(game);
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;