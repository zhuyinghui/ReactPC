import React from 'react';
import './App.css';
import 'antd/dist/antd.css';



import { Route, Switch,NavLink, Redirect,BrowserRouter} from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import Error from './pages/error'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 路由 */}
            <NavLink to="/home">首页</NavLink>
            <NavLink to="/login">登录</NavLink>
            <Switch>
                <Redirect from="/" exact to="/home"/>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
