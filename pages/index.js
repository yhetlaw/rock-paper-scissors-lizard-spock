import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
//Components
import Board from '../components/Board';
import Background from '../components/Background';
import Choices from '../components/Choices';
//Image

const Home = () => {
  const [choices, setChoices] = useState();

  const handleScissorsClick = () => {
    setChoices({ display: 'none' });
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
        <Choices style={choices} handleScissorsClick={handleScissorsClick} />
      </div>
    </>
  );
};

export default Home;
