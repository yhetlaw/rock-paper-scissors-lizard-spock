import Image from 'next/image';

const Play = ({ style, choicesClassName, image, borderClassName, borderClassName2, onClick }) => {
  return (
    <div className={choicesClassName} style={style} onClick={onClick}>
      <div className='choices__background'>
        <Image src={image} alt='Play option' width={60} height={60} />
      </div>
      <div className={borderClassName}></div>
      <div className={borderClassName2}></div>
    </div>
  );
};

export default Play;
