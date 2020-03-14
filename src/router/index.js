import React from 'react';
import { Route, Switch} from "react-router-dom";

// 系统管理--权限管理 角色管理
import Limit from '../pages/system/limit'
import Role from '../pages/system/role'
// 组织管理--门店管理 会员管理
import Shop from '../pages/organization/shop'
import Member from '../pages/organization/member'
// 收益管理--商城收益
import Market from '../pages/income/market'
// 人员管理--职位管理 员工管理
import Position from '../pages/person/position'
import Staff from '../pages/person/staff'
// 产品管理--商品类别 商品管理 项目类别 项目管理
import Category from '../pages/product/category'
import Goods from '../pages/product/goods'
import Classify from '../pages/product/classify'
import Project from '../pages/product/project'
// 客户管理--会员管理 充值管理 预约管理 商城订单管理
import ShopMember from '../pages/customer/shop_member';
import Invest from '../pages/customer/invest';
import Booking from '../pages/customer/booking';
import Order from '../pages/customer/order';
//其他
import Others from '../pages/others';



function RouterConfig() {
  return (
        <Switch>
            <Route path="/system/limit" component={Limit}/>
            <Route path="/system/role" component={Role}/>

            <Route path="/organization/shop" component={Shop}/>
            <Route path="/organization/member" component={Member}/>

            <Route path="/income/market" component={Market}/>

            <Route path="/person/position" component={Position}/>
            <Route path="/person/staff" component={Staff}/>

            <Route path="/product/category" component={Category}/>
            <Route path="/product/goods" component={Goods}/>
            <Route path="/product/classify" component={Classify}/>
            <Route path="/product/project" component={Project}/>

            <Route path="/customer/shopMember" component={ShopMember}/>
            <Route path="/customer/invest" component={Invest}/>
            <Route path="/customer/booking" component={Booking}/>
            <Route path="/customer/order" component={Order}/>

            <Route path="/others" component={Others}/>
            <Route path="/" component={Limit}/>
        </Switch>
  );
}

export default RouterConfig;
