import React from 'react';
import { TabBar } from 'antd-mobile';
// import AppHome from './AppHome';
// import AppInspiration from './AppInspiration';
// import AppMark from './AppMark'
import AppMe from './Activity/AppMe'
// import {Link,Router,Route} from 'react-router-dom';  
// import Detail1 from './Router/Detail1'
// import Signup from './Router/Signup'
// import Position from './Activity/container/Position'


export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'||'yellowTab',
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
            key="0"
            icon={<i style={{fontSize:22}} className='iconfont icon-1'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-1'></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            {/* <AppHome/> */}
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22}} className='iconfont icon-bulb'></i>
              
            }
            selectedIcon={<i style={{fontSize:22}} className='iconfont icon-dengpao'></i>
              
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            {/* <AppInspiration/> */}
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22}} className='iconfont icon-shangdian'></i>
            }
            selectedIcon={<i style={{fontSize:22}} className='iconfont icon-shangdian'></i>
            }
            title="商城"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab1',
              });
            }}
          >
           {/* <AppMark/> */}
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22}} className='iconfont icon-shangdian'></i>
            }
            selectedIcon={<i style={{fontSize:22}} className='iconfont icon-shangdian'></i>
            }
            title="商城"
            key="Friend1"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
           {/* <AppMark/> */}
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22}} className='iconfont icon-wode'></i>
            }
            selectedIcon={<i style={{fontSize:22}} className='iconfont icon-wode'></i>
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <AppMe/>

          </TabBar.Item>

        </TabBar>
      </div>
    );
  }
}