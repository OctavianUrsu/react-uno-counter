import { useReducer } from 'react';

import Context, { initialState } from './context';
import { GameMode } from '../types';
import { gameReducer } from './reducers';
import {
  SELECT_GAMEMODE,
  SET_MAX_SCORE,
  SET_PLAYERS_COUNT,
  SET_PLAYER_NAMES,
} from './actions';

const GlobalState = (props: any) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const selectGameMode = (gameMode: GameMode) => {
    dispatch({ type: SELECT_GAMEMODE, payload: gameMode });
  };

  const setMaxScore = (maxScore: number) => {
    dispatch({ type: SET_MAX_SCORE, payload: maxScore });
  };

  const setPlayersCount = (playersCount: number) => {
    dispatch({ type: SET_PLAYERS_COUNT, payload: playersCount });
  };

  const setPlayerName = (index: number, playerName: string) => {
    dispatch({ type: SET_PLAYER_NAMES, index: index, payload: playerName});
  };

  return (
    <Context.Provider
      value={{
        ...state,
        selectGameMode,
        setMaxScore,
        setPlayersCount,
        setPlayerName,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
