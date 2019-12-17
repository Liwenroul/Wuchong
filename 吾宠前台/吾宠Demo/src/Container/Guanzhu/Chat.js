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
            crr:[],//全部符合条件的消息content
            acceptAyy:[],//接收对方发送的消息\
            sendAyy:[],//发送给对方的消息
            allnum:[],//acceptAyy的长度
            allId:[],
            allAvatar:[],
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
        this.setState({
            allnum:[],
            crr:[],
            allId:[],
            allAvatar:[]
        })
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
            let ip0 =this.props.location.search;
            let id = ip0.slice(8);
            // fetch('/chat')
            //     .then((res)=>res.json())
            //     .then((res)=>{
            //         let ip0 =this.props.location.search;
            //         let id = ip0.slice(8);
            //         for(var i =res.length-1;i>=0;i--){
            //             // console.log("userID:",this.state.userID,"sendId:",res[i].sendId,"accept:",id
            //             // ,"acceptid:",res[i].acceptId)
            //             if(this.state.userID == res[i].sendId && id == res[i].acceptId){
            //                 this.setState({
            //                     //将发送的消息加入到crr数组中
            //                     //crr数组中只包含发送的内容，
            //                     crr:[...this.state.crr,res[i].content],
            //                     allId:[...this.state.allId,res[i].sendId],
            //                 })
            //                 // break;
            //             }
            //         }
                 
            //         for(var i =0;i<this.state.crr.length;i++){
            //             this.setState({
            //                 allnum:[...this.state.allnum,i]
            //             })
            //         }
            //     })
               
            //     // console.log("Ayy:",this.state.Ayy);
            //     fetch('/userinfo')
            //     .then((res)=>res.json())
            //     .then((res)=>{
            //         for(var i = 0;i<res.length;i++){
            //             for(var j = 0;j<this.state.allId.length;j++){
            //                 if(res[i].userId == this.state.allId[j]){
            //                     this.setState({
            //                         allAvatar:[...this.state.allAvatar,res[i].userAvatar]
            //                     })
            //                 }
            //             }
            //         }
            //     })
            //     console.log("allAvatar:",this.state.allAvatar)
            //     console.log("crr:",this.state.crr)

            fetch('/chat')
            .then((res)=>res.json())
            .then((res)=>{
                for(var i =res.length-1;i>=0;i--){
                    if((this.state.userID == res[i].sendId && id == res[i].acceptId)||
                    (this.state.userID == res[i].acceptId && id == res[i].sendId))
                    {
                        this.setState({
                            crr:[...this.state.crr,res[i].content],
                            allId:[...this.state.allId,res[i].sendId],
                        })
                    }
                }
                for(var i =0;i<this.state.crr.length;i++){
                    this.setState({
                        allnum:[...this.state.allnum,i]
                    })
                }
                fetch('/userinfo')
                .then((res)=>res.json())
                .then((res)=>{
                    for(var i = 0;i<res.length;i++){
                        for(var j = 0;j<this.state.allId.length;j++){
                            if(res[i].userId == this.state.allId[j]){
                                this.setState({
                                    allAvatar:[...this.state.allAvatar,res[i].userAvatar]
                                })
                            }
                        }
                    }
                })
                })


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
                    for(var i =res.length-1;i>=0;i--){
                        if((this.state.userID == res[i].sendId && id == res[i].acceptId)||
                        (this.state.userID == res[i].acceptId && id == res[i].sendId))
                        {
                            this.setState({
                                crr:[...this.state.crr,res[i].content],
                                allId:[...this.state.allId,res[i].sendId],
                            })
                        }
                    }
                    for(var i =0;i<this.state.crr.length;i++){
                        this.setState({
                            allnum:[...this.state.allnum,i]
                        })
                    }
                    fetch('/userinfo')
                    .then((res)=>res.json())
                    .then((res)=>{
                        for(var i = 0;i<res.length;i++){
                            for(var j = 0;j<this.state.allId.length;j++){
                                if(res[i].userId == this.state.allId[j]){
                                    this.setState({
                                        allAvatar:[...this.state.allAvatar,res[i].userAvatar]
                                    })
                                }
                            }
                        }
                    })
                    })
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
                        <div>
                            {
                            this.state.allnum.map((i)=>{
                                return(
                                    <div>
                                        <Link to={`/play?userId:`+this.state.userID} className='userschat'>
                                        <div className='novel'>
                                        <img src={this.state.allAvatar[i]} style={{height:'40px',width:'40px'}}/>
                                            {this.state.crr[i]}
                                        </div>
                                        </Link> 
                                        <Route path={url+'/play?userId:userId'} component={Play}/>
                                    </div>
                            )
                        })
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