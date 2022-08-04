import Context from '../context/context';
import { GameMode } from '../types';

const gameMode = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <>
          <label htmlFor='gameMode'>Choose game mode</label>
          <select
            id='gameMode'
            onChange={(e) => {
              context.selectGameMode(e.target.value as GameMode);
            }}
            value={context.gameMode}
          >
            <option value={GameMode.Classic}>Uno Classic</option>
            <option value={GameMode.Flip}>Uno Flip</option>
          </select>
        </>
      )}
    </Context.Consumer>
  );
};

export default gameMode;
