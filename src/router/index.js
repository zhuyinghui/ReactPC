import React from 'react';
import { Route, Switch,Redirect,BrowserRouter} from "react-router-dom";

// 系统管理--权限管理 角色管理
import Limit from '../pages/system/limit'
import Role from '../pages/system/role'
// 组织管理--门店管理 会员管理
import Shop from '../pages/organization/shop'
import Member from '../pages/organization/member'

function RouterConfig() {
  return (
        <Switch>
            <Route path="/limit" component={Limit}/>
            <Route path="/role" component={Role}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/member" component={Member}/>
            <Route path="/" component={Limit}/>
        </Switch>
  );
}

export default RouterConfig;
