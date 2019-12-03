import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class PetInfo extends Component {
    render() {
        return (
            <div>
                
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to='/wode'><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>我的宠物</span>
                    <Link to='/wode'><i className='iconfont icon-haibijiahao' style={{color:"#fff",float:'right',marginRight:15}}></i></Link>
                </div>
                <ul style={{listStyle:'none'}}>
                    <li style={{width:100,height:300,borderRadius:50,backgroundColor:'rgb(29,174,169)',textAlign:'center',marginLeft:20,marginTop:20}}>
                        <img style={{width:80,height:80,backgroundColor:'blue',borderRadius:40,marginTop:20}}/>
                        <h1 style={{marginTop:20}}>小巴</h1>
                        <i className='iconfont icon-haibijiahao' style={{fontSize:25}}></i>
                        <h2>5岁</h2>
                    </li>
                </ul>
            </div>
        )
    }
}
