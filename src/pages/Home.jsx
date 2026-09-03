import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import Gifting from '../components/Gifting';
import Tradition from '../components/Tradition';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Featured />
      <Gifting />
      <Tradition />
    </>
  );
};

export default Home;
