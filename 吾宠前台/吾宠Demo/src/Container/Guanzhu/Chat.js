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
        // console.log(this.state.num)
        this.setState({
            value:e.target.value,
        })
        this.setState({
            num:[...this.state.num,this.state.value]
        })
        // console.log("num:",this.state.num);
    }
    componentWillMount() {
        this.setState({
            allnum:[],
            crr:[],
            allId:[],
            allAvatar:[]
        })
        // fetch('/denglu')
        // .then((res)=>res.json())
        // .then((res)=>{
        //     // console.log(this.props.location.search.slice(8,9));
        //     this.setState({
        //         sendId: this.props.match.params.userId
        //     })
        // })
            let ip0 =this.props.location.search;
            let id = this.props.match.params.userId;
            fetch('/denglu')
            .then((res)=>res.json())
            .then((res)=>{
                // console.log(res)
                this.setState({
                    userID: this.props.match.params.userId,
                    sendId: this.props.match.params.userId
                })
            })
            // console.log("userID",this.state.userID)
            fetch('/userinfo')
                .then((res)=>res.json())
                .then((res)=>{
                    // console.log(res)
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
                    console.log(res)
                    for(var i =res.length-1;i>=0;i--){
                        // console.log(res[i])
                        if((this.state.userID == res[i].sendId && this.props.match.params.dengluId == res[i].acceptId)||
                        (this.state.userID == res[i].acceptId && this.props.match.params.dengluId == res[i].sendId))
                        {
                            // console.log(i)
                            this.setState({
                                crr:[...this.state.crr,res[i].content],
                                allId:[...this.state.allId,res[i].acceptId],
                            })
                        }
                    }
                    // console.log(this.state.crr)
                    // console.log(this.state.allId)
                    for(var i =0;i<this.state.crr.length;i++){
                        this.setState({
                            allnum:[...this.state.allnum,i]
                        })
                    }
                    fetch('/userinfo')
                    .then((res)=>res.json())
                    .then((res)=>{
                        // for(var i = 0;i<res.length;i++){
                        //     for(var j = 0;j<this.state.allId.length;j++){
                        //         if(res[i].userId == this.state.allId[j]){
                        //             this.setState({
                        //                 allAvatar:[...this.state.allAvatar,res[i].userAvatar]
                        //             })
                        //         }
                        //     }
                        // }
                        // console.log(this.state.allAvatar)
                        for(var i = 0;i<this.state.allId.length;i++){
                            for(var j=0;j<res.length;j++){
                                if(res[j].userId == this.state.allId[i]){
                                    this.setState({
                                        allAvatar:[...this.state.allAvatar,res[j].userAvatar]
                                    })
                                }
                            }
                        }
                    })
                    })
                    console.log(this.state.allAvatar)

    }
    //点击事件
    postVal=(e)=>{
        this.setState({
            allnum:[],
            crr:[],
            allId:[],
            allAvatar:[]
        })
        let dengluId = this.props.match.params.dengluId;
        let lll=this.props.match.params.userId;
        // console.log("网址解决",lll)
        // console.log("dengluId:",dengluId);
        const registerValue = {"sendId":this.state.userID,"acceptId": dengluId,"content": this.state.value}
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

            fetch('/chat')
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                    for(var i =res.length-1;i>=0;i--){
                        // console.log(res[i])
                        if((this.state.userID == res[i].sendId && this.props.match.params.dengluId == res[i].acceptId)||
                        (this.state.userID == res[i].acceptId && this.props.match.params.dengluId == res[i].sendId))
                        {
                            // console.log(i)
                            this.setState({
                                crr:[...this.state.crr,res[i].content],
                                allId:[...this.state.allId,res[i].acceptId],
                            })
                        }
                    }
                    // console.log(this.state.crr)
                    // console.log(this.state.allId)
                    for(var i =0;i<this.state.crr.length;i++){
                        this.setState({
                            allnum:[...this.state.allnum,i]
                        })
                    }
                    fetch('/userinfo')
                    .then((res)=>res.json())
                    .then((res)=>{
                        for(var i = 0;i<this.state.allId.length;i++){
                            for(var j=0;j<res.length;j++){
                                if(res[j].userId == this.state.allId[i]){
                                    this.setState({
                                        allAvatar:[...this.state.allAvatar,res[j].userAvatar]
                                    })
                                }
                            }
                        }
                        console.log(this.state.allAvatar)
                    })
                    })
                    // console.log(this.state.allAvatar)

    }

        componentDidMount(){
            console.log(this.props.match.params.userId,this.props.match.params.dengluId)
            // console.log("网址2：",this.props.match)
            // let ip0 =this.props.location.search;
            // let id = this.props.match.params.userId;
            // fetch('/denglu')
            // .then((res)=>res.json())
            // .then((res)=>{
            //     // console.log(res)
            //     this.setState({
            //         userID: this.props.match.params.userId
            //     })
            // })
            // // console.log("userID",this.state.userID)
            // fetch('/userinfo')
            //     .then((res)=>res.json())
            //     .then((res)=>{
            //         // console.log(res)
            //         for(var i=0;i<res.length;i++){
            //             if(res[i].userId == id){
            //                 this.setState({
            //                     userName:res[i].userName,
            //                     userAvatar:res[i].userAvatar,
            //                     userId:res[i].userId
            //                 });
            //             }
            //             if(res[i].userId == this.state.userID){
            //                 this.setState({
            //                     useravatar:res[i].userAvatar,
            //                 })
            //             }
            //         }
                    
            //     })
            //     fetch('/chat')
            //     .then((res)=>res.json())
            //     .then((res)=>{
            //         console.log(res)
            //         for(var i =res.length-1;i>=0;i--){
            //             // console.log(res[i])
            //             if((this.state.userID == res[i].sendId && this.props.match.params.dengluId == res[i].acceptId)||
            //             (this.state.userID == res[i].acceptId && this.props.match.params.dengluId == res[i].sendId))
            //             {
            //                 // console.log(i)
            //                 this.setState({
            //                     crr:[...this.state.crr,res[i].content],
            //                     allId:[...this.state.allId,res[i].acceptId],
            //                 })
            //             }
            //         }
            //         // console.log(this.state.crr)
            //         // console.log(this.state.allId)
            //         for(var i =0;i<this.state.crr.length;i++){
            //             this.setState({
            //                 allnum:[...this.state.allnum,i]
            //             })
            //         }
            //         fetch('/userinfo')
            //         .then((res)=>res.json())
            //         .then((res)=>{
            //             // for(var i = 0;i<res.length;i++){
            //             //     for(var j = 0;j<this.state.allId.length;j++){
            //             //         if(res[i].userId == this.state.allId[j]){
            //             //             this.setState({
            //             //                 allAvatar:[...this.state.allAvatar,res[i].userAvatar]
            //             //             })
            //             //         }
            //             //     }
            //             // }
            //             // console.log(this.state.allAvatar)
            //             for(var i = 0;i<this.state.allId.length;i++){
            //                 for(var j=0;j<res.length;j++){
            //                     if(res[j].userId == this.state.allId[i]){
            //                         this.setState({
            //                             allAvatar:[...this.state.allAvatar,res[j].userAvatar]
            //                         })
            //                     }
            //                 }
            //             }
            //         })
            //         })
            //         console.log(this.state.allAvatar)
        }
        //跳转页面
    change=()=>{
        this.props.history.push('/follow/'+this.props.match.params.dengluId)
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
                                        <Link to={`/play/userId`+this.state.allId[i]+`/dengluId`+this.props.match.params.dengluId} className='userschat'>
                                        <div className='novel'>
                                        <img src={this.state.allAvatar[i]} style={{height:'40px',width:'40px'}}/>
                                            {this.state.crr[i]}
                                        </div>
                                        </Link> 
                                        <Route path={'/play/userId:userId/dengluId:dengluId'} component={Play}/>
                                    </div>
                            )
                        })
                            }
                        </div>
                        
                    <div style={{position:'fixed',bottom:0}}>
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