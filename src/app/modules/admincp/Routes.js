import Loadable from 'react-loadable';
import Loading from '../loading/Loading';
import * as ROUTES from '../../constants/routes';

const DashboardPage = Loadable({
  loader: () => import("./pages/dashboard"),
  loading: Loading,
});

const UsersPage = Loadable({
  loader: () => import("./pages/users"),
  loading: Loading,
});

const UsersDetailPage = Loadable({
  loader: () => import("./pages/user-detail"),
  loading: Loading,
});

const UsersGroupsPage = Loadable({
  loader: () => import("./pages/user-groups"),
  loading: Loading,
});

export default [
  {
    path: ROUTES.ADMINCP_DASHBOARD,
    component: DashboardPage,
  },
  {
    path: ROUTES.ADMINCP_USERS,
    component: UsersPage,
  },
  {
    path: ROUTES.ADMINCP_USERS_DETAIL,
    component: UsersDetailPage,
  },
  {
    path: ROUTES.ADMINCP_USERS_GROUPS,
    component: UsersGroupsPage,
  },
]
