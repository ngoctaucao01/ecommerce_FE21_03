import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import * as ROUTES from '../../../constants/routes';

const { SubMenu } = Menu;

const LinkMenu = withRouter(props => {
  const { location } = props;
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[ROUTES.ADMINCP_DASHBOARD]}
      defaultOpenKeys={['sub1']}
      selectedKeys={[location.pathname]}
      className="admincp-sider__menu"
    >
      <Menu.Item key={ROUTES.ADMINCP_DASHBOARD}>
        <Link to={ROUTES.ADMINCP_DASHBOARD}>
          <Icon type="dashboard" />
          <span>Dashboard</span>
        </Link>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="user" />
            User Manager
          </span>
        }
      >
        <Menu.Item key={ROUTES.ADMINCP_USERS}>
          <Link to={ROUTES.ADMINCP_USERS}>
            All Users
          </Link>
        </Menu.Item>
        <Menu.Item key={ROUTES.ADMINCP_USERS_GROUPS}>
          <Link to={ROUTES.ADMINCP_USERS_GROUPS}>
            Groups Users
          </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="shop" />
            Product Manager
          </span>
        }
      >
        <Menu.Item key="5">All Products</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub3"
        title={
          <span>
            <Icon type="audit" />
            Orders
          </span>
        }
      >
        <Menu.Item key="9">All Orders</Menu.Item>
      </SubMenu>
    </Menu>
  )
});

export default LinkMenu;
