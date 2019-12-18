import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import image from '../img/images/tou.png';
import { List } from 'antd-mobile';
// import Chat from './guanzhu/Chat';
import {withRouter} from 'react-router-dom'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Chat from './Guanzhu/Chat';
import { message } from 'antd';
const Item = List.Item;
const Brief = Item.Brief;

// const PlaceHolder = ({ className = '', ...restProps }) => (
//     <div className={`${className} placeholder`} {...restProps}>Block</div>
// );
class AppGuanzhu extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            userName:'',
            userAvatar:'',
            userId:'',
            userName1:[],
            userAvatar1:[],
            userId1:[],
            guanzhuId:[],
            concern:[],
            num:[],
            val:'',
            dispaly: 'block',
            display1:'none',
            userName2:'',
            userAvatar2:'',
            userId2:''
        }
    }
    // add=()=>{
    //     this.props.history.push('/chat?username=')
    // }
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
        this.props.history.push('/tab'+this.props.match.params.userId)
      }
      handleChange =(e)=>{
        this.setState({val:e.target.value});
      }
      searchClick=()=>{
          if(this.state.val == ''){
            this.setState(prevState => ({
                display1:'none',
                display:'block',
              }));
          }
          else{
              let message = this.state.val;
              for(var i = 0;i<this.state.num.length;i++){
                  if(this.state.userName1[i] == message){
                    this.setState(prevState => ({
                        display:'none',
                        display1:'block',
                        
                      }));
                      this.setState({
                        userName2:this.state.userName1[i],
                        userAvatar2:this.state.userAvatar1[i],
                        userId2:this.state.userId1[i]
                      })
                  }
              }
          }
      }
      handleKeydown = (e) =>{
        if(e.keyCode ===13){
            this.searchClick()
        }
      }
      componentDidMount(){
        //   console.log("网址URL",this.props.match.url)
        document.addEventListener("keydown", this.onKeyDown);
        // let page = this.props.match.params.id;
        // let id = 1;
        //获取登录的ID
        // fetch('/denglu')
        //     .then((res)=>res.json())
        //     .then((res)=>{
        //         console.log(res)
        //         this.setState({
        //             userId:res[0].userId
        //         })
        //     })
        let dengluId = this.props.match.params.userId
        this.setState({
            userId:dengluId
        })
        // console.log(this.state.userId)
            //获取关注的人的guanzhuID
            fetch('/guanzhu')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                for(var i = 0;i<res.length;i++){
                    if(res[i].userId == this.state.userId){
                        this.setState({
                            guanzhuId:[...this.state.guanzhuId,res[i].guanzhuId]
                        })
                    }
                }
                // console.log(this.state.guanzhuId)
                for(var i = 0 ; i <this.state.guanzhuId.length;i++){
                    for(var j =0;j<res.length;j++){
                        if(res[j].guanzhuId == this.state.userId && res[j].userId == this.state.guanzhuId[i]){
                            this.setState({
                                concern:[...this.state.concern,res[j].userId]
                            })
                            
                        }
                    }
                }
                // console.log("concern:",this.state.concern)
                // console.log("关注ID:",this.state.concern);
                for(var i =0;i<this.state.concern.length;i++){
                    this.setState({
                        num:[...this.state.num,i]
                    })
                    
                }
                // console.log("num:",this.state.num);
            })
            fetch('/userinfo')
            .then((res)=>res.json())
            .then((res)=>{
                // console.log(res);
                for(var i=0;i<this.state.concern.length;i++){
                    for(var j=0;j<res.length;j++){
                        if(res[j].userId == this.state.concern[i]){
                            this.setState({
                                userId1:[...this.state.userId1,res[j].userId],
                                userAvatar1:[...this.state.userAvatar1,res[j].userAvatar],
                                userName1:[...this.state.userName1,res[j].userName],
                            })
                        }
                    }
                }
                console.log("userId:",this.state.userId);
            })
            this.refs.input.focus();
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.onKeyDown)
      }
    render() {
        let {url} = this.props.match;
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
                >关注
                </NavBar>
            <div style={{ padding: '15px 0' }}>
                {/* <WingBlank> */}
                    {/* <PlaceHolder /> */}
                    <input
                    style={{width:'350px',height:'30px',marginLeft:'12px'}}
                    ref='input' defaultValue={this.state.val}
                    onKeyDown={this.handleKeydown}
                    onChange={this.handleChange}
                    className='form-control'
                    type='text'
                    />
            </div>
            <div>
                <div className='Mylist'>
                    <List renderHeader={() => '我的消息'} className="my-list1"
                    style={{display: this.state.display1}}
                    >
                        <div className='searchVal'>
                            <Link to={`/chat/userId`+this.state.userId2+"/dengluId"+this.props.match.params.userId}>
                            <img src={this.state.userAvatar2} style={{height:'80px',width:'80px',float:'left',marginTop:'5px'}}/>
                            </Link>
                            <div>
                                <Item extra={''}>{this.state.userName2}</Item>
                                <Item extra={'2分钟前'}>一条未读消息</Item>
                            </div>
                            <Route path={url+'/chat/userId:userId/dengluId:dengluId'} component={Chat}/>
                        </div>
                    </List>

                    <List renderHeader={() => '我的消息'} className="my-list"
                    style={{display: this.state.display}}
                    >
                        
                        {/* <Route path='/chat' component={Chat}> */}
                            {/* <img src={this.state.userAvatar} style={{height:'80px',width:'80px',float:'left',marginTop:'5px'}} onClick={this.add}/> */}
                        {/* </Route> */}
                        
                        {
                            this.state.num.map((i)=>{
                                return(
                                    <div>
                                        <Link to={`/chat/userId`+this.state.userId1[i]+"/dengluId"+this.props.match.params.userId}>
                                        <img src={this.state.userAvatar1[i]} style={{height:'80px',width:'80px',float:'left',marginTop:'5px'}}/>
                                        </Link>
                                        <div>
                                            <Item extra={''}>{this.state.userName1[i]}</Item>
                                            <Item extra={'2分钟前'}>一条未读消息</Item>
                                        </div>
                                        <Route path={url+'/chat/userId:userId/dengluId:dengluId'} component={Chat}/>
                                    </div>
                                )
                        
                            })
                        }
                    </List>
                    {/* <Route exact path='/chat' component={Chat}/> */}
                </div>
            </div>
            <div style={{width:'100%',height:'60px',display:'inline-block',position:'fixed',bottom:0,backgroundColor:'#fff',}}>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/tab'+this.state.userId}>
                        <i className='iconfont icon-shouye2' style={{fontSize:22,color:'gray'}}></i>
                        <p style={{color:'gray'}}>首页</p>
                    </Link>
                </div>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/activity/'+this.state.userId}>
                        <i className='iconfont icon-chongwuwanju' style={{fontSize:22,color:'gray'}}></i>
                        <p style={{color:'gray'}}>娱乐</p>
                    </Link>
                </div>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/clockin/'+this.state.userId}>
                        <i className='iconfont icon-chongwu' style={{fontSize:38}}></i>
                    </Link>
                </div>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/follow/'+this.state.userId}>
                        <i className='iconfont icon-guanzhu' style={{fontSize:22,color:'rgb(29,174,169)'}}></i>
                        <p style={{color:'rgb(29,174,169)'}}>关注</p>
                    </Link>
                </div>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/mine/'+this.state.userId}>
                        <i className='iconfont icon-wode' style={{fontSize:22,color:'gray'}}></i>
                        <p style={{color:'gray'}}>我的</p>
                    </Link>
                </div></div>
        </div>
        )
    }
}
AppGuanzhu = withRouter(AppGuanzhu);
export default AppGuanzhu;