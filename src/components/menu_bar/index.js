import React from 'react'; 
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { useState,useEffect } from 'react';
import './index.css'
const { SubMenu } = Menu;
function MenuBar(){
    const [collapsed, setCollapsed] = useState(0);
    useEffect(() => {
        console.log(collapsed)
    });
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
          <Menu.Item key="1">
            <PieChartOutlined />
            <span><a href="/home/user">用户</a></span>
          </Menu.Item>
          <Menu.Item key="2">
            <DesktopOutlined />
            <span><a href="/home/role">角色</a></span>
          </Menu.Item>
          <Menu.Item key="3">
            <InboxOutlined />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <MailOutlined />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <AppstoreOutlined />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    )
}
export default MenuBar