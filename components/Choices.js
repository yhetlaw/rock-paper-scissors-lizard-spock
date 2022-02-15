import Image from 'next/Image';

//Components
import Play from './Play';
//Images
import Pentagon from '../images/bg-pentagon.svg';
import Scissors from '../images/icon-scissors.svg';
import Paper from '../images/icon-paper.svg';
import Spock from '../images/icon-spock.svg';
import Lizard from '../images/icon-lizard.svg';
import Rock from '../images/icon-rock.svg';

const Choices = ({ handleScissorsClick, style }) => {
  /* const handleScissorsClick = () => {
    alert('clicou em scissors');
  }; */
  return (
    <div className='choices' style={style}>
      <div className='choices__pentagon'>
        <Image src={Pentagon} width={800} height={800} alt='Pentagon' />
      </div>
      <Play
        style={{ top: '-6rem' }}
        image={Scissors}
        borderClassName='scissors__border'
        onClick={handleScissorsClick}
      />
      {/* Paper */}
      <Play
        style={{ top: '4rem', right: '-6rem' }}
        image={Paper}
        borderClassName='paper__border'
        onClick={handleScissorsClick}
      />
      {/* Spock */}
      <Play
        style={{ top: '4rem', left: '-6rem' }}
        image={Spock}
        borderClassName='spock__border'
        onClick={handleScissorsClick}
      />
      {/* Lizard */}
      <Play
        style={{ top: '18rem', left: '-1rem' }}
        image={Lizard}
        borderClassName='lizard__border'
        onClick={handleScissorsClick}
      />
      {/* Rock */}
      <Play
        style={{ top: '18rem', right: '-1rem' }}
        image={Rock}
        borderClassName='rock__border'
        onClick={handleScissorsClick}
      />
    </div>
  );
};

export default Choices;
