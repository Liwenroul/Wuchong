import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './home/AppHome';
// import AppIdea from './AppIdea';
// import AppShop from './AppShop';
// import AppMy from './AppMy';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'shouye',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="yellow"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-shouye2'></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-shouye2'></i>
            }
            selected={this.state.selectedTab === 'shouye'}
            onPress={() => {
              this.setState({
                selectedTab: 'shouye',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="娱乐"
            key="Friend"
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-shouye'></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-shouye'></i>
            }
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >娱乐
            {/* <AppIdea/> */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="打卡"
            key="Koubei"
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-chongwu'></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-chongwu'></i>
            }
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >宠物打卡
            {/* <AppShop/> */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="关注"
            key="Kou"
            dot
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-guanzhu'></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-guanzhu'></i>
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >关注
            {/* <AppShop/> */}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="my"
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-wode'></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-wode'></i>
            }
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >my
            {/* <AppMy/> */}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}