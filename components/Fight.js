import Play from './Play';
import Button from 'react-bootstrap/Button';

const Fight = ({ style, image1, image2, border1, border2, handlePlayAgainClick, win, tie }) => {
  let firstBorder = `${border1}__border`;
  let secondBorder = `${border2}__border`;

  console.log('the second border in fight is', secondBorder);
  return (
    <div className='fight' style={style}>
      <div className='fight__choice'>
        <h1 className='fight__title'>you picked</h1>
        <Play choicesClassName='fight__play' image={image1} borderClassName2={firstBorder} />
      </div>
      <div className='fight__choice'>
        <h1 className='fight__title'>the house picked</h1>
        <Play choicesClassName='fight__play' image={image2} borderClassName2={secondBorder} />
      </div>
      <div className='fight__result'>
        {/* {win ? (
          <h1 className='result__title'>you win</h1>
        ) : (
          <h1 className='result__title'>you lose</h1>
        )} */}
        {tie ? (
          <h1 className='result__title'>The match is tied</h1>
        ) : win ? (
          <h1 className='result__title'>you win</h1>
        ) : (
          <h1 className='result__title'>you lose</h1>
        )}
        ;
        <Button variant='primary' className='result__button' onClick={handlePlayAgainClick}>
          play again
        </Button>{' '}
      </div>
    </div>
  );
};

export default Fight;
