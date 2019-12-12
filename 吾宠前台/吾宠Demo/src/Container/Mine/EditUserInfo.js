import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class EditUserInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:"",
            userId:"",
            dengluId:""
        }
    }
    componentDidMount(){
        fetch("/denglu")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res[0].dengluId)
            this.setState({
                dengluId:res[0].userId
            })
        })
        fetch("/userinfo")
        .then((res)=>res.json())
        .then((res)=>{
            for(var i=0;i<res.length;i++){
                if(res[i].userId==this.state.dengluId){
                    this.setState({
                        userName:res[i].userName,
                        userId:res[i].userId
                    })
                }
            }
        })
    }
    nameChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            userName:e.target.value
        })
    }
    register=()=>{
        // console.log(this.state.userName);
        const registerValue = {"userName":this.state.userName,"userId":this.state.dengluId}
        if(this.state.userName!=""){
           fetch('/userinfo3', {
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
                    <Link to='/PersonalInfo'><i onClick={this.register} className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>编辑信息</span>
                </div>
                <div style={{color:'rgb(29,174,169)',fontSize:18,marginTop:20,marginLeft:20}}>
                    用户名：
                    <input onChange={this.nameChange} type='text' value={this.state.userName} style={{border:'1px solid #fff',borderBottom:'1px solid rgb(29,174,169)'}}/>
                </div>
                <div style={{color:'rgb(29,174,169)',fontSize:18,marginTop:20,marginLeft:20}}>
                    吾宠号：
                    <input type='text' value={this.state.userId} style={{border:'1px solid #fff',borderBottom:'1px solid rgb(29,174,169)'}}/>
                </div>
            </div>
        )
    }
}
