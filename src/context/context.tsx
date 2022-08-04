import React from 'react';
import { GameMode, Player } from '../types';

export interface GameState {
  gameMode: GameMode;
  maxScore: number;
  playersCount: number;
  players: Player[];
  selectGameMode: (gameMode: GameMode) => void;
  setMaxScore: (maxScore: number) => void;
  setPlayersCount: (playersCount: number) => void;
  setPlayerName: (index: number, playerName: string) => void;
}

export const initialState = {
  gameMode: GameMode.Classic,
  maxScore: 500,
  playersCount: 2,
  players: [{index: 1, name: '', score: 0}, {index: 2, name: '', score: 0}],
  selectGameMode: (gameMode: GameMode) => {},
  setMaxScore: (maxNumber: number) => {},
  setPlayersCount: (playersCount: number) => {},
  setPlayerName: (index: number, playerName: string) => {},
};

export default React.createContext<GameState>(initialState);
