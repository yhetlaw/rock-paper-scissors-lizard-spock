import Head from 'next/head';
import Image from 'next/image';
//Components
import Board from '../components/Board';
import Background from '../components/Background';
import Choices from '../components/Choices';
//Image

const Home = () => {
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
        <Choices />
      </div>
    </>
  );
};

export default Home;
