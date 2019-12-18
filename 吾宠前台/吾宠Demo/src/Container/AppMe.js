import React, { Component } from 'react'
import { NavBar,Flex,WhiteSpace} from 'antd-mobile';
import activity1 from '../img/images/huodong1.jpg';
import activity2 from '../img/images/huodong2.jpg';
import {Link,Router,Route} from 'react-router-dom'; 
import ContentAc from './Active/ContentAc' 
import Detail1 from './Active/Detail1'
// import Detail1 from './container/Detail1'

export default class AppMe extends Component {
    constructor(props){
        super(props);
        this.state={
            city:'石家庄',
            data:[],
            dengluId:this.props.match.params.dengluId
        }
        console.log(this.state.dengluId)
    }
    componentDidMount(){
        fetch('/city').then((res)=>res.json()).then((res)=>{
            this.setState({
                city:res[0].cityName
            })
        });    
        let url='/active';
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res
            })
        })
        
    }
    acInfo=(activeId)=>{
        const registerValue = {"acInfoId":activeId}
        fetch('/activeinfo', {
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
        
    render() {
        return (
            <div>
                <NavBar style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                    leftContent={[<Link to={'/tab'+this.state.dengluId} key='position'>
                    <i style={{color:'white',fontSize:'30px'}} className='iconfont icon-back' key='close1'></i>
                  </Link>]}
                    >
                    
                    <Link to='/position' style={{color:'white'}}>
                        {this.state.city}
                        <i style={{fontSize:22,color:'white'}} className='iconfont icon-jiantouxia'></i>
                    </Link>
                </NavBar>
                <div className='container'>
                <div>
                {
                    this.state.data.map((item)=>(
                        <div onClick={()=>this.acInfo(item.activeId)} key={item.activeId} style={{height:'150px'}}>
                            <WhiteSpace size="lg" />
                                <Link to={"/detail1/"+this.state.dengluId}>
                                    <Flex>
                                        <Flex.Item><img src={item.acImg} style={{width:'100%',height:'130px',borderRadius:'10px'}}/>
                                        <h1 style={{color:'white',position:'relative',top:'-80px',left:'20px'}}>{item.activeName}</h1>
                                        </Flex.Item>
                                    </Flex>
                                </Link>
                        </div>
                    ))
                }
            </div>
                    {/* <Route path='/detail1/:activeId' component={Detail1}/> */}
                </div>
                <div style={{width:'100%',height:'60px',display:'inline-block',position:'fixed',bottom:0,backgroundColor:'#fff',}}>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/tab'+this.state.dengluId}>
                        <i className='iconfont icon-shouye2' style={{fontSize:22,color:'gray'}}></i>
                        <p style={{color:'gray'}}>首页</p>
                    </Link>
                </div>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/activity/'+this.state.dengluId}>
                        <i className='iconfont icon-chongwuwanju' style={{fontSize:22,color:'rgb(29,174,169)'}}></i>
                        <p style={{color:'rgb(29,174,169)'}}>娱乐</p>
                    </Link>
                </div>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/clockin/'+this.state.dengluId}>
                        <i className='iconfont icon-chongwu' style={{fontSize:38}}></i>
                    </Link>
                </div>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/follow/'+this.state.dengluId}>
                        <i className='iconfont icon-guanzhu' style={{fontSize:22,color:'gray'}}></i>
                        <p style={{color:'gray'}}>关注</p>
                    </Link>
                </div>
                <div style={{float:'left',width:'20%',paddingLeft:'20px'}}>
                    <Link to={'/mine/'+this.state.dengluId}>
                        <i className='iconfont icon-wode' style={{fontSize:22,color:'gray'}}></i>
                        <p style={{color:'gray'}}>我的</p>
                    </Link>
                </div></div>

            </div>
        )
    }
}