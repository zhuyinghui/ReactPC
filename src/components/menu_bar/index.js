import React from 'react'; 
import { Menu } from 'antd';

import { useState,useEffect } from 'react';
// withRouter包装组件用来获取props
import { Link,withRouter } from 'react-router-dom'

import menuList from './config'

const { SubMenu } = Menu;


function MenuBar(props){
  //获取路由，让菜单栏选中路由对应页
  const reg=/\/[a-zA-Z]*/
  const path=props.location.pathname
  const firstPath=path.match(reg)[0]


  //切换菜单时自动收起其他菜单项
  const rootSubmenuKeys = ['/system', '/organization', '/income','/person','/product','/customer']
  const [openKeys, setOpenKeys] = useState([firstPath]) //当前展开的 SubMenu 菜单项 key 数组
  const onOpenChange = openKey => {
    const latestOpenKey = openKey.find(key => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(openKey)
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
      }
  };

  const [selectedKeys]=useState([path]) //当前选中的菜单项 key 数组

    
    useEffect(() => {
        // 生命周期钩子
    });
    

    const getMenu=(menuList)=>{
      return menuList.map(item=>{
        if(!item.children){
          return(
            <Menu.Item key={item.key}>
                <Link to={item.key}>
                  {item.title}
                </Link>
            </Menu.Item>
          )
        }
        else{
          return(
            <SubMenu
                key={item.key}
                title={
                  <span>
                    <span>{item.title}</span>
                  </span>
                }
              >
                {
                  getMenu(item.children)
                }
            </SubMenu>
          )
        }
      })
    }
    return(
        <div className="menu-bar">
          <div style={{color:'#fff',height:64,textAlign:"center",lineHeight:'64px',fontSize:24}}>后台管理系统</div>
        <Menu
          openKeys={openKeys}
          defaultSelectedKeys={selectedKeys}
          onOpenChange={onOpenChange}
          mode="inline"
          theme="dark"
        >
          {
            getMenu(menuList)
          }
        </Menu>
      </div>
    )
}
export default withRouter(MenuBar)