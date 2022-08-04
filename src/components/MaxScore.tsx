import Context from '../context/context';

const maxScore = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <>
          <label htmlFor='maxScore'>Max score</label>
          <input
            type='number'
            id='maxScore'
            value={context.maxScore}
            onChange={(e) => {context.setMaxScore(+e.target.value)}}
            min='0'
            max='1000'
            step='10'
          />
        </>
      )}
    </Context.Consumer>
  );
};

export default maxScore;
