import DisplacementAnimation from './components/DisplacementAnimation'; // Adjusted import path
import React from 'react';
import Header from './components/Header';

const Home: React.FC = () => {
  return (
    <main className="w-screen h-screen bg-black relative px-12 select-none">
      <Header />
      <DisplacementAnimation />
      <div className='h-screen'>gacergaeg</div>
    </main>
  );
};

export default Home;