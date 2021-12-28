import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import store from '../../../store';
import { actionLogin, actionLogout } from '../users/actions';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();

    /**
     * Helper
     */

    this.serverValue = app.database.ServerValue;
  }

  /**
   * Auth API
   */
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  /**
   * Merge Auth and DB User API
   */

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };

            // Push user info to store
            store.dispatch(actionLogin(authUser));

            next(authUser);
          });
      } else {
        fallback();
        store.dispatch(actionLogout());
      }
    });


  /**
   * Dashboard
   */

  getTotalUsers = () =>
    this.db
      .ref('users')
      .once('value')
      .then(snapshot => snapshot.numChildren());

  getTotalProducts = () =>
    this.db
      .ref('products')
      .once('value')
      .then(snapshot => snapshot.numChildren());

  /**
   * Users API
   */
  user = id => this.db.ref(`users/${id}`);

  users = () => this.db.ref('users');

  /**
   * Blog API
   */
  blog = id => this.db.ref(`blog/${id}`)

  blogs = () => this.db.ref('blog');

  /**
   * Product API
   */
  product = id => this.db.ref(`products/${id}`)

  products = () => this.db.ref('products');
}

export default Firebase;
