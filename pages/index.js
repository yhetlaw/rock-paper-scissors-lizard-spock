import Head from 'next/head';
import { useState } from 'react';
//Components
import Board from '../components/Board';
import Background from '../components/Background';
import Choices from '../components/Choices';
import Rules from '../components/Rules';
import Fight from '../components/Fight';
//Image
import Scissors from '../images/icon-scissors.svg';
import Paper from '../images/icon-paper.svg';
import Rock from '../images/icon-rock.svg';
import Lizard from '../images/icon-lizard.svg';
import Spock from '../images/icon-spock.svg';

const Home = () => {
  const [choices, setChoices] = useState();
  const [fight, setFight] = useState({ display: 'none' });
  const [clickedChoice, setClickedChoice] = useState(Scissors);
  const [border, setBorder] = useState('');
  const choicesArray = [Rock, Paper, Scissors, Lizard, Spock];
  const [randomUrl, setRandomUrl] = useState(choicesArray[Math.floor(randomNumber(0, 5))]);

  function randomNumber(mn, mx) {
    return Math.random() * (mx - mn) + mn;
  }

  let chosenBorder;
  if (randomUrl) {
  }

  const handleScissorsClick = () => {
    setChoices({ display: 'none' });
    setFight({ display: 'flex' });
    setClickedChoice(Scissors);
    setBorder('scissors');
    match('scissors', 'paper');
  };

  const handlePaperClick = () => {
    setChoices({ display: 'none' });
    setFight({ display: 'flex' });
    setClickedChoice(Paper);
    setBorder('paper');
    match('paper', 'paper');
  };

  const match = (play1, play2) => {
    console.log(`the play1 is ${play1}, the play2 is ${play2}`);
    /* (play1 === 'scissors' && play2 === 'paper') || (play1 === 'paper' && play2 === 'scissors')
      ? alert('the winner is scissors')
      : (play1 === 'scissors' && play2 === 'rock') || (play1 === 'rock' && play2 === 'scissors')
      ? alert('the winner is rock')
      : (play1 === 'scissors' && play2 === 'spock') || (play1 === 'spock' && play2 === 'scissors')
      ? alert('the winner is spock')
      : (play1 === 'scissors' && play2 === 'lizard') || (play1 === 'lizard' && play2 === 'scissors')
      ? alert('the winner is scissors')
      : (play1 === 'scissors' && play2 === 'scissors') || (play1 === 'scissors' && play2 === 'scissors')
      ? alert('the match is tied')
      : alert('kek'); */
  };

  return (
    <>
      <Head>
        <title>Rock, paper, scissors, lizard, spock</title>
        <meta name='description' httpEquiv='X-UA-Compatible' content='Rock, paper, scissors, lizard, spock' />
        <link rel='icon' href='/icon.png' />
      </Head>
      <Background />
      <div className='main'>
        <Board />
        <Choices style={choices} handleScissorsClick={handleScissorsClick} handlePaperClick={handlePaperClick} />
        <Fight style={fight} image1={clickedChoice} border1={border} image2={randomUrl} border2='paper' />
      </div>
      <Rules />
    </>
  );
};

export default Home;
