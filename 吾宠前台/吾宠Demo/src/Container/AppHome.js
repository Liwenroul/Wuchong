import React, { Component } from 'react'
// import { NavBar, Icon,Tabs,Carousel,Grid } from 'antd-mobile';

import {Link,Route} from 'react-router-dom'
import Contentdy from './Router/Contentdy';


   
// var times = 0;
// var num =0;
export default class AppHome extends Component {
    
    // dianZan =()=> {            
    //     var btn = document.getElementById("zan");
    //         times++;
    //         if (times % 2 === 1) {
    //                 btn.style.color = "red";
    //         }
    //         if (times % 2 === 0) {
    //                 btn.style.color = "gray";
    //         }           
    // };
    // guanZhu =()=> {            
    //     var btn = document.getElementById("zhu");
    //         num++;
    //         if (num % 2 === 1) {
    //                 btn.style.color = "red";
    //         }
    //         if (num % 2 === 0) {
    //                 btn.style.color = "gray";
    //         }           
    // };


    render() {
        return (
            <div style={{width: '100%',height: '100%'}}>
                
                {/* <div style={{height: '400px',background:'#eee'}}>
                    
                            <img
                                src={require('../img/images/shoutu.png')}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                // this.setState({ imgHeight: 'auto' });
                                }}
                            />
                    <div style={{float:'right',margin:'10px'}} >
                        <i style={{fontSize:30,lineHeight:'30px',margin:'0 10px'}} id="zan" className='iconfont icon-dianzan' onClick={this.dianZan}></i>
                        <i style={{fontSize:30,lineHeight:'30px',margin:'0 10px'}} id="zhu" className='iconfont icon-haibijiahao' onClick={this.guanZhu}></i>
                    </div>  
                    <div style={{width:'100%',margin:'auto',float:'left'}}><p>今天带着小巴去了公园，小巴开心得不行，明天带小巴去医院做日常检查，它该去做日常检查了。</p></div>      
                </div> */}
                <Contentdy/>
                <div style={{width:'100%',margin:'auto'}}>
                <Link to='/fabu'>
                    <i style={{float:'right',fontSize:60,lineHeight:'60px',margin:'20px 20px',color:'rgb(29,174,169)',position:"absolute",top:500,right:15}} className='iconfont icon-jiahao'></i>
                </Link>
                </div>
                
            </div>
        )
    }
}
