import React, { Component } from 'react'
import { NavBar, Icon,TabBar,WingBlank} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'

import AppTab from './Apptab'
import  AppZhuce from './Login/AppZhuce'
import AppForget from './Login/AppForget';
import Data from '../data.json'
export default class AppLogin extends Component {
    
     check=()=>{
        var loginname = document.getElementById("username");
        var password = document.getElementById("pwd");
            if(loginname.value===Data.users[0].username && password.value===Data.users[0].password){
                alert("success!");
                window.location = 'tab';
            }
            else if(loginname.value===Data.users[1].username && password.value===Data.users[1].password){
                alert("success!");
                window.location = 'tab';
            }
            else if(loginname.value===Data.users[2].username && password.value===Data.users[2].password){
                alert("success!");
                window.location = 'tab';
            }
            else{
                alert("未完成验证");
            }
    }
    render() {
        return (
            <div style={{background:'#fff'}}>
                <NavBar
                    style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                    icon={<Icon type="left" />}
                    onLeftClick={() => {window.history.back()}}
                    >吾宠登录
                </NavBar>
                <WingBlank>
                <div style={{width:'100%',padding:'40px',background:'#fff'}}>
                    <img style={{width:'60%',marginLeft:'45px'}} src={require('../img/images/tou.png')}/>
                </div>
                <div style={{height: '250px',background:'#fff',marginTop:-10}}>
                    <input style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,background:'#eee',border:'0',borderRadius:5,paddingLeft:10}} type='text' id='username' name='username' placeholder='用户名/手机号' />
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,background:'#eee',borderRadius:5,}}>
                        <input style={{width:'85%',margin:'0 auto',lineHeight:3,background:'#eee',border:'0',borderRadius:5,paddingLeft:10}} type='password'  id='pwd' name='pwd' placeholder='登录密码' />
                        <label><i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-yanjing'></i></label>
                    </div>
                    {/* <input  style={{width:'90%',margin:'0 40px',lineHeight:5}} type="submit" value='登陆'/> */}
                    {/* <Link to='/tab'>
                    <input type='submit' style={{width:'100%',height:50,margin:'0 auto',background:'rgb(29,174,169)',color:'#fff',borderRadius:'40px',fontSize:25,marginTop:20}} value='登录'/>
                    </Link> */}
                    <input type='submit' onClick={this.check} style={{width:'100%',height:50,margin:'0 auto',background:'#1daea9',color:'#fff',borderRadius:'40px',fontSize:30,marginTop:20}} value='登录'/>
                    
                    <p style={{width:'100%',margin:'0 auto',lineHeight:2,marginTop:10}}><Link to='/zhuce' style={{color:'rgb(29,174,169)'}}>手机快速注册</Link><span style={{float:'right'}}><Link to='/wangji' style={{color:'rgb(29,174,169)'}}>忘记密码</Link></span></p>
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
                
                {/* <Route  path='/tab' component={AppTab}/> */}
                <Route path='/login/zhuce' component={AppZhuce} />
                <Route path='/login/wangji' component={AppForget} />
                
            </div>
        )
    }
}


