import Context from '../context/context';

const playersCount = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <>
          <label htmlFor='playersCount'>Number of players</label>
          <input
            type='number'
            id='playersCount'
            value={context.playersCount}
            onChange={(e) => {
              context.setPlayersCount(+e.target.value);
            }}
            min='2'
            max='10'
            step='1'
          />
        </>
      )}
    </Context.Consumer>
  );
};

export default playersCount;
