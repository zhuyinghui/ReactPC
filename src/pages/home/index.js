import React from 'react';
import Header from '../../components/header'
import Menu from '../../components/menu_bar'
import RouterConfig from '../../router'
function Home(){
    return(
        <div>
            <Header></Header>
            <Menu></Menu>
            <a href="/home/user">用户</a>
            <a href="/home/role">角色</a>
            <RouterConfig></RouterConfig>
        </div>
    )
}
export default Home