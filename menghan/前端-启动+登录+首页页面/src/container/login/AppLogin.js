import React, { Component } from 'react'
import { NavBar, Icon,TabBar,WingBlank} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'

import AppTab from '../AppTab'
import  AppZhuce from './container/AppZhuce'
import AppForget from './container/AppForget';

export default class AppLogin extends Component {
    render() {
        return (
            <div style={{background:'#fff'}}>
                <NavBar
                    style={{background:'#1daea9',color:'black',height:68,fontSize:16}}
                    icon={<Icon type="left" />}
                    onLeftClick={() => {window.history.back()}}
                    >吾宠登陆
                </NavBar>
                <WingBlank>
                <div style={{width:'100%',padding:'50px',background:'#fff'}}>
                    <img style={{width:'80%',marginLeft:'25px'}} src={require('../../images/tou.png')}/>
                </div>
                <div style={{height: '250px',background:'#fff'}}>
                    <input style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,background:'#eee',border:'0'}} type='text' id='username' name='username' placeholder='用户名/手机号' />
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,background:'#eee'}}>
                        <input style={{width:'85%',margin:'0 auto',lineHeight:3,background:'#eee',border:'0'}} type='password'  id='pwd' name='pwd' placeholder='登录密码' />
                        <label><i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-yanjing'></i></label>
                    </div>
                    {/* <input  style={{width:'90%',margin:'0 40px',lineHeight:5}} type="submit" value='登陆'/> */}
                    <Link to='/tab'>
                    <input type='submit' style={{width:'100%',height:50,margin:'0 auto',background:'#1daea9',color:'#fff',borderRadius:'40px',fontSize:30,marginTop:20}} value='登陆'/>
                    </Link>
                    
                    <p style={{width:'100%',margin:'0 auto',lineHeight:2,marginTop:10}}><Link to='/zhuce'>手机快速注册</Link><span style={{float:'right'}}><Link to='/wangji'>忘记密码</Link></span></p>
                </div>
                </WingBlank>
                <div style={{width: '100%',height: '200px',background:'#fff',paddingTop:10}}>
                    <h3 style={{width: '100%',height: '20px',margin:'0 auto',textAlign:'center' }}>第三方登录</h3>
                    <div style={{width: '90%',height: '100px',margin:'auto' }}>
                    <TabBar
                    unselectedTintColor="#949494"
                    tintColor="yellow"
                    >
                    <TabBar.Item 
                    icon={<i style={{color:'#fff',width:40,height:40,border:'2px solid green',borderRadius:'20px',fontSize:40,lineHeight:'40px',backgroundColor:'green'}} className='iconfont icon-weixindenglu'></i>
                    }
                    ></TabBar.Item>
                    <TabBar.Item 
                    icon={<i style={{color:'#fff',width:40,height:40,border:'2px solid blue',borderRadius:'20px',fontSize:40,lineHeight:'40px',backgroundColor:'blue'}} className='iconfont icon-qq-copy'></i>
                    }
                    ></TabBar.Item>
                    <TabBar.Item 
                    icon={<i style={{color:'#fff',width:40,height:40,border:'2px solid red',borderRadius:'20px',fontSize:40,lineHeight:'40px',backgroundColor:'red'}} className='iconfont icon-weibo'></i>
                    }
                    ></TabBar.Item>
                    </TabBar>
                    </div>
                </div>
                
                <Route  path='/tab' component={AppTab}/>
                <Route path='/login/zhuce' component={AppZhuce} />
                <Route path='/login/wangji' component={AppForget} />
                
            </div>
        )
    }
}


