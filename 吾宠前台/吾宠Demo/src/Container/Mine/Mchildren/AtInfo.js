import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';
import '../../Guanzhu/guanzhu.css';



const data1 = Array.from(new Array(2)).map(() => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

export default class AtInfo extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        let start = this.props.location.search.indexOf("&&")
        console.log(this.props.location.search.slice(parseInt(start)+11));
        this.state={
            value:0,
            points:'已关注',
            data:[],
            userName:'',
            userAvatar:'',
            userId:'',
            dynamicImg:[],
            dynamicContent:[],
            dynamicId:[],
            num:[],
            ID:this.props.location.search.slice(parseInt(start)+11),
            id:'56',
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
                    const registerValue = {"Id":this.state.id,
                    "guanzhuId": this.state.userId,
                    "userId": this.state.ID}
                    console.log(registerValue);
                    fetch('/guanzhu', {
                            method: "POST",
                            headers: {
                                "Content-type":"application/json;charset=utf-8",
                            },
                            body:JSON.stringify(registerValue) ,
                        }).then( res => res.text())
                        .then( data => {
                            console.log(data);
                        });
                
            }
            else{
                this.setState({
                    points:'关注'
                })
                    fetch('guanzhu')
                    .then((res)=>res.json())
                    .then((res)=>{
                        for(var i =0;i<res.length;i++){
                            if(res.guanzhuId == this.state.userId){
                                this.setState({
                                    id:res.Id
                                })
                            }
                        }
                        const registerValue = {"Id":this.state.id,
                        "guanzhuId": this.state.userId,
                        "userId": this.state.ID}
                        console.log(registerValue);
                        fetch('/delguanzhu', {
                                method: "POST",
                                headers: {
                                    "Content-type":"application/json;charset=utf-8",
                                },
                                body:JSON.stringify(registerValue) ,
                            }).then( res => res.text())
                            .then( data => {
                                console.log(data);
                            });
                     
                    })
                    
            }
        })
    }
    componentDidMount(){
        let ip0 =this.props.location.search.split("&&");
        let id = ip0[0].slice(8);
        fetch('/userinfo')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                for(var i =0;i<res.length;i++){
                    if(res[i].userId == id){
                        this.setState({
                            userName:res[i].userName,
                            userAvatar:res[i].userAvatar,
                            userId:res[i].userId
                        });
                    }   
                }
                console.log("username:",this.state.userName,"userId:",this.state.userId);
                
            })
            fetch('/dynamic')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                for(var i = 0;i<res.length;i++){
                    if(res[i].userid == this.state.userId){
                        this.setState({
                            dynamicImg:[...this.state.dynamicImg,res[i].dynamicImg],
                            dynamicContent:[...this.state.dynamicContent,res[i].dynamicContent]
                        });
                    }
                }
                for(var i = 0;i<this.state.dynamicContent.length;i++){
                    this.setState({
                        num:[...this.state.num,i],
                    })
                }
                console.log("dynamicImg:",this.state.dynamicImg,"dynamicContent:",this.state.dynamicContent);
                console.log("num:",this.state.num)
            })
    }
    render() {
        return (
            <div>
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to={'/myAttention/'+this.state.ID}><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>我的关注</span>
                </div>
                <div style={{heigth:'100px',width:'100%'}} className='userPlay'>
                    <img src={this.state.userAvatar} style={{height:'100px',width:'100px',position:'relative',left:'0px'}}/>
                    <div style={{width:'200px',position:'absolute',left:'120px',top:'122px'}}>
                        <p>{this.state.userName}</p>
                        <p>{this.state.userId}</p>
                    </div>
                <div style={{fontSize:22,paddingTop:'30px',width:'200px',heigth:'100px',position:'relative',top:-90,left:280}} onClick={this.changeValue}>{this.state.points}</div>
                </div>
                <div className='userspace'>
                    {
                        this.state.num.map((i)=>{
                            return(
                                <div style={{height:175}}>
                                    <img src={this.state.dynamicImg[i]} style={{ width: '135px', height: '100px' ,marginTop:0}} alt="" className='space'/>
                                    <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                        {this.state.dynamicContent[i]}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}