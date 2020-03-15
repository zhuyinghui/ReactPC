import React from 'react'
import './App.scss'
import './static/css/reset.css'
import 'antd/dist/antd.css'
import { Route, Switch,BrowserRouter} from "react-router-dom"
import Index from './pages/index'
import Login from './pages/login/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Index}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
