import Image from 'next/Image';
//Images
import Pentagon from '../images/bg-pentagon.svg';
import Scissors from '../images/icon-scissors.svg';

const Choices = () => {
  const handleScissorsClick = () => {
    alert('clicou em scissors');
  };
  return (
    <div className='choices'>
      <div className='choices__pentagon'>
        <Image src={Pentagon} width={500} height={500} alt='Pentagon' />
      </div>
      <div className='choices__scissors' onClick={handleScissorsClick}>
        <div className='scissors__main'>
          <Image src={Scissors} alt='Scissors' />
        </div>
        <div className='scissors__border'></div>
      </div>

      <button className='choices__button'></button>
      <button className='choices__button'></button>
      <button className='choices__button'></button>
      <button className='choices__button'></button>
    </div>
  );
};

export default Choices;
