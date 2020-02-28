import React from 'react';
import { Route, Switch,Link, Redirect,BrowserRouter} from "react-router-dom";

import User from '../../pages/user/index';

function RouterConfig(){
    return(
        <BrowserRouter>
        {/* 菜单栏路由 */}
            <Link to="/home/user">用户管理</Link>
            <Switch>
                <Route path="/home/user" component={User}/>
            </Switch>
        </BrowserRouter>
    )
}
export default RouterConfig