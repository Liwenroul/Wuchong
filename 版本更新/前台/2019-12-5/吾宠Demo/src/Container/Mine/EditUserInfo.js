import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class EditUserInfo extends Component {
    render() {
        return (
            <div style={{background:'#fff'}}>
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to='/PersonalInfo'><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>编辑信息</span>
                </div>
                <div style={{color:'rgb(29,174,169)',fontSize:18,marginTop:20,marginLeft:20}}>
                    用户名：
                    <input type='text' style={{border:'1px solid #fff',borderBottom:'1px solid rgb(29,174,169)'}}/>
                </div>
                <div style={{color:'rgb(29,174,169)',fontSize:18,marginTop:20,marginLeft:20}}>
                    吾宠号：
                    <input type='text' style={{border:'1px solid #fff',borderBottom:'1px solid rgb(29,174,169)'}}/>
                </div>
            </div>
        )
    }
}
