import React from 'react'
import './App.css'
import './static/css/reset.css'
import 'antd/dist/antd.css'
import { Route, Switch,Redirect,BrowserRouter} from "react-router-dom"
import Home from './pages/home'
import Login from './pages/login'
import Error from './pages/error'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Redirect exact from="/" to="/home"/>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
