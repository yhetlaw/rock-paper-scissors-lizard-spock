import Image from 'next/image';

const Play = ({ style, choicesClassName, image, borderClassName, onClick }) => {
  return (
    <div className={choicesClassName} style={style} onClick={onClick}>
      <div className='choices__background'>
        <Image src={image} alt='Play option' />
      </div>
      <div className={borderClassName}></div>
    </div>
  );
};

export default Play;
