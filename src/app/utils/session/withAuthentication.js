import React from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../../modules/firebase';
import LocalStorageUtils, { LOCAL_STORAGE_KEY } from '../browser/LocalStorage';

const withAuthentication = Component => {
  class withAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: LocalStorageUtils.getItem(LOCAL_STORAGE_KEY.AUTH_USER)
      };
    }

    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          LocalStorageUtils.setItem(LOCAL_STORAGE_KEY.AUTH_USER, authUser);
          this.setState({ authUser });
        },
        () => {
          LocalStorageUtils.removeItem(LOCAL_STORAGE_KEY.AUTH_USER);
          this.setState({ authUser: null });
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }

  return withFirebase(withAuthentication);
}

export default withAuthentication;
