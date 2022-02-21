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
  const choicesArray = [Rock, Paper, Scissors, Lizard, Spock];

  const [choices, setChoices] = useState();
  const [fight, setFight] = useState({ display: 'none' });
  const [clickedChoice, setClickedChoice] = useState(Scissors);
  const [border, setBorder] = useState('');
  const [randomUrl, setRandomUrl] = useState(choicesArray[Math.floor(Math.random() * choicesArray.length)]);
  const [win, setWin] = useState(false);
  const [tie, setTie] = useState(false);
  const [score, setScore] = useState(0);

  let randomSrc = randomUrl.src;
  let randomEnemy = '';

  //Defining borders from randomUrl
  randomSrc.includes('lizard')
    ? (randomEnemy = 'lizard')
    : randomSrc.includes('paper')
    ? (randomEnemy = 'paper')
    : randomSrc.includes('spock')
    ? (randomEnemy = 'spock')
    : randomSrc.includes('rock')
    ? (randomEnemy = 'rock')
    : randomSrc.includes('scissors')
    ? (randomEnemy = 'scissors')
    : console.log('error');

  const handleClick = (value) => {
    let enemy = randomEnemy;
    let valueSrc = value.src;
    let strValue;

    //If url includes any of the words
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
    if (
      (strValue == 'scissors' && enemy == 'paper') ||
      (strValue == 'scissors' && enemy == 'lizard') ||
      (strValue == 'paper' && enemy == 'rock') ||
      (strValue == 'paper' && enemy == 'spock') ||
      (strValue == 'lizard' && enemy == 'spock') ||
      (strValue == 'lizard' && enemy == 'paper') ||
      (strValue == 'spock' && enemy == 'scissors') ||
      (strValue == 'spock' && enemy == 'rock') ||
      (strValue == 'rock' && enemy == 'scissors') ||
      (strValue == 'rock' && enemy == 'lizard')
    ) {
      setWin(true);
      setTimeout(function () {
        setScore(score + 1);
      }, 3300); //run this after 3 seconds
    } else if (
      (strValue == 'scissors' && enemy == 'rock') ||
      (strValue == 'scissors' && enemy == 'spock') ||
      (strValue == 'paper' && enemy == 'lizard') ||
      (strValue == 'paper' && enemy == 'scissors') ||
      (strValue == 'lizard' && enemy == 'scissors') ||
      (strValue == 'lizard' && enemy == 'rock') ||
      (strValue == 'spock' && enemy == 'paper') ||
      (strValue == 'spock' && enemy == 'lizard') ||
      (strValue == 'rock' && enemy == 'paper') ||
      (strValue == 'rock' && enemy == 'spock')
    ) {
      setWin(false);
    } else if (
      (strValue == 'scissors' && enemy == 'scissors') ||
      (strValue == 'paper' && enemy == 'paper') ||
      (strValue == 'lizard' && enemy == 'lizard') ||
      (strValue == 'spock' && enemy == 'spock') ||
      (strValue == 'rock' && enemy == 'rock')
    ) {
      setTie(true);
    }

    setChoices({ display: 'none' });
    setFight({ display: 'flex' });
    setClickedChoice(value);
    setBorder(strValue);
  };

  const handlePlayAgainClick = () => {
    console.clear();
    setChoices({ display: 'flex' });
    setFight({ display: 'none' });
    setTie(false);
    setRandomUrl(choicesArray[Math.floor(Math.random() * choicesArray.length)]);
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
        <Board score={score} />
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
