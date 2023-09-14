export type Game = {
  id: number;
  title: string;
  platform: string;
}

export type GameInf = Omit<Game, "id">