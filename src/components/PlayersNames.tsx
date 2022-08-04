import Context from '../context/context';

const playersNames = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <>
          {context.players.map((player, index) => (
            <div key={index}>
              <label htmlFor={`Player${index}`}>Player #{index + 1}</label>
              <input
                type='text'
                id={`Player${index}`}
                value={player.name}
                onChange={(e) => context.setPlayerName(index, e.target.value)}
              />
            </div>
          ))}
        </>
      )}
    </Context.Consumer>
  );
};

export default playersNames;
