import React from 'react'
import './App.css'
import './static/css/reset.css'
import 'antd/dist/antd.css'
import { Route, Switch,Redirect,BrowserRouter,NavLink} from "react-router-dom"
import Index from './pages/index'
import Login from './pages/login/index'
import Error from './pages/error/index'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Index}/>
            <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
