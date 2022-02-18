import Head from 'next/head';
import { useState } from 'react';
import Router from 'next/router';

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
  const [randomUrl, setRandomUrl] = useState(choicesArray[Math.floor(Math.random() * choicesArray.length)]);
  const [win, setWin] = useState(false);
  const [tie, setTie] = useState(false);

  let randomSrc = randomUrl.src;

  console.log('this is randomSrc', randomSrc);
  let randomBorder = '';

  //Defining borders from randomUrl
  randomSrc.includes('lizard')
    ? (randomBorder = 'lizard')
    : randomSrc.includes('paper')
    ? (randomBorder = 'paper')
    : randomSrc.includes('spock')
    ? (randomBorder = 'spock')
    : randomSrc.includes('rock')
    ? (randomBorder = 'rock')
    : randomSrc.includes('scissors')
    ? (randomBorder = 'scissors')
    : console.log('error');

  console.log('this is randomBorder', randomBorder);

  const handleClick = (value) => {
    let enemy = randomBorder;
    let valueSrc = value.src;
    let strValue;
    valueSrc.includes('scissors')
      ? (strValue = 'scissors')
      : valueSrc.includes('rock')
      ? (strValue = 'rock')
      : valueSrc.includes('spock')
      ? (strValue = 'spock')
      : valueSrc.includes('paper')
      ? (strValue = 'paper')
      : valueSrc.includes('lizard')
      ? (strValue = 'lizard')
      : console.log('error');
    console.log('value', value, 'strValue', strValue);

    let tie = 'The match is tied';
    strValue == 'scissors' && enemy == 'paper'
      ? setWin(true)
      : strValue == 'scissors' && enemy == 'rock'
      ? setWin(false)
      : strValue == 'scissors' && enemy == 'lizard'
      ? setWin(true)
      : strValue == 'scissors' && enemy == 'spock'
      ? setWin(false)
      : strValue == 'scissors' && enemy == 'scissors'
      ? setTie(true)
      : strValue == 'scissors' && enemy == 'paper'
      ? setWin(true)
      : console.log('error');

    setChoices({ display: 'none' });
    setFight({ display: 'flex' });
    setClickedChoice(value);
    setBorder(strValue);
    match(strValue, randomBorder);
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
    /* setChoices({ display: 'flex' });
    setFight({ display: 'none' }); */
    Router.reload(window.location.pathname);
    console.clear();
  };

  console.log('the second border in index is', randomBorder);

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
          handleScissorsClick={() => handleClick(Scissors)}
          handlePaperClick={() => handleClick(Paper)}
          handleSpockClick={() => handleClick(Spock)}
          handleRockClick={() => handleClick(Rock)}
          handleLizardClick={() => handleClick(Lizard)}
        />
        <Fight
          style={fight}
          image1={clickedChoice}
          border1={border}
          image2={randomSrc}
          border2={randomBorder}
          handlePlayAgainClick={handlePlayAgainClick}
          win={win}
          tie={tie}
        />
      </div>
      <Rules />
    </>
  );
};

export default Home;
