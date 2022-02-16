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

const Choices = ({
  handleScissorsClick,
  handlePaperClick,
  handleSpockClick,
  handleRockClick,
  handleLizardClick,
  style,
}) => {
  return (
    <div className='choices' style={style}>
      <div className='choices__pentagon'>
        <Image src={Pentagon} width={800} height={800} alt='Pentagon' />
      </div>
      {/* Scissors */}
      <Play
        style={{ top: '-6rem' }}
        choicesClassName='choices__play '
        image={Scissors}
        borderClassName='scissors__border'
        onClick={handleScissorsClick}
      />
      {/* Paper */}
      <Play
        style={{ top: '4rem', right: '-6rem' }}
        choicesClassName='choices__play paper'
        image={Paper}
        borderClassName='paper__border'
        onClick={handlePaperClick}
      />
      {/* Spock */}
      <Play
        style={{ top: '4rem', left: '-6rem' }}
        choicesClassName='choices__play spock'
        image={Spock}
        borderClassName='spock__border'
        onClick={handleSpockClick}
      />
      {/* Lizard */}
      <Play
        style={{ top: '18rem', left: '-1rem' }}
        choicesClassName='choices__play lizard'
        image={Lizard}
        borderClassName='lizard__border'
        onClick={handleLizardClick}
      />
      {/* Rock */}
      <Play
        style={{ top: '18rem', right: '-1rem' }}
        choicesClassName='choices__play rock'
        image={Rock}
        borderClassName='rock__border'
        onClick={handleRockClick}
      />
    </div>
  );
};

export default Choices;
