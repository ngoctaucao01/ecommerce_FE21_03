import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { AuthUserContext } from '../../../utils/session';
import * as ROUTES from '../../../constants/routes';
import * as ROLES from '../../../constants/roles';
import SignOutButton from './SignOutButton';

const TopMenuItem = ({ children, path }) => {
  return <li><Link to={path}>{children}</Link></li>
}

const TopMenuList = ({ carts, t, user }) => {
  return (
    <ul className="top-menu__list list-unstyled">
      <AuthUserContext.Consumer>
        {authUser => {
          if (authUser) {
            return <TopMenuAuth t={t} carts={carts} authUser={authUser} user={user} />
          } else {
            return <TopMenuNonAuth t={t} carts={carts} />
          }
        }}
      </AuthUserContext.Consumer>
    </ul>
  );
}

const TopMenuAuth = ({ authUser, carts, t, user }) => (
  <>
    <TopMenuItem path={ROUTES.PROFILE}>{t('WELCOME', { user: user.info.firstName })}</TopMenuItem>
    <TopMenuItem path={ROUTES.CART}>{t('CART')} ({carts.length})</TopMenuItem>
    <TopMenuItem path={ROUTES.FAVORITE}>{t('FAVORITE_LIST')}</TopMenuItem>
    <TopMenuItem path={ROUTES.ORDER}>{t('ORDER')}</TopMenuItem>
    {authUser.roles[ROLES.ADMIN] != null && (
      <TopMenuItem path={ROUTES.ADMINCP}>{t('ADMINCP')}</TopMenuItem>
    )}
    <SignOutButton t={t} />
  </>
)

const TopMenuNonAuth = ({ t, carts }) => (
  <>
    <TopMenuItem path={ROUTES.CART}>{t('CART')} ({carts.length})</TopMenuItem>
    <TopMenuItem path={ROUTES.LOGIN}>{t('LOGIN')}</TopMenuItem>
    <TopMenuItem path={ROUTES.REGISTER}>{t('REGISTER')}</TopMenuItem>
  </>
)

const mapStateToProps = state => {
  return {
    user: state.usersReducers.user,
    carts: state.cartsReducers.carts
  }
}

export default compose(
  withTranslation(),
  connect(mapStateToProps, null, null, { pure: false })
)(TopMenuList)
