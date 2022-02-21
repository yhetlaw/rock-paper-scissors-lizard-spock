import Play from './Play';
import Button from 'react-bootstrap/Button';

const Fight = ({ style, image1, image2, border1, handlePlayAgainClick, win, tie }) => {
  let firstBorder = `${border1}__border`;
  let secondBorder;

  //Defining borders from randomSrc
  image2.includes('lizard')
    ? (secondBorder = 'lizard__border')
    : image2.includes('paper')
    ? (secondBorder = 'paper__border')
    : image2.includes('spock')
    ? (secondBorder = 'spock__border')
    : image2.includes('rock')
    ? (secondBorder = 'rock__border')
    : image2.includes('scissors')
    ? (secondBorder = 'scissors__border')
    : console.log('error');

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
        {tie ? (
          <h1 className='result__title'>you tied</h1>
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
