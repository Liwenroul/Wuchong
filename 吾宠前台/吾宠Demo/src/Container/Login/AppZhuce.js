import React, { Component } from 'react'
import { NavBar, Icon,WingBlank} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'
import AppPetXinxi from './AppPetXinxi';

export default class AppZhuce extends Component {
    render() {
        return (
            <div  >
                <NavBar
                    style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                    icon={<Icon type="left" />}
                    
                    onLeftClick={() => {window.history.back()}}
                    >注册
                </NavBar>
                <WingBlank>
                {/* height: '250px',background:'#eee' */}
                <div style={{}}>
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,position:"relative"}}>
                        <i style={{fontSize:22,color:'rgb(29,174,169)'}} className='iconfont icon-gerenxinxi'></i>
                        <input style={{width:'90%',lineHeight:3,marginLeft:10,borderRadius:'10px',paddingLeft:5,position:"absolute",top:10,border:'1px solid rgb(29,174,169)'}} type='text' id='username' name='username' placeholder='用户名' />
                    </div>
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,position:"relative"}}>
                        <label><i style={{fontSize:22,color:'rgb(29,174,169)'}} className='iconfont icon-wode'></i></label>
                        <input style={{width:'90%',lineHeight:3,marginLeft:10,borderRadius:'10px',paddingLeft:5,position:"absolute",top:10,border:'1px solid rgb(29,174,169)'}} type='text' id='tel' name='tel' placeholder='手机号' />
                    </div>
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,position:"relative"}}>
                        <label><i style={{fontSize:22,color:'rgb(29,174,169)'}} className='iconfont icon-chongwuleyuan'></i></label>
                        <input style={{width:'90%',lineHeight:3,marginLeft:10,borderRadius:'10px',paddingLeft:5,position:"absolute",top:10,border:'1px solid rgb(29,174,169)'}} type='password'  id='pwd' name='pwd' placeholder='密码' />
                    </div>
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,position:"relative"}}>
                        <label><i style={{fontSize:22,color:'rgb(29,174,169)'}} className='iconfont icon-yanjing'></i></label>
                        <input style={{width:'50%',lineHeight:3,marginLeft:10,borderRadius:'10px',paddingLeft:5,position:"absolute",top:10,border:'1px solid rgb(29,174,169)'}} type='password'  id='ypwd' name='ypwd' placeholder='验证码' /><button style={{background:'#1daea9',width:'30%',float:'right',lineHeight:3,borderRadius:'10px',marginTop:8}}>获取验证码</button>
                    </div>
                    <Link to='/petxinxi'><input type='submit' style={{width:'100%',height:50,margin:'0 auto',background:'#1daea9',color:'#fff',borderRadius:'40px',fontSize:25,marginTop:20}} value='注册'/></Link>
                   
                    
                </div>
                </WingBlank>
                <Route path='/petxinxi' component={AppPetXinxi} />
            </div>
        )
    }
}


