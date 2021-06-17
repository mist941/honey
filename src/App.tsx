import React from 'react';
import {BaseTemplate} from './components/templates/BaseTemplate';
import {Route, Switch} from 'react-router-dom';
import router from './router';

export default function App() {
  return (
    <BaseTemplate router={
      <Switch>
        {router.map((rout, index) => (
          <Route key={index} path={rout.path} exact={rout.path === '/'}>
            {rout.component}
          </Route>
        ))}
      </Switch>
    }/>
  );
}
