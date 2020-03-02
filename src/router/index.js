import React from 'react';
import { Route, Switch,Redirect,BrowserRouter} from "react-router-dom";
import User from '../pages/user'
import Role from '../pages/role'

function RouterConfig() {
  return (
      <BrowserRouter>
        <Switch>
            <Redirect exact from="/home" to="/home/user"/>   
            <Route path="/home/user" component={User}/>
            <Route path="/home/role" component={Role}/>
        </Switch>
    </BrowserRouter>
  );
}

export default RouterConfig;
