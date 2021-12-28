import React from 'react';
import { Container } from 'reactstrap';
import TopMenuList from './TopMenuList';
import Search from './Search';
import ChooseLanguage from '../../shared/choose-language';

const TopMenu = () => {
  return (
    <div className="top-menu">
      <Container>
        <TopMenuList />
        <Search />
        <ChooseLanguage />
      </Container>
    </div>
  )
}

export default TopMenu;
