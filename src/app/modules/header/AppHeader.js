import React from 'react';
import TopMenu from './TopMenu/TopMenu';
import Navbar from './Navbar/Navbar';
import './TopMenu/AppTopMenu.scss';

function AppHeader() {
  return (
    <header className="header position-relative">
      <TopMenu />
      <Navbar />
    </header>
  );
}

export default AppHeader;
