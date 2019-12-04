import React, { Component } from 'react'
import { NavBar,Flex,WhiteSpace} from 'antd-mobile';
import activity1 from '../img/images/huodong1.jpg';
import activity2 from '../img/images/huodong2.jpg';
import {Link,Router,Route} from 'react-router-dom';  
// import Detail1 from './container/Detail1'

export default class AppMe extends Component {
    render() {
        return (
            <div>
                <NavBar style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}>
                    <Link to='/position' style={{color:'white'}}>
                        石家庄
                        <i style={{fontSize:22,color:'white'}} className='iconfont icon-jiantouxia'></i>
                    </Link>
                </NavBar>
                <div className='container'>
                    <WhiteSpace size="lg" />
                    <Link to={`/detail1`}>
                        <Flex>
                            <Flex.Item><img src={activity1} style={{width:'100%'}}/></Flex.Item>
                        </Flex>
                    </Link>
                    <WhiteSpace size="lg" />
                    <Flex>
                        <Flex.Item><img src={activity2} style={{width:'100%'}}/></Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>
            </div>
        )
    }
}