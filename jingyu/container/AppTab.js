import React from 'react';
import { TabBar } from 'antd-mobile';
import AppGuanzhu from './AppGuanzhu';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="shouye"
            icon={<i style={{fontSize:22}} className='iconfont icon-shouye2'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-shouye2'></i>
            }
            selected={this.state.selectedTab === 'shouye'}
            onPress={() => {
              this.setState({
                selectedTab: 'shouye',
              });
            }}
          >
            {/* <AppHome/> */}
          </TabBar.Item>
          <TabBar.Item
            title="娱乐"
            key="play"
            icon={<i style={{fontSize:22}} className='iconfont icon-chongwuwanju'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-chongwuwanju'></i>
            }
            selected={this.state.selectedTab === 'play'}
            onPress={() => {
              this.setState({
                selectedTab: 'play',
              });
            }}
          >
            {/* <AppPlay/> */}
          </TabBar.Item>
          <TabBar.Item
            title="打卡"
            key="daka"
            icon={<i style={{fontSize:22}} className='iconfont icon-chongwu'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-chongwu'></i>
            }
            dot
            selected={this.state.selectedTab === 'daka'}
            onPress={() => {
              this.setState({
                selectedTab: 'daka',
              });
            }}
          >
            {/* <Appdaka/> */}
          </TabBar.Item>
          <TabBar.Item
            title="关注"
            key="guanzhu"
            icon={<i style={{fontSize:22}} className='iconfont icon-guanzhu'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-guanzhu'></i>
            }
            selected={this.state.selectedTab === 'guanzhu'}
            onPress={() => {
              this.setState({
                selectedTab: 'guanzhu',
              });
            }}
          >
            <AppGuanzhu/>
          </TabBar.Item>
          <TabBar.Item
            title="我的"
            key="wode"
            icon={<i style={{fontSize:22}} className='iconfont icon-wode'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-wode'></i>
            }
            selected={this.state.selectedTab === 'wode'}
            onPress={() => {
              this.setState({
                selectedTab: 'wode',
              });
            }}
          >
            {/* <AppMy/> */}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}