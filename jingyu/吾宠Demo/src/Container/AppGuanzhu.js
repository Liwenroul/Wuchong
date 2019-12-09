import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import image from '../img/images/tou.png';
import { List } from 'antd-mobile';
// import Chat from './guanzhu/Chat';
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
        this.state = {
            data:[],
            mName:''
        }
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
      change2 = () => {
        this.props.history.push('/tab')
      }
      componentDidMount(){
        // let page = this.props.match.params.id;
        fetch('/manager')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    data: res.data.content,
                    mName:res.data.mName
                });
            })
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                    rightContent={[
                        <i style={{fontSize:22}} className='iconfont icon-gouwuche'></i>,
                    ]}
                    leftContent={[
                        <i style={{fontSize:22}} className='iconfont icon-back' onClick={this.change2}></i>,
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
                        <Item extra={'time'}>mName</Item>
                        <Item extra={'content'}>wordnum</Item>
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