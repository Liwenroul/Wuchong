import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import image from '../images/inner.png';
import img1 from '../images/lg.png';
import img2 from '../images/banner1.png';
import img3 from '../images/banner2.png';
import { List } from 'antd-mobile';
import Chat from './guanzhu/chat';
import {withRouter} from 'react-router-dom'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
const Item = List.Item;
const Brief = Item.Brief;

// const PlaceHolder = ({ className = '', ...restProps }) => (
//     <div className={`${className} placeholder`} {...restProps}>Block</div>
// );
class AppGuanzhu extends Component {
    constructor(props){
        super(props);
    }
    add=()=>{
        this.props.history.push('/chat')
    }
      onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
      handleClick = () => {
        this.manualFocusInst.focus();
      };
     
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000',height:'88px'}}
                    rightContent={[
                        <i style={{fontSize:22}} className='iconfont icon-gouwuche'></i>,
                    ]}
                >关注</NavBar>
            <div style={{ padding: '15px 0' }}>
                <WingBlank>
                    {/* <PlaceHolder /> */}
                    <div>
                        <SearchBar placeholder="搜索" maxLength={8} />
                        <WhiteSpace />
                    </div>
                </WingBlank>
            </div>
            <div>
                <div>
                    <List renderHeader={() => '我的消息'} className="my-list">
                        {/* <Route path='/chat' component={Chat}> */}
                            <img src={image} style={{height:'80px',width:'80px',float:'left',marginTop:'5px'}} onClick={this.add}/>
                        {/* </Route> */}
                        <div>
                        <Item extra={'time'}>username</Item>
                        <Item extra={'content'}>worldnum</Item>
                        </div>      
                        <img src={img1} style={{height:'80px',width:'80px',float:'left',marginTop:'5px'}} onClick={this.add}/>
                        <div>
                        <Item extra={'time'}>username</Item>
                        <Item extra={'content'}>worldnum</Item>
                        </div>
                        <img src={img2} style={{height:'80px',width:'80px',float:'left',marginTop:'5px'}} onClick={this.add}/>
                        <div>
                        <Item extra={'time'}>username</Item>
                        <Item extra={'content'}>worldnum</Item>
                        </div>
                        <img src={img3} style={{height:'80px',width:'80px',float:'left',marginTop:'5px'}} onClick={this.add}/>
                        <div>
                        <Item extra={'time'}>username</Item>
                        <Item extra={'content'}>worldnum</Item>
                        </div>
                    </List>
                    {/* <Route exact path='/chat' component={Chat}/> */}
                </div>
            </div>
        </div>
        )
    }
}
AppGuanzhu = withRouter(AppGuanzhu);
export default AppGuanzhu;