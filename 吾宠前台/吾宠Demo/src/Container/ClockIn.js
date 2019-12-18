import React, { Component } from 'react'
import { NavBar, Grid} from 'antd-mobile';
import img0 from '../img/images/img0.png';
import {withRouter,Link} from 'react-router-dom';
import Contentda from './Router/Contentda';

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: img0,
    text: `任务${i}`,

  }));
  
class ClockIn extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            num:"",
            clockId:'',
            clockName:"",
          clockNum:"",
          clockTime:"",
          clockImg:"",
          clockCycle:"",
          userId:this.props.match.params.userId,
          dengluId:this.props.match.params.userId,
        }
    }
    add = () => {
        this.props.history.push('/add/'+this.state.dengluId);
    }
    add2 = () => {
        this.props.history.push('/tab'+this.state.dengluId);
    }
    // bianji = () => {
    //     this.props.history.push('/bianji');
    // }
    
    componentDidMount(){
        console.log(this.state.userId)
        let url = '/clockin'
        fetch(url)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res,
                    
                })
            })
        // let url2 = '/denglu'
        // fetch(url2)
        //     .then((res)=>res.json())
        //     .then((res)=>{
        //         console.log(res[0].userId);
        //         this.setState({
        //             userId:res[0].userId
        //         })
        //     })
    }
    bianji = (clockId) => {
        const registerValue = {"clockId":clockId}
      
        // if(this.state.clockName!=""&&this.state.clockNum!=""&&this.state.clockTime!=""&&this.state.clockImg!=""&&this.state.clockCycle!=""){
          fetch('/clockbianji', {
                method: "POST",
                headers: {
                    "Content-type":"application/json;charset=utf-8",
                },
                body:JSON.stringify(registerValue) ,
            }).then( res => res.text())
              .then( data => {
                  console.log(data);
              });
            // }
            console.log(clockId);
    }
    daka = (clockId) => {
        alert('打卡成功');
        // var clock = document.getElementById('clock');
        // var clockStr = JSON.parse(clock.innerHTML)
        // clock.innerHTML = clockStr+1;
        console.log(clockId)
        const registerValue = {"clockId":clockId};
        fetch('/clockdaka', {
            method: "POST",
            headers: {
                "Content-type":"application/json;charset=utf-8",
            },
            body:JSON.stringify(registerValue) ,
        }).then( res => res.text())
          .then( data => {
              console.log(data);
          });

          let url4 = '/clockin'
          fetch(url4)
              .then((res)=>res.json())
              .then((res)=>{
                  console.log(res);
                  this.setState({
                      data:res,
                      
                  })
              })
    }
    
    render() {
        return (
            <div>
                <div>
                    <NavBar
                        style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                        leftContent={<i style={{fontSize:22,color:'white'}} className='iconfont icon-back' onClick={this.add2}></i>}
                        rightContent={
                            <div>
                                <i style={{fontSize:22,color:'white'}} className='iconfont icon-haibijiahao' onClick={this.add}></i>
                            </div>
                        
                    }
                    >今日</NavBar>
                    <div>
                {
                    this.state.data.map((item)=>(
                        item.userId == this.state.userId ? 
                        <div key={item.id} style={{height: '100px',float:"left",marginLeft:"10%",marginTop:"5%"}}>
                            {/* <img  src={require('../../img/images/img0.png')} style={{ width: '60px', height: '60px' }} alt="" /> */}
                            <div style={{ color: '#888', fontSize: '14px'}}>
                                
                                <div  style={{width:"70px",height:"70px",marginLeft:"28%",marginBottom:"15px",border:"3px dashed gray",borderRadius:"50%"}}>
                                    <img src={item.clockImg} style={{ width: '60px', height: '60px',borderRadius:'50%' }} alt=""/>
                                </div>
                                <div style={{textAlign:'center'}}><button className='btn' onClick={()=>(this.daka(item.clockId))}>{item.clockName}</button><span style={{marginLeft:'10px'}} id='clock'>{item.clockNum}</span><button className='btn' onClick={()=>(this.bianji(item.clockId))}><Link to='/bianji' style={{color:'white'}}>编辑</Link></button></div>
                                
                            </div> 
                            
                        </div>
                        : ''
                            
                    ))
                }
            </div>

<div style={{width:'100%',height:'60px',display:'inline-block',position:'fixed',bottom:0,left:0,backgroundColor:'#fff',}}>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/tab'+this.state.dengluId}>
                        <i className='iconfont icon-shouye2' style={{fontSize:22,}}></i>
                        <p >首页</p>
                    </Link>
                </div>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/activity/'+this.state.dengluId}>
                        <i className='iconfont icon-chongwuwanju' style={{fontSize:22,}}></i>
                        <p >娱乐</p>
                    </Link>
                </div>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/clockin/'+this.state.dengluId}>
                        <i className='iconfont icon-chongwu' style={{fontSize:22,}}></i>
                        <p >打卡</p>
                    </Link>
                </div>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/follow/'+this.state.dengluId}>
                        <i className='iconfont icon-guanzhu' style={{fontSize:22,}}></i>
                        <p >关注</p>
                    </Link>
                </div>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/mine/'+this.state.dengluId}>
                        <i className='iconfont icon-wode' style={{fontSize:22,}}></i>
                        <p >我的</p>
                    </Link>
                </div></div>
                </div>
                
            </div>
        )
    }
}
ClockIn = withRouter(ClockIn);
export default ClockIn;