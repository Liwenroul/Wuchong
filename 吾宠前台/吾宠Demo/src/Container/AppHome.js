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
            userId:this.props.dengluId,
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
                        <div key={item.id} style={{height: '400px',background:'#eee'}}>
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
            </div>
        )
    }
    
}


//     // constructor(props){
//     //     super(props);
//     //     this.state={
//     //         data:[],
//     //         userId:''
//     //     }
//     //     console.log(this.props)
//     // }
//     // componentDidMount(){
//     //     let id=this.props.match.params.id;
//     //         console.log(id)
//     //         // fetch('/userinfo')
//     //         //     .then((res)=>res.json())
//     //         //     .then((res)=>{
//     //         //         console.log(res);
//     //         //         this.setState({
//     //         //             data:res,
//     //         //         })
//     //         //     })
//     //         }
//     // dianZan =()=> {            
//     //     var btn = document.getElementById("zan");
//     //         times++;
//     //         if (times % 2 === 1) {
//     //                 btn.style.color = "red";
//     //         }
//     //         if (times % 2 === 0) {
//     //                 btn.style.color = "gray";
//     //         }           
//     // };
//     // guanZhu =()=> {            
//     //     var btn = document.getElementById("zhu");
//     //         num++;
//     //         if (num % 2 === 1) {
//     //                 btn.style.color = "red";
//     //         }
//     //         if (num % 2 === 0) {
//     //                 btn.style.color = "gray";
//     //         }           
//     // };


//     render() {
//         return (
//             <div style={{width: '100%',height: '100%'}}>
                
//                 {/* <div style={{height: '400px',background:'#eee'}}>
                    
//                             <img
//                                 src={require('../img/images/shoutu.png')}
//                                 alt=""
//                                 style={{ width: '100%', verticalAlign: 'top' }}
//                                 onLoad={() => {
//                                 // fire window resize event to change height
//                                 window.dispatchEvent(new Event('resize'));
//                                 // this.setState({ imgHeight: 'auto' });
//                                 }}
//                             />
//                     <div style={{float:'right',margin:'10px'}} >
//                         <i style={{fontSize:30,lineHeight:'30px',margin:'0 10px'}} id="zan" className='iconfont icon-dianzan' onClick={this.dianZan}></i>
//                         <i style={{fontSize:30,lineHeight:'30px',margin:'0 10px'}} id="zhu" className='iconfont icon-haibijiahao' onClick={this.guanZhu}></i>
//                     </div>  
//                     <div style={{width:'100%',margin:'auto',float:'left'}}><p>今天带着小巴去了公园，小巴开心得不行，明天带小巴去医院做日常检查，它该去做日常检查了。</p></div>      
//                 </div> */}
//                 <Contentdy/>
//                 <div style={{width:'100%',margin:'auto'}}>
//                 <Link to='/fabu'>
//                     <i style={{float:'right',fontSize:60,lineHeight:'60px',margin:'20px 20px',color:'rgb(29,174,169)',position:"absolute",top:500,right:15}} className='iconfont icon-jiahao'></i>
//                 </Link>
//                 </div>
                
//             </div>
//         )
//     }
// }
