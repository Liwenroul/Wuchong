import React, { Component } from 'react'
import { NavBar, Icon,WingBlank} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'

export default class AddPet extends Component {
    constructor(){
        super();
        this.state={
            petName:"",
            petSex:"",
            petAge:"",
            denglu:""
        }
    }
    componentWillMount(){
        fetch("/denglu")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res[0].userId)
            this.setState({
                dengluId:res[0].userId
            })
        })
    }
    nameChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            petName:e.target.value
        })
    }
    sexChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            petSex:e.target.value
        })
    }
    ageChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            petAge:e.target.value
        })
    }

    register=()=>{
        console.log(this.state.petName);
        const registerValue = {"petName":this.state.petName,"petSex": this.state.petSex,"petAge": this.state.petAge,"userId":this.state.dengluId}
       
        if(this.state.petName!=""&&this.state.petSex!=""&&this.state.petAge!=""){
           fetch('/petinfo', {
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
     }
    render() {
        return (
            <div style={{background:'#fff'}}>
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to='/petinfo'><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>添加宠物</span>
                    {/* <Link to='/petinfo'><i className='iconfont icon-haibijiahao' style={{color:"#fff",float:'right',marginRight:15}}></i></Link> */}
                </div>
                <WingBlank>
                <div style={{width:'100%',padding:'50px',background:'#fff'}}>
                    <img style={{width:'80%',marginLeft:'25px'}} src={require('../../../img/images/tou.png')}/>
                </div>
                <div style={{height: '350px',background:'#fff'}}>
                    <input onChange={this.nameChange} style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,borderRadius:'20px',textAlign:'center',border:'1px solid #33cccc'}} type='text' id='petname' name='petname' placeholder='宠物昵称' />
                    <input onChange={this.sexChange} style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,borderRadius:'20px',textAlign:'center',border:'1px solid #33cccc'}} type='text'  id='sex' name='sex' placeholder='性别' />
                    <input onChange={this.ageChange} style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,borderRadius:'20px',textAlign:'center',border:'1px solid #33cccc'}} type='text' id='age' name='age' placeholder='年龄' />
                    <Link to='/petinfo' style={{width:'100%',height:50,paddingLeft:'105px'}}>
                    <input onClick={this.register} type='submit' style={{width:'45%',height:50,background:'#1daea9',color:'#fff',borderRadius:'40px',fontSize:25,marginTop:20}} value='确定'/>
                    </Link> 
                </div>
                </WingBlank>
            </div>
        )
    }
}
