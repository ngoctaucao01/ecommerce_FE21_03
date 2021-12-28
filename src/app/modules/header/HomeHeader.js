import React from 'react';
import Loadable from 'react-loadable';
import TopMenu from './TopMenu/TopMenu';
import Navbar from './Navbar/Navbar';
import Loading from '../loading/Loading';

const HomeCarousel = Loadable({
  loader: () => import('./Carousel'),
  loading: Loading,
});

function HomeHeader() {
  return (
    <header className="header position-relative">
      <TopMenu />
      <HomeCarousel />
      <Navbar />
    </header>
  );
}

export default HomeHeader;
