import { Player } from '../types';
import {
  Action,
  SELECT_GAMEMODE,
  SET_MAX_SCORE,
  SET_PLAYERS_COUNT,
  SET_PLAYER_NAMES,
} from './actions';
import { GameState } from './context';

export const gameReducer = (state: GameState, action: Action) => {
  switch (action.type) {
    case SELECT_GAMEMODE:
      return { ...state, gameMode: action.payload };

    case SET_MAX_SCORE:
      if (action.payload > 0 && action.payload <= 1000) {
        return { ...state, maxScore: action.payload };
      }
      return { ...state, maxScore: 500 };

    case SET_PLAYERS_COUNT:
      if (action.payload >= 2 && action.payload <= 10) {
        const newPlayers: Player[] = [];
        for (let i = 0; i < action.payload; i++) {
          newPlayers.push({ index: i + 1, name: '', score: 0 });
        }

        return { ...state, playersCount: action.payload, players: newPlayers };
      }

      return { ...state, playersCount: 2 };

    case SET_PLAYER_NAMES:
      const updatedPlayers = state.players.map((player, i) => {
        if (i === action.index) {
          player.name = action.payload;
          return player;
        } else {
          return player;
        }
      });
      return { ...state, players: updatedPlayers };

    default:
      return state;
  }
};
