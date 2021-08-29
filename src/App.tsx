import React from 'react';
import {BaseLayout} from './components/layouts/BaseLayout';
import {Route, Switch} from 'react-router-dom';
import router from './router';
import {useSelector} from "react-redux";
import {RootState} from "./store/store";

export default function App() {
  const user = useSelector((state: RootState) => state.auth.currentUser);
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
