import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { compose } from 'redux';
import { Layout } from 'antd';
import Loadable from 'react-loadable';
import './styles/Admincp.scss';
import { withAuthorization } from '../../utils/session';
import { withFirebase } from '../firebase';
import Routes from "./Routes";
import * as ROLES from '../../constants/roles';

const Loading = () => <>Loading...</>

const AdminCPNavbar = Loadable({
  loader: () => import('./components/Navbar'),
  loading: Loading
});

const LinkMenu = Loadable({
  loader: () => import('./components/LinkMenu'),
  loading: Loading
});

const { Content, Sider } = Layout;

const AdmincpPage = () => {
  return (
    <Router>
      <Layout>
        <AdminCPNavbar />
        <Layout>
          <Sider width={200} className="admincp-sider">
            <LinkMenu />
          </Sider>
          <Layout className="admincp-layout">
            <Content className="admincp-content">
              {Routes.map(route => {
                return (
                  <Route
                    exact
                    path={route.path}
                    component={route.component}
                    key={route.path}
                  />
                );
              })}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  )
};

const condition = authUser =>
  authUser && authUser.roles[ROLES.ADMIN] != null;

export default compose(
  withAuthorization(condition),
  withFirebase,
)(AdmincpPage);
