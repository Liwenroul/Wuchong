

                import React, { Component } from 'react'
                // import { NavBar, Icon,Tabs,Carousel,Grid } from 'antd-mobile';
                
                import {Link,Route} from 'react-router-dom'
                import Contentdy from './Router/Contentdy';
                
                
                   
                // var times = 0;
                var num =0;
                export default class AppHome extends Component {
                    constructor(props){
                        super(props);
                        console.log(this.props.dengluId)
                        this.state={
                            data:[],
                            num:"",
                            likeNumState:0,
                            guanzhuId:'',
                            userId:this.props.match.params.userId,
                            Id:'',
                            dynamicId:''
                        }
                        
                    }
                    componentDidMount(){
                        
                        // fetch("/denglu")
                        // .then((res)=>res.json())
                        // .then((res)=>{
                        //     console.log(res[0].userId)
                        //     this.setState({
                        //         userId:res[0].userId
                        //     })
                        // })
                        
                        
                        fetch('/dynamic')
                            .then((res)=>res.json())
                            .then((res)=>{
                                console.log(res);
                                this.setState({
                                    data:res,
                                    
                                })
                                
                            })
                    }
                    dianZan =(id)=> {    
                            console.log(id)
                            var zan = document.getElementById(id);
                            var zanStr = JSON.parse(zan.innerHTML)
                            if(this.state.likeNumState==0){
                                zan.style.color = "red";
                                zan.innerHTML = zanStr+1;
                                this.setState({
                                    likeNumState:1
                                })
                                const registerValue = {"likeNum":zan.innerHTML,"dynamicId":id}
                                fetch('/dynamic1', {
                                    method: "POST",
                                    headers: {
                                        "Content-type":"application/json;charset=utf-8",
                                    },
                                    body:JSON.stringify(registerValue),
                                })
                                .then( res => res.text())
                                    .then( data => {
                                        console.log(data);
                                    });
                            }
                            else if(this.state.likeNumState==1){
                                zan.style.color = "gray";
                                zan.innerHTML = zanStr-1;
                                this.setState({
                                    likeNumState:0
                                })
                                const registerValue = {"likeNum":zan.innerHTML,"dynamicId":id}
                                fetch('/dynamic1', {
                                    method: "POST",
                                    headers: {
                                        "Content-type":"application/json;charset=utf-8",
                                    },
                                    body:JSON.stringify(registerValue),
                                })
                                .then( res => res.text())
                                    .then( data => {
                                        console.log(data);
                                    });
                            }
                           
                    };
                    guanZhu =(id)=> {           
                        var btn = document.getElementById(id);
                            num++;
                            if (num%2!==0) {
                                    btn.style.color = "red";
                                    
                        const registerValue = {"Id":"guanzhu"+parseInt(Math.random()*1000),"guanzhuId" : id,"userId":this.state.userId}
                                    fetch('/guanzhu', {
                                        method: "POST",
                                        headers: {
                                            "Content-type":"application/json;charset=utf-8",
                                        },
                                        body:JSON.stringify(registerValue),
                                    }).then( res => res.text())
                                        .then( data => {
                                            console.log(data);
                                        });
                            }
                            if (num%2===0) {
                                    btn.style.color = "gray";
                                    
                                    fetch('/guanzhu')
                                    .then((res)=>res.json())
                                    .then((res)=>{
                                        for(var i =0;i<res.length;i++){
                                            if(res[i].guanzhuId == id && res[i].userId==this.state.userId){
                                                this.setState({
                                                    Id:res[i].Id
                                                })
                                            }
                                        }
                                    })
                                        const registerValue = {"Id":this.state.Id,"guanzhuId": id,"userId": this.state.userId}
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
                                   
                            }           
                    };
                    render(){
                        return (
                            <div>
                                {
                                    this.state.data.map((item)=>(
                                        <div key={item.id} style={{height: '520px',background:'#eee',borderTop:'1px dashed rgb(29,174,169)'}}>
                                            <img
                                                src={item.dynamicImg}
                                                alt=""
                                                style={{ width: '100%', verticalAlign: 'top' }}
                                                onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                                // this.setState({ imgHeight: 'auto' });
                                                }}
                                            />
                                            <div style={{float:'right',margin:'10px'}} >
                                                <i style={{fontSize:30,lineHeight:'30px',margin:'0 10px'}} id={item.dynamicId} className='iconfont icon-dianzan' onClick={()=>this.dianZan(item.dynamicId)}>{item.likeNum}</i>
                                                <i style={{fontSize:30,lineHeight:'30px',margin:'0 10px'}} id={item.userId} className='iconfont icon-haibijiahao' onClick={()=>this.guanZhu(item.userId)}></i>
                                            </div> 
                                            <div style={{width:'100%',margin:'auto',float:'left'}}><p>{item.dynamicContent}</p></div> 
                                            {/* <div>{item.dynamicImg}</div> */}
                                        </div>
                                    ))
                                }
                                <div style={{width:'100%',margin:'auto'}}>
                                    <Link to={'/fabu'+this.state.userId}>
                                        <i style={{float:'right',fontSize:60,lineHeight:'60px',margin:'20px 20px',color:'rgb(29,174,169)',position:"absolute",top:500,right:15}} className='iconfont icon-jiahao'></i>
                                    </Link>
                                </div>
                                <div style={{width:'100%',height:'60px',display:'inline-block',position:'fixed',bottom:0,backgroundColor:'#fff',}}>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/tab'+this.state.userId}>
                        <i className='iconfont icon-shouye2' style={{fontSize:22,color:'rgb(29,174,169)'}}></i>
                        <p style={{color:'rgb(29,174,169)'}}>首页</p>
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
                        <i className='iconfont icon-guanzhu' style={{fontSize:22,color:'gray'}}></i>
                        <p style={{color:'gray'}}>关注</p>
                    </Link>
                </div>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/mine/'+this.state.userId}>
                        <i className='iconfont icon-wode' style={{fontSize:22,color:'gray'}}></i>
                        <p style={{color:'gray'}}>我的</p>
                    </Link>
                </div>
                </div>
                            </div>
                        )
                    }
                    
                }
                
                
                