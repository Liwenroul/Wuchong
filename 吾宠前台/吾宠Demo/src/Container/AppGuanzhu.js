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
        this.props.history.push('/tab')
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
        document.addEventListener("keydown", this.onKeyDown);
        // let page = this.props.match.params.id;
        // let id = 1;
        fetch('/denglu')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    userId:res[0].userId
                })
            })
        // fetch('/userinfo')
        //     .then((res)=>res.json())
        //     .then((res)=>{
        //         console.log(res)
        //         for(var i =0;i<res.length;i++){
        //             if(res[i].userId == this.state.id){
        //                 this.setState({
                            // userName:res[i].userName,
                            // userAvatar:res[i].userAvatar,
                            // userId:res[i].userId
                //         });
                //     }   
                // }
                // console.log("username:",this.state.userName,"userId:",this.state.userId);
            // })
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
                console.log("关注ID:",this.state.guanzhuId);
                for(var i =0;i<this.state.guanzhuId.length;i++){
                    this.setState({
                        num:[...this.state.num,i]
                    })
                    
                }
                console.log("num:",this.state.num);
            })
            fetch('/userinfo')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                for(var i=0;i<this.state.guanzhuId.length;i++){
                    for(var j=0;j<res.length;j++){
                        if(res[j].userId == this.state.guanzhuId[i]){
                            this.setState({
                                userId1:[...this.state.userId1,res[j].userId],
                                userAvatar1:[...this.state.userAvatar1,res[j].userAvatar],
                                userName1:[...this.state.userName1,res[j].userName]
                            })
                        }
                    }
                }
                console.log("username:",this.state.userName,"userId:",this.state.userId);
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
                >关注</NavBar>
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
                            <Link to={`/chat?userId:`+this.state.userId2}>
                            <img src={this.state.userAvatar2} style={{height:'80px',width:'80px',float:'left',marginTop:'5px'}}/>
                            </Link>
                            <div>
                                <Item extra={'time'}>{this.state.userName2}</Item>
                                <Item extra={'content'}>wordnum</Item>
                            </div>
                            <Route path={url+'?userId:userId'} component={Chat}/>
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
                                        <Link to={`/chat?userId:`+this.state.userId1[i]}>
                                        <img src={this.state.userAvatar1[i]} style={{height:'80px',width:'80px',float:'left',marginTop:'5px'}}/>
                                        </Link>
                                        <div>
                                            <Item extra={'time'}>{this.state.userName1[i]}</Item>
                                            <Item extra={'content'}>wordnum</Item>
                                        </div>
                                        <Route path={url+'?userId:userId'} component={Chat}/>
                                    </div>
                                )
                        
                            })
                        }
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