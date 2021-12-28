import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from "./Routes";
import AppHeader from './modules/header/AppHeader';
import Footer from './modules/footer/Footer'
import NotFound from './modules/notfound/NotFound';

function App() {
  return (
    <div>
      <AppHeader />
      <Switch>
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
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div >
  );
}

export default App;
