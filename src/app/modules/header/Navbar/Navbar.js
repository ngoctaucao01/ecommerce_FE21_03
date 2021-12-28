import React, { useState } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { useTranslation } from "react-i18next";
import NavbarCartMobile from './NavbarCartMobile';
import NavbarDropdown from './NavbarDropdown';

function HeaderNavbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" expand="md">
      <Container>
        <NavbarBrand tag={RRNavLink} to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="NavbarBrand" />
        </NavbarBrand>
        <NavbarCartMobile />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar-nav ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link-menu" tag={RRNavLink} to="/" title={t('HOMEPAGE')}>{t('HOMEPAGE')}</NavLink>
            </NavItem>
            <NavbarDropdown title="Rượu Đỏ" />
            <NavbarDropdown title="Rượu Trắng" />
            <NavItem>
              <NavLink className="nav-link-menu" tag={RRNavLink} to="/introduction" title={t('INTRODUCTION')}>{t('INTRODUCTION')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-menu" tag={RRNavLink} to="/blog" title={t('BLOG')}>{t('BLOG')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link-menu" tag={RRNavLink} to="/contact" title={t('CONTACT')}>{t('CONTACT')}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
