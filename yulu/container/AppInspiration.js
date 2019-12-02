import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel,Flex,WingBlank,WhiteSpace } from 'antd-mobile';
import orange from './images/orange.jpg';
import children from './images/children.jpg'
const tabs = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' }
  ];
export default class AppInspiration extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white',height:'80px'}}
                    rightContent={[
                        <Icon key="1" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={children} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={children} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={children} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <WhiteSpace size="lg" />
                    </div>
                    <div>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={children} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={children} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={children} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={children} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={children} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={children} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <WhiteSpace size="lg" />
                    </div>
                    <div>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <WhiteSpace size="lg" />
                    </div>
                    <div>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <WhiteSpace size="lg" />
                    </div>
                    <div>
                    <Flex>
                        <WingBlank size='lg'>
                        <WhiteSpace size='lg'/>
                        <Flex.Item>
                            <img src={orange} style={{width:'100%'}}/>
                        </Flex.Item>
                        </WingBlank>
                        <WingBlank size='lg'>
                        <WhiteSpace size='lg'/>
                        <Flex.Item>
                            <img src={orange} style={{width:'100%'}}/>
                        </Flex.Item>
                        </WingBlank>  
                    </Flex>
                    <Flex>
                        <WingBlank size='lg'>
                        <WhiteSpace size='lg'/>
                        <Flex.Item>
                            <img src={orange} style={{width:'100%'}}/>
                        </Flex.Item>
                        </WingBlank>
                        <WingBlank size='lg'>
                        <WhiteSpace size='lg'/>
                        <Flex.Item>
                            <img src={orange} style={{width:'100%'}}/>
                        </Flex.Item>
                        </WingBlank>  
                    </Flex>
                    <Flex>
                        <WingBlank size='lg'>
                        <WhiteSpace size='lg'/>
                        <Flex.Item>
                            <img src={orange} style={{width:'100%'}}/>
                        </Flex.Item>
                        </WingBlank>
                        <WingBlank size='lg'>
                        <WhiteSpace size='lg'/>
                        <Flex.Item>
                            <img src={orange} style={{width:'100%'}}/>
                        </Flex.Item>
                        </WingBlank>  
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>    
                    <div>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <Flex>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>
                            <WingBlank size='lg'>
                            <WhiteSpace size='lg'/>
                            <Flex.Item>
                                <img src={orange} style={{width:'100%'}}/>
                            </Flex.Item>
                            </WingBlank>  
                        </Flex>
                        <WhiteSpace size="lg" />
                    </div>                
                </Tabs>
            </div>
        )
    }
}