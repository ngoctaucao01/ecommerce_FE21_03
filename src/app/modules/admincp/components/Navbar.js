import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import * as ROUTES from '../../../constants/routes';

const { Header } = Layout;

const AdminCPNavbar = () => {
  return (
    <Header>
      <Link to={ROUTES.ADMINCP}>
        <img
          className="logo"
          width={120}
          height={35}
          src="/../assets/images/common/Sun-Logotype-RGB-01.png"
          alt="Logo" />
      </Link>
    </Header>
  )
}

export default AdminCPNavbar;
