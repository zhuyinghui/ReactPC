import React from 'react'
import Head from '../components/header'
import Menu from '../components/menu_bar'
import RouterConfig from '../router'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function Index(){
    return(
        <div>
            <Layout>
                <Sider>
                    <Menu></Menu>
                </Sider>
                <Layout>
                    <Header>
                        <Head></Head>
                    </Header>
                    <Content>
                        <RouterConfig></RouterConfig>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}
export default Index