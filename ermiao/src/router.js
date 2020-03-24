import React,{Component} from 'react'
import {HashRouter,Switch,Link,Redirect,Route} from 'react-router-dom'
import CustomNav from './component/customNav'
import Login from './component/login' // 不写后面的文件名好像也可以
import Admin from './component/admin'
import User from './component/user/user'
import Home from './component/home/home'


class RootRouter extends Component{
    render(){
        return(
            <HashRouter>
                {/* 自定义导航 */}
                <CustomNav></CustomNav>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' render={()=>{
                        return(
                            <Admin>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/user' component={User}></Route>
                            </Admin>
                        )
                    }}></Route>
                </Switch>
            </HashRouter>
        )
    }
}

export default RootRouter