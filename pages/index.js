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
  const [randomUrl, setRandomUrl] = useState(choicesArray[Math.floor(Math.random() * (5 - 0) + 0)]);

  let randomSrc = randomUrl.src;
  let randomBorder = '';

  //Defining borders from randomUrl
  randomSrc.indexOf('lizard') !== -1
    ? (randomBorder = 'lizard')
    : randomSrc.indexOf('rock') !== -1
    ? (randomBorder = 'rock')
    : randomSrc.indexOf('paper') !== -1
    ? (randomBorder = 'paper')
    : randomSrc.indexOf('spock') !== -1
    ? (randomBorder = 'spock')
    : randomSrc.indexOf('scissors')
    ? (randomBorder = 'scissors')
    : console.log('error defining borders');

  const handleScissorsClick = () => {
    setChoices({ display: 'none' });
    setFight({ display: 'flex' });
    setClickedChoice(Scissors);
    setBorder('scissors');
    match('scissors', randomBorder);
  };

  const handlePaperClick = () => {
    setChoices({ display: 'none' });
    setFight({ display: 'flex' });
    setClickedChoice(Paper);
    setBorder('paper');
    match('paper', randomBorder);
  };

  const handleSpockClick = () => {
    setChoices({ display: 'none' });
    setFight({ display: 'flex' });
    setClickedChoice(Spock);
    setBorder('spock');
    match('spock', randomBorder);
  };

  const handleRockClick = () => {
    setChoices({ display: 'none' });
    setFight({ display: 'flex' });
    setClickedChoice(Rock);
    setBorder('rock');
    match('rock', randomBorder);
  };

  const handleLizardClick = () => {
    setChoices({ display: 'none' });
    setFight({ display: 'flex' });
    setClickedChoice(Lizard);
    setBorder('lizard');
    match('lizard', randomBorder);
  };

  const match = (play1, play2) => {
    console.log(`the play1 is ${play1}, the play2 is ${play2}`);
    (play1 === 'scissors' && play2 === 'paper') || (play1 === 'paper' && play2 === 'scissors')
      ? console.log('the winner is scissors')
      : (play1 === 'scissors' && play2 === 'rock') || (play1 === 'rock' && play2 === 'scissors')
      ? console.log('the winner is rock')
      : (play1 === 'scissors' && play2 === 'spock') || (play1 === 'spock' && play2 === 'scissors')
      ? console.log('the winner is spock')
      : (play1 === 'scissors' && play2 === 'lizard') || (play1 === 'lizard' && play2 === 'scissors')
      ? console.log('the winner is scissors')
      : (play1 === 'scissors' && play2 === 'scissors') || (play1 === 'scissors' && play2 === 'scissors')
      ? console.log('the match is tied')
      : console.log('kek');
  };

  const handlePlayAgainClick = () => {
    setChoices({ display: 'flex' });
    setFight({ display: 'none' });
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
        <Choices
          style={choices}
          handleScissorsClick={handleScissorsClick}
          handlePaperClick={handlePaperClick}
          handleSpockClick={handleSpockClick}
          handleRockClick={handleRockClick}
          handleLizardClick={handleLizardClick}
        />
        <Fight
          style={fight}
          image1={clickedChoice}
          border1={border}
          image2={randomUrl}
          border2='paper'
          handlePlayAgainClick={handlePlayAgainClick}
        />
      </div>
      <Rules />
    </>
  );
};

export default Home;
