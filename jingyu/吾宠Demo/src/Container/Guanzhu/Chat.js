import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
// import Play from './play';
import img from '../../img/images/tou.png';
// import { relative } from 'path';
export default class Chat extends Component {
    constructor(props){
        super();
        this.state={
            userName:'',
            userAvatar:'',
            userId:''
        }
    }
        componentDidMount(){
            // let page = this.props.match.params.id;
            fetch('/userinfo')
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                    this.setState({
                        userName:res[0].userName,
                        userAvatar:res[0].userAvatar,
                        userId:res[0].userId
                    });
                })
            
        }
    change=()=>{
        this.props.history.push('/follow')
    }
    render() {
        return (
            
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000',height:'88px'}}
                    leftContent={[
                        <i style={{fontSize:22}} className='iconfont icon-back' onClick={this.change}></i>,
                    ]}
                >username</NavBar>
                    
                        <Link to='/play' className='userschat'>
                        <img src={this.state.userAvatar} style={{height:'40px',width:'40px',marginTop:"50px"}}/>
                        <div className='novel'>
                            hello
                        </div>
                    </Link> 
                    
                    
                    <input style={{marginTop:430,width:300,height:30,float:'left'}}/>
                    <button style={{marginTop:430,width:60,height:30}}>发送</button>
            </div>
        )
    }
}