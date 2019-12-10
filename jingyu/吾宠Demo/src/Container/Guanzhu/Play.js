import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';
import img from '../../img/images/tou.png'
import { Grid } from 'antd-mobile';
// import Chat from './chat'
import './guanzhu.css'

const data = Array.from(new Array(2)).map((_val, i) => ({
  icon: require('../../img/images/1.jpg'),
  text: `name${i}`,
}));

const data1 = Array.from(new Array(2)).map(() => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

export default class Play extends Component {
    constructor(props){
        super();
        this.state={
            value:0,
            points:'已关注',
            userName:'',
            userAvatar:'',
            userId:''
        }
    }
    change = () =>{
        this.props.history.push('./chat');
    }
    changeValue=()=>{
        parseInt(this.state.value++);
        console.log(parseInt(this.state.value));
        this.setState(()=>{
            if(this.state.value % 2==0){
                this.setState({
                    points:'已关注'
                })
                
            }
            else{
                this.setState({
                    points:'关注'
                })
                
            }
        })
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
            fetch('/dynamic')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    dynamicImg:res[0].dynamicImg,
                    dynamicContent:res[0].dynamicContent
                    
                });
            })
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000',height:'88px'}}
                    leftContent={[  
                        <i style={{fontSize:22}} className='iconfont icon-back' onClick={this.change}></i>,
                    ]}
                >wuchongxiu</NavBar>
                <div style={{heigth:'100px',width:'100%'}} className='userPlay'>
                    <img src={this.state.userAvatar} style={{height:'100px',width:'100px',position:'relative',left:'0px'}}/>
                    <div style={{width:'200px',position:'absolute',left:'120px',top:'122px'}}>
                        <p>{this.state.userName}</p>
                        <p>{this.state.userId}</p>
                    </div>
                <div style={{fontSize:22,paddingTop:'30px',width:'200px',heigth:'100px',position:'relative',top:-90,left:280}} onClick={this.changeValue}>{this.state.points}</div>
                </div>
                <div className='userspace'>
                        <Grid data={data1}
                        columnNum={2}
                        renderItem={dataItem => (

                            <div style={{height:175}}>
                                <img src={this.state.dynamicImg} style={{ width: '135px', height: '100px' ,marginTop:0}} alt="" className='space'/>
                                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                    {this.state.dynamicContent}
                                </div>
                            </div>
                        )}
                        />
                </div>
            </div>
        )
    }
}