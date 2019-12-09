import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import {Link} from 'react-router-dom';

import { createRequireFromPath } from 'module';

export default class JoinActive extends Component {
    render() {
        return (
            <div>
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to='/mine'><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>参与活动</span>
                </div>
                <div>
                    {/* <ul> */}
                        <div style={{width:300,height:100,marginLeft:37,marginTop:20,borderRadius:15,overflow:'hidden',position:'relative'}}>
                            <img src={require("../../img/images/homelun1_02.jpg")}/>
                            <p style={{float:'left',position:'absolute',bottom:-20,left:10,fontSize:25,color:'white'}}>爱牙牙:<span style={{fontSize:16}}>秀出你的宠物牙齿...</span></p>
                        </div>
                    {/* </ul> */}
                </div>
            </div>
        )
    }
}
