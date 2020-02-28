import React from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer';
import Menu from '../../components/menu';
function Home(){
    return(
        <div>
            <ul>
                <li><Header></Header></li>
                <li><Menu></Menu></li>
                <li><Footer></Footer></li>
            </ul>
        </div>
    )
}
export default Home