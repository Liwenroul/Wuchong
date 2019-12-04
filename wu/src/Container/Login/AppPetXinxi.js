import React, { Component } from 'react'
import { NavBar, Icon,WingBlank} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'

export default class AppPetXinxi extends Component {
    render() {
        return (
            <div style={{background:'#fff'}}>
                <NavBar
                    style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                    rightContent={[
                        // <Link to='/login'>
                        <Icon type="right" key="0"  />
                        // </Link>
                    ]}
                    onClick={() => {window.location.href = 'http://localhost:3000/tab'}}
                    >添加宠物
                </NavBar>
                <WingBlank>
                <div style={{width:'100%',padding:'50px',background:'#fff'}}>
                    <img style={{width:'80%',marginLeft:'25px'}} src={require('../../img/images/tou.png')}/>
                </div>
                <div style={{height: '350px',background:'#fff'}}>
                    <input style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,borderRadius:'20px',textAlign:'center',border:'1px solid #33cccc'}} type='text' id='petname' name='petname' placeholder='宠物昵称' />
                    <input style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,borderRadius:'20px',textAlign:'center',border:'1px solid #33cccc'}} type='text'  id='sex' name='sex' placeholder='性别' />
                    <input style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,borderRadius:'20px',textAlign:'center',border:'1px solid #33cccc'}} type='text' id='age' name='age' placeholder='年龄' />
                    <Link to='/tab' style={{width:'100%',height:50,paddingLeft:'105px'}}>
                    <input type='submit' style={{width:'45%',height:50,background:'#1daea9',color:'#fff',borderRadius:'40px',fontSize:25,marginTop:20}} value='确定'/>
                    </Link>
                    
                </div>
                </WingBlank>
            </div>
        )
    }
}
