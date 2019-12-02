import React, { Component } from 'react'
import { NavBar,Carousel,WingBlank } from 'antd-mobile';
import banner1 from './images/banner1.jpg';
import banner2 from './images/banner2.jpg';
import remen from './images/remen.jpg';
import retui from './images/retui.jpg';
import xuangou from './images/xuangou.jpg';
import shu from '../../images/1.jpg'
import { Flex, WhiteSpace} from 'antd-mobile';
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white',height:'80px'}}
                    >住吧家居</NavBar>
                <div style={{width:'100%' }}>
                    <Carousel
                    autoplay={true}
                    infinite
                    >
                        {[banner1,banner2].map(val => (
                            <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height:190 }}
                            >
                            <img src={`${val}`}
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                            />
                            </a>
                        ))}
                    </Carousel>
                </div>
                <div className="flex-container">
                    <WhiteSpace size="lg" />
                    <WingBlank size="lg">
                        <Flex>
                        <Flex.Item>
                            <img src={remen} style={{width:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={xuangou} style={{width:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={remen} style={{width:'100%'}}/>
                        </Flex.Item>
                        </Flex>
                    </WingBlank>
                    <WhiteSpace size="lg" />
                </div>
                <div>
                    <img src={shu} style={{float:'left'}}/>
                    <p style={{fontSize:'20px',marginLeft:'10px',float:'left'}}>热门推荐</p>
                    <img src={retui} style={{width:'100%'}}/>
                </div>
            </div>
        )
    }
}