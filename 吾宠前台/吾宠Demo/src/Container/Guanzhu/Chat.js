import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
// import Play from './play';
import img from '../../img/images/tou.png';
import Play from './Play';
// import { relative } from 'path';
export default class Chat extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:'',
            userAvatar:'',
            userId:'',
            value:'',
            num:[],
            arr:[],
            Ayy:[],
            brr:[],
            userID:'',
            useravatar:'',
            sendId:'',
            acceptId:'',
            crr:[],
        }
    }
    //更改input中的值
    handleChange=(e)=>{
        console.log(this.state.num)
        this.setState({
            value:e.target.value,
        })
        this.setState({
            num:[...this.state.num,this.state.value]
        })
        console.log("num:",this.state.num);
    }
    componentWillMount() {
        fetch('/denglu')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res[0].userId);
            this.setState({
                sendId:res[0].userId
            })
        })
    }
    //点击事件
    postVal=(e)=>{
        for(var i =0;i<this.state.num.length;i++){
            this.setState({
                arr:[...this.state.arr,i]
            })
            
        }
        console.log("arr:",this.state.arr)
        const registerValue = {"sendId":this.state.userID,"acceptId": this.state.userId,"content": this.state.value}
        if(this.state.value!=""){
           fetch('/chatVal', {
                 method: "POST",
                 headers: {
                     "Content-type":"application/json;charset=utf-8",
                 },
                 body:JSON.stringify(registerValue) ,
            }).then( res => res.text())
              .then( data => {
                  console.log(registerValue);
                  console.log(data);
              });
            }
            fetch('/chat')
                .then((res)=>res.json())
                .then((res)=>{
                    let ip0 =this.props.location.search;
                    let id = ip0.slice(8);
                    for(var i =0;i<res.length;i++){
                        console.log("userID:",this.state.userID,"sendId:",res[i].sendId,"accept:",id
                        ,"acceptid:",res[i].acceptId)
                        if(this.state.userID == res[i].sendId && id == res[i].acceptId){
                            this.setState({
                                Ayy:[...this.state.Ayy,res[i].content]
                            })
                        }
                    }
                    
                    for(var i =0;i<this.state.Ayy.length;i++){
                        this.setState({
                            brr:[...this.state.brr,i]
                        })
                    }
                })
                console.log("Ayy:",this.state.Ayy);
    }

        componentDidMount(){
            let ip0 =this.props.location.search;
            let id = ip0.slice(8);
            fetch('/denglu')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    userID:res[0].userId
                })
            })
            console.log("userID",this.state.userID)
            fetch('/userinfo')
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                    for(var i=0;i<res.length;i++){
                        if(res[i].userId == id){
                            this.setState({
                                userName:res[i].userName,
                                userAvatar:res[i].userAvatar,
                                userId:res[i].userId
                            });
                        }
                        if(res[i].userId == this.state.userID){
                            this.setState({
                                useravatar:res[i].userAvatar,
                            })
                        }
                    }
                    
                })
                fetch('/chat')
                .then((res)=>res.json())
                .then((res)=>{
                    for(var i =0;i<res.length;i++){
                        if((this.state.userID == res[i].sendId && id == res[i].acceptId)||
                        (this.state.userID == res[i].accept && id == res[i].sendId)){
                            this.setState({
                                crr:[...this.state.crr,res[i].content]
                            })
                        }
                        console.log("crr:",this.state.crr)
                        if(this.state.userID == res[i].sendId && id == res[i].acceptId){
                            this.setState({
                                Ayy:[...this.state.Ayy,res[i].content]
                            })
                        }
                    }
                    
                    for(var i =0;i<this.state.Ayy.length;i++){
                        this.setState({
                            brr:[...this.state.brr,i]
                        })
                        
                    }
                })
                console.log("brr:",this.state.brr)
                console.log("Ayy:",this.state.Ayy);
        }
        //跳转页面
    change=()=>{
        this.props.history.push('/follow')
    }
    render() {
        let {url} = this.props.match;
        return (
            
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000',height:'88px'}}
                    leftContent={[
                        <i style={{fontSize:22}} className='iconfont icon-back' onClick={this.change}></i>,
                    ]}
                        >{this.state.userName}</NavBar>
                    
                        <Link to={`/play?userId:`+this.state.userId} className='userschat'>
                        <img src={this.state.userAvatar} style={{height:'40px',width:'40px',marginTop:"50px"}}/>
                        <div className='novel'>
                            hello
                        </div>
                        </Link> 
                        <Route path={url+'/play?userId:userId'} component={Play}/>
                        <div>
                        {
                        this.state.brr.map((i)=>{
                            return(
                                <div>
                                    <Link to={`/play?userId:`+this.state.userID} className='userschat'>
                                    <img src={this.state.useravatar} style={{height:'40px',width:'40px',marginTop:"50px",marginLeft:"280px"}}/>
                                    <div className='novel' style={{marginLeft:"280px"}}>
                                        {this.state.Ayy[i]}
                                    </div>
                                    </Link> 
                                    <Route path={url+'/play?userId:userId'} component={Play}/>
                                </div>
                        )})
                        }
                        </div>
                        
                    <div style={{position:'relative',top:'420px'}}>
                    <input type='text' style={{width:300,height:30,float:'left'}}
                     onChange={this.handleChange} ref='input' 
                    //  defaultValue={this.state.value}
                     />
                    <button style={{width:60,height:30}}
                    //点击，将input中的数据传入数据库 
                    onClick={this.postVal}>发送</button>
                    </div>
                    
            </div>
        )
    }
}