import { GameMode } from '../types';

export const SELECT_GAMEMODE = 'SELECT_GAMEMODE';
export const SET_MAX_SCORE = 'SET_MAX_SCORE';
export const SET_PLAYERS_COUNT = 'SET_PLAYERS_COUNT';
export const SET_PLAYER_NAMES = 'SET_PLAYER_NAMES';

export type Action =
  | { type: 'SELECT_GAMEMODE'; payload: GameMode }
  | { type: 'SET_MAX_SCORE'; payload: number }
  | { type: 'SET_PLAYERS_COUNT'; payload: number }
  | { type: 'SET_PLAYER_NAMES'; index: number, payload: string};
