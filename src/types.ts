export enum GameMode {
  Classic = 'UNO_CLASSIC',
  Flip = 'UNO_FLIP',
}

export interface Player {
  index: number;
  name: string;
  score: number;
}
