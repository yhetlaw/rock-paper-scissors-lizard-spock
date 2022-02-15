import Image from 'next/image';

const Play = ({ style, image, borderClassName, onClick }) => {
  return (
    <div className='choices__play' style={style} onClick={onClick}>
      <div className='choices__background'>
        <Image src={image} alt='Play option' />
      </div>
      <div className={borderClassName}></div>
    </div>
  );
};

export default Play;
