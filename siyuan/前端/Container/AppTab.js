import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from './Home';
import Ins from './Ins';
import Shopping from './Shopping';
import ClockIn from './ClockIn';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',//默认进入
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }} >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{fontSize:22}} className='iconfont icon-home'></i>}
            selectedIcon={<i style={{fontSize:22}} className='iconfont icon-home'></i>}
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <Home/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22}} className='iconfont icon-linggan'></i>}
            selectedIcon={<i style={{fontSize:22}} className='iconfont icon-linggan'></i>}
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === 'ins'}
            onPress={() => {
              this.setState({
                selectedTab: 'ins',
              });
            }}
          >
            <Ins/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22}} className='iconfont icon-mall'></i>}
            selectedIcon={<i style={{fontSize:22}} className='iconfont icon-mall'></i>}
            title="商城"
            key="Friend"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Shopping/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22}} className='iconfont icon-wode'></i>}
            selectedIcon={<i style={{fontSize:22}} className='iconfont icon-wode'></i>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >


            {/* 打卡 */}
            <ClockIn/>

            

          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}