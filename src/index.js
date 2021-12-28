import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import './i18n';
import Main from './app/Main';
import * as serviceWorker from './serviceWorker';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Firebase, { FirebaseContext } from './app/modules/firebase';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <FirebaseContext.Provider value={new Firebase()}>
          <ToastContainer position="top-right" autoClose={3000} />
          <Main />
        </FirebaseContext.Provider>
      </I18nextProvider>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
