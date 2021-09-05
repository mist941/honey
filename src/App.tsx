import React from 'react';
import {BaseLayout} from './components/layouts/BaseLayout';
import {Route, Switch} from 'react-router-dom';
import router from './router';
export default function App() {
  return (
    <BaseLayout router={
      <Switch>
        {router.map((rout, index) => (
          <Route key={index} path={rout.path} exact={rout.path === '/shop'}>
            {rout.component}
          </Route>
        ))}
      </Switch>
    }/>
  );
}
