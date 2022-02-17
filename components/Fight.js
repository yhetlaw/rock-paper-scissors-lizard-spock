import Play from './Play';
import Button from 'react-bootstrap/Button';
import Router from 'next/router';

const Fight = ({ style, image1, image2, border1, border2, handlePlayAgainClick }) => {
  let firstBorder = `${border1}__border`;
  console.log(border1);
  let secondBorder = `${border2}__border`;
  return (
    <div className='fight' style={style}>
      <div className='fight__choice'>
        <h1 className='fight__title'>you picked</h1>
        <Play choicesClassName='fight__play' image={image1} borderClassName={firstBorder} />
      </div>
      <div className='fight__choice'>
        <h1 className='fight__title'>the house picked</h1>
        <Play choicesClassName='fight__play' image={image2} borderClassName={secondBorder} />
      </div>
      <div className='fight__result'>
        <h1 className='result__title'>you lose</h1>
        <Button variant='primary' className='result__button' onClick={handlePlayAgainClick}>
          play again
        </Button>{' '}
      </div>
    </div>
  );
};

export default Fight;
