import Play from './Play';

const Fight = ({ style, image1, image2, border1, border2 }) => {
  let firstBorder = `${border1}__border`;
  console.log(border1);
  let secondBorder = `${border2}__border`;
  return (
    <div className='fight' style={style}>
      <div className='fight__left'>
        <Play choicesClassName='choices__play' image={image1} borderClassName={firstBorder} />
      </div>
      <div className='fight__right'>
        <Play choicesClassName='choices__play' image={image2} borderClassName={secondBorder} />
      </div>
    </div>
  );
};

export default Fight;
