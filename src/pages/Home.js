import React from 'react';
import Categories from '../components/Categories';
import NavBar from '../components/NavBar/NavBar';
import RecentVideo from '../components/Cards/RecentVideo';

const Home = () => {
  return (
    <>
      <NavBar />
      <RecentVideo />
      {/* <Categories /> */}
    </>
  );
};

export default Home;
