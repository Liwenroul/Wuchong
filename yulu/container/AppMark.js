import mBanner from './images/mBanner.jpg';
import goods1 from './images/goods1.jpg'
import goods2 from './images/goods2.jpg'
import gui from './images/gui.jpg'
import zhuo from './images/zhuo.jpg'
import chuang from './images/chuang.jpg'
import yi from './images/yi.jpg'
import ji from './images/ji.jpg'
import React, { Component } from 'react'
import { NavBar,Carousel,WingBlank,SearchBar ,Grid} from 'antd-mobile';
import banner1 from './images/banner1.jpg';
import banner2 from './images/banner2.jpg';
import { Flex, WhiteSpace} from 'antd-mobile';
const data=[{icon:chuang,text:'床'},{icon:zhuo,text:'桌'},{icon:yi,text:'椅'},{icon:ji,text:'几'}
  ,{icon:gui,text:'柜'},{icon:chuang,text:'床'},{icon:zhuo,text:'桌'},{icon:yi,text:'椅'},{icon:ji,text:'几'}
  ,{icon:gui,text:'柜'}];
export default class AppMark extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white',height:'80px'}}
                    rightContent={[
                        <i style={{fontSize:22}} className='iconfont icon-cart-full' key='car'></i>
                    ]}
                    
                    >商城</NavBar>
                <div style={{width:'100%' }}>
                    <SearchBar
                        placeholder="输入关键字搜索"
                        ref={ref => this.manualFocusInst = ref}/>
                    <WhiteSpace />
                    <Carousel
                    autoplay={true}
                    infinite
                    >
                        {[mBanner,banner1,banner2].map(val => (
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
                <div>
                    <Grid data={data} hasLine={false} columnNum={5}/>
                </div>
                <div className="flex-container">
                    <WhiteSpace size="lg" />
                    <WingBlank size="lg">
                        <Flex>
                        <Flex.Item>
                            <img src={goods1} style={{width:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={goods2} style={{width:'100%'}}/>
                        </Flex.Item>
                        </Flex>
                    </WingBlank>
                    <WhiteSpace size="lg" />
                    <WingBlank size="lg">
                        <Flex>
                        <Flex.Item>
                            <img src={goods1} style={{width:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={goods2} style={{width:'100%'}}/>
                        </Flex.Item>
                        </Flex>
                    </WingBlank>
                    <WhiteSpace size="lg" />
                    <WingBlank size="lg">
                        <Flex>
                        <Flex.Item>
                            <img src={goods1} style={{width:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={goods2} style={{width:'100%'}}/>
                        </Flex.Item>
                        
                        </Flex>
                    </WingBlank>
                    <WhiteSpace size="lg" />
                </div>
            </div>
        )
    }
}