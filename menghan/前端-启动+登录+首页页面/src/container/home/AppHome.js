import React, { Component } from 'react'
// import { NavBar, Icon,Tabs,Carousel,Grid } from 'antd-mobile';

import {Link,Route} from 'react-router-dom'
   
export default class AppHome extends Component {
    render() {
        return (
            <div style={{width: '100%',height: '100%'}}>
                
                <div style={{height: '400px',background:'#eee'}}>
                    
                            <img
                                src={require('../../images/shoutu.png')}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                // this.setState({ imgHeight: 'auto' });
                                }}
                            />
                    <div style={{float:'right',margin:'10px'}} >
                        <i style={{fontSize:30,lineHeight:'30px',margin:'0 10px'}} className='iconfont icon-dianzan'></i>
                        <i style={{fontSize:30,lineHeight:'30px',margin:'0 10px'}} className='iconfont icon-haibijiahao'></i>            
                    </div>  
                    <div style={{width:'100%',margin:'auto',float:'left'}}><p>今天带着小巴去了公园，小巴开心得不行，明天带小巴去医院做日常检查，它该去做日常检查了。</p></div>      
                </div>
                <div style={{width:'100%',margin:'auto'}}>
                <Link to='/fabu'>
                    <i style={{float:'right',fontSize:60,lineHeight:'60px',margin:'20px 20px'}} className='iconfont icon-jiahao'></i>
                </Link>
                </div>
                
            </div>
        )
    }
}
