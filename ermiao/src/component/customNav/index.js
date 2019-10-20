import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
// 自定义导航，编程式导航，需要路由对象
import { Menu} from 'antd';
const { SubMenu } = Menu;

let navData=[
    {name:'首页',path:'/home'},
    {name:'设置',path:'/setting'},
    {name:'用户管理',path:'/user',children:[
        {name:'查看全部用户信息',path:'/user/list'},
        {name:'添加',path:'/user/add'}
    ]},
    {name:'权限管理',path:'/power',children:[
        {name:'权限添加',path:'/power/add'},
        {name:'权限删除',path:'/power/del'}
    ]},
]

class CustomNav extends Component{
    renderItem=(data)=>{
        return data.map((item,index)=>{
            if(item.children){
                // 多级
                return <SubMenu title={item.name}>
                    {this.renderItem(item.children)}
                </SubMenu>
            }else{
                return <Menu.Item key={index}>{item.name}</Menu.Item>
            }
        })
    
    }
    render(){
        console.log('这儿是自定义导航',this)
        return(
           <div className='customNav'>
              <Menu style={{ width: 256 }} mode="vertical">
                  {this.renderItem(navData)}
              {/* <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">设置</Menu.Item>             
                <SubMenu
                    key="sub1"
                    title={
                        <span>用户管理</span>
                    }
                    >
                    <Menu.Item key="3">查看全部用户信息</Menu.Item>   
                    <Menu.Item key="4">添加</Menu.Item>         
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>权限管理</span>
                    }
                    >
                    <Menu.Item key="5">权限添加</Menu.Item>   
                    <Menu.Item key="6">权限删除</Menu.Item>         
                </SubMenu>                      */}
                {/* {navData.map((item,index)=>{
                    if(item.children){
                        // 有二级
                        <SubMenu></SubMenu>
                    }else{
                      return(
                        
                        <Menu.Item key={index}>{item.name}</Menu.Item>
                    )  
                    }
                    
                })} */}
            </Menu>
           </div>
        )
    }
}

export default withRouter(CustomNav)