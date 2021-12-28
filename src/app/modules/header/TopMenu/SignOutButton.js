import React from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../../firebase';
import { toast } from 'react-toastify';
import * as ROUTES from '../../../constants/routes';

const SignOutButton = ({ firebase, t }) => {

  const doSignOut = () => {
    firebase.doSignOut();
    toast.success(t('NOTIFY.LOGOUT_SUCCESS'));
  }

  return <li><Link to={ROUTES.HOME} onClick={doSignOut}>{t('LOGOUT')}</Link></li>
}

export default withFirebase(SignOutButton);
