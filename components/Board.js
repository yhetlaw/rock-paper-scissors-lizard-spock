const Board = ({ score, handleNumberChange }) => {
  return (
    <div className='board'>
      <div className='board__text'>
        <p>
          rock
          <br /> paper
          <br /> scissors
          <br /> lizard
          <br /> spock
        </p>
      </div>
      <div className='board__scoreboard'>
        <h1 className='board__title'>score</h1>
        <p className='board__score'>{score}</p>
      </div>
    </div>
  );
};

export default Board;
