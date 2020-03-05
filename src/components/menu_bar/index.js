import React from 'react'; 
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import './index.css'

const { SubMenu } = Menu;

function MenuBar(){
    const [collapsed, setCollapsed] = useState(0);
    useEffect(() => {
        console.log(collapsed)
    });
    const menuList=[
      {
        name:'系统管理',
        path:'',
        icon:GlobalOutlined,
        children:[
          {
            name:'权限管理',
            path:'/index/limit'
          },
          {
            name:'角色管理',
            path:'/index/limit'
          }
        ]
      }
    ]
    const getMenu=()=>{
      return(
          <SubMenu
              key="sub1"
              title={
                <span>
                  <GlobalOutlined />
                  <span>系统管理</span>
                </span>
              }
            >
              <Menu.Item key="1">
                <Link to="/limit">
                  权限管理
                  </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/role">
                  角色管理
                </Link>
              </Menu.Item>
            </SubMenu>
          // <SubMenu
          //   key="sub2"
          //   title={
          //     <span>
          //       <AppstoreOutlined />
          //       <span>组织管理</span>
          //     </span>
          //   }
          // >
          //   <Menu.Item key="3">
          //       门店管理
          //       </Menu.Item>
          //   <Menu.Item key="4">
          //       会员管理
          //       </Menu.Item>
          // </SubMenu>
      )
    }
    return(
        <div style={{ width: 256 }} className="menu-bar">
        <Button type="primary" onClick={()=>setCollapsed(!collapsed)} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed? MenuUnfoldOutlined : MenuFoldOutlined)}
          Click
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          {
            getMenu()
          }
          
        </Menu>
      </div>
    )
}
export default MenuBar