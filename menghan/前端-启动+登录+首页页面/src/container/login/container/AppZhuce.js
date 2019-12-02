import React, { Component } from 'react'
import { NavBar, Icon,WingBlank} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'
import AppPetXinxi from './AppPetXinxi';

export default class AppZhuce extends Component {
    render() {
        return (
            <div  >
                <NavBar
                    style={{background:'#1daea9',color:'black',height:68,fontSize:16}}
                    icon={<Icon type="left" />}
                    
                    onLeftClick={() => {window.history.back()}}
                    >注册
                </NavBar>
                <WingBlank>
                <div style={{height: '250px',background:'#eee'}}>
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20}}>
                        <label><i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-gerenxinxi'></i></label>
                        <input style={{width:'90%',margin:'0 auto',lineHeight:3,marginLeft:15,borderRadius:'10px'}} type='text' id='username' name='username' placeholder='用户名' />
                    </div>
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20}}>
                        <label><i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-wode'></i></label>
                        <input style={{width:'90%',margin:'0 auto',lineHeight:3,marginLeft:15,borderRadius:'10px'}} type='text' id='tel' name='tel' placeholder='手机号' />
                    </div>
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20}}>
                        <label><i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-chongwuleyuan'></i></label>
                        <input style={{width:'90%',margin:'0 auto',lineHeight:3,marginLeft:15,borderRadius:'10px'}} type='password'  id='pwd' name='pwd' placeholder='密码' />
                    </div>
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20}}>
                        <label><i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-yanjing'></i></label>
                        <input style={{width:'60%',margin:'0 auto',lineHeight:3,marginLeft:15,borderRadius:'10px'}} type='password'  id='ypwd' name='ypwd' placeholder='验证码' /><button style={{background:'#1daea9',width:'30%',float:'right',lineHeight:3,borderRadius:'10px'}}>获取验证码</button>
                    </div>
                    <Link to='/petxinxi'><input type='submit' style={{width:'100%',height:50,margin:'0 auto',background:'#1daea9',color:'#fff',borderRadius:'40px',fontSize:30,marginTop:20}} value='注册'/></Link>
                   
                    
                </div>
                </WingBlank>
                <Route path='/petxinxi' component={AppPetXinxi} />
            </div>
        )
    }
}


