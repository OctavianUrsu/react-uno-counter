import { useState } from 'react';
import SelectGameMode from './components/GameMode';
import './App.css';
import MaxScore from './components/MaxScore';
import PlayersCount from './components/PlayersCount';
import PlayersNames from './components/PlayersNames';

const MAX_STEPS = 4;

const App = () => {
  const [gameStep, setGameStep] = useState(1);

  const onNextStep = () => {
    if (gameStep < MAX_STEPS) {
      setGameStep((current) => current + 1);
    }
  };

  const onPreviousStep = () => {
    if (gameStep > 1) {
      setGameStep((current) => current - 1);
    }
  };

  const renderSwitch = () => {
    switch (gameStep) {
      case 1:
        return <SelectGameMode />;
      case 2:
        return <MaxScore />;
      case 3:
        return <PlayersCount />;
      case 4:
        return <PlayersNames />;
      default:
        break;
    }
  };

  return (
    <>
      {renderSwitch()}

      <div>
        {gameStep > 1 && (
          <button type='button' onClick={onPreviousStep}>
            Previous
          </button>
        )}
        {gameStep < MAX_STEPS && (
          <button type='button' onClick={onNextStep}>
            Next
          </button>
        )}
        {gameStep === MAX_STEPS && <button type='button'>Create game</button>}
      </div>
    </>
  );
};

export default App;
