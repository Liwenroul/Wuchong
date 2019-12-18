import React,{Component}  from 'react';
import {Link,Route} from "react-router-dom";
import { TabBar } from 'antd-mobile';
import Mine from './Mine'
import AppHome from './AppHome';
import AppMe from './AppMe';
import ClockIn from './ClockIn';
import AppGuanzhu from './AppGuanzhu';


// import GetCity from './GetCity/GetCity';

export default class Tab extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      dengluId:this.props.match.params.userId
    };
  }
  componentDidMount(){
    this.setState({
      selectedTab: this.state.selectedTab,
      hidden: false,
      fullScreen: false
    })
  }
  // componentDidUpdate(){
  //   if(this.state.selectedTab=='yule'){
  //     this.setState({
  //       selectedTab: 'yule',
  //       hidden: false,
  //       fullScreen: false,
    
    
  // }
  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  // render() {
  //   return (
      // <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
      //   <TabBar
      //     unselectedTintColor="#949494"
      //     tintColor="rgb(29,174,169)"
      //     barTintColor="white"
      //   >
      //     <TabBar.Item
      //       title="首页"
      //       key="Life"
      //       icon={<i className='iconfont icon-shouye2'></i>
      //       }
      //       selectedIcon={//选中
      //         <i className='iconfont icon-shouye2' style={{fontSize:22}}></i>
      //       }
      //       selected={this.state.selectedTab === 'home'}//判断点的谁
      //       onPress={() => {
      //         this.setState({
      //           selectedTab: 'home',
      //         });
      //       }}
      //     >
      //     <AppHome dengluId={this.state.dengluId}/>
      //     </TabBar.Item>
      //     <TabBar.Item
      //        icon={<i className='iconfont icon-chongwuwanju'></i>
      //       }
      //       selectedIcon={//选中
      //         <i className='iconfont icon-chongwuwanju' style={{fontSize:22}}></i>
      //       }
      //       title="娱乐"
      //       key="Koubei"
      //       selected={this.state.selectedTab === 'yule'}
      //       onPress={() => {
      //         this.setState({
      //           selectedTab: 'yule',
      //         });
      //       }}
      //     >
      //       <AppMe dengluId={this.state.dengluId}/>
      //     </TabBar.Item>
      //     <TabBar.Item
      //       icon={<i className='iconfont icon-chongwu'></i>
      //     }
      //     selectedIcon={//选中
      //       <i className='iconfont icon-chongwu' style={{fontSize:22}}></i>
      //     }
      //       title="打卡"
      //       key="daka"
      //       selected={this.state.selectedTab === 'daka'}
      //       onPress={() => {
      //         console.log('打卡')
      //         this.setState({
      //           selectedTab: 'daka',
      //         });
      //       }}
      //     >
      //       <ClockIn/>
      //     </TabBar.Item>
      //     <TabBar.Item
      //       icon={<i className='iconfont icon-guanzhu'></i>
      //     }
      //     selectedIcon={//选中
      //       <i className='iconfont icon-guanzhu' style={{fontSize:22}}></i>
      //     }
      //       title="关注"
      //       key="Friend"
      //       selected={this.state.selectedTab === 'guanzhu'}
      //       onPress={() => {
      //         this.setState({
      //           selectedTab: 'guanzhu',
      //         });
      //       }}
      //     >
      //     <AppGuanzhu/>
      //     </TabBar.Item>
      //     <TabBar.Item
      //       icon={<i className='iconfont icon-wode'></i>
      //     }
      //     selectedIcon={//选中
      //       <i className='iconfont icon-wode' style={{fontSize:22}}></i>
      //     }
      //       title="我的"
      //       key="my"
      //       selected={this.state.selectedTab === 'wode'}
      //       onPress={() => {
      //         this.setState({
      //           selectedTab: 'wode',
      //         });
      //       }}
      //     >
      //       <Mine dengluId={this.state.dengluId}/>
      //     </TabBar.Item>
      //   </TabBar>
 
  render() {
    return (
      <div> 
        <div>
          {/* <AppHome/> */}
          <Route path={'/tab/'+this.state.dengluId} component={AppHome}/>
          <Route exact path={'/tab/yule/:dengluId'+this.state.dengluId} component={AppMe}/>
          <Route path={'/tab/daka/'+this.state.dengluId} component={ClockIn}/>
          <Route path={'/tab/guanzhu/'+this.state.dengluId} component={AppGuanzhu}/>
          <Route path={'/tab/wode/'+this.state.dengluId} component={Mine}/>
        </div>
        <div style={{position: 'fixed', height: '100%', width: '100%',top:"91%"}}>
            <ul style={{listStyle:"none",width:"100%",height:50,background:"red"}}>
                <Link to={"/tab/"+this.state.dengluId}><li style={{float:"left",width:50,height:40,textAlign:"center",background:"white",position:"relative",marginTop:5,marginLeft:"5%"}}>
                    <i className='iconfont icon-shouye2'></i>
                    <span style={{position:"absolute",left:10,top:20}}>首页</span>
                </li></Link>
                <Link to={"/tab/yule/"+this.state.dengluId}><li style={{float:"left",width:50,height:40,textAlign:"center",background:"white",position:"relative",marginTop:5,marginLeft:"6%"}}>
                    <i className='iconfont icon-shouye2'></i>
                    <span style={{position:"absolute",left:10,top:20}}>首页</span>
                </li></Link>
                <Link to={"/tab/daka/"+this.state.dengluId}><li style={{float:"left",width:50,height:40,textAlign:"center",background:"white",position:"relative",marginTop:5,marginLeft:"6%"}}>
                    <i className='iconfont icon-shouye2'></i>
                    <span style={{position:"absolute",left:10,top:20}}>首页</span>
                </li></Link>
                <Link to={"/tab/guanzhu/"+this.state.dengluId}><li style={{float:"left",width:50,height:40,textAlign:"center",background:"white",position:"relative",marginTop:5,marginLeft:"6%"}}>
                    <i className='iconfont icon-shouye2'></i>
                    <span style={{position:"absolute",left:10,top:20}}>首页</span>
                </li></Link>
                <Link to={"/tab/wode/"+this.state.dengluId}><li style={{float:"left",width:50,height:40,textAlign:"center",background:"white",position:"relative",marginTop:5,marginLeft:"6%"}}>
                    <i className='iconfont icon-shouye2'></i>
                    <span style={{position:"absolute",left:10,top:20}}>首页</span>
                </li></Link>
            </ul>
        </div>
      </div>
    );
  }
}

