import React from 'react';
import Header from '../components/header'
import Menu from '../components/menu_bar'
import RouterConfig from '../router';

function Home(){
    return(
        <div>
            <Header></Header>
            <Menu></Menu>
            <RouterConfig></RouterConfig>
        </div>
    )
}
export default Home