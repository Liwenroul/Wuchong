import React, { Component } from 'react'
import {NavBar, WingBlank,WhiteSpace} from 'antd-mobile'

export default class Signup extends Component {
    constructor(){
        super();
        this.state={
            signName:"",
            signTel:"",
            spetName:"",
            spetAge:"",
            spetKind:"",
            activeId:"",
            userId:""
        }
    }
//获取报名昵称
    nameChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            signName:e.target.value
        })
    }
//获取报名电话
    telChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            signTel:e.target.value
        })
    }
//获取宠物昵称
    spetNameChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            spetName:e.target.value
        })
    }
//获取宠物年龄
    ageChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            spetAge:e.target.value
        })
    }
//获取宠物品种
    kindChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            spetKind:e.target.value
        })
    }
//获取UserID和活动ID
    componentDidMount(){
        // fetch('/denglu').then((res)=>res.json()).then((res=>{
        //     console.log(res)
        //     this.setState({
        //         userId:res[0].userId
        //     })
        // }))
        fetch("/activeinfo")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res[0].activeId);
            this.setState({
                activeId:res[0].activeId
            })
        })
        //userId
        this.setState({
            userId:this.props.match.params.dengluId
        })
        console.log(this.state.userId)
    }
//提交报名信息到后台
    register=()=>{
        var inputs=document.getElementsByTagName('input');
        inputs[0].value='';
        inputs[1].value='';
        inputs[2].value='';
        inputs[3].value='';
        inputs[4].value='';
    // 编辑报名数据      
        const registerValue = {"signName":this.state.signName,"signTel": this.state.signTel,"spetName": this.state.spetName,
            "spetAge": this.state.spetAge,"spetKind": this.state.spetKind,"activeId": this.state.activeId,"userId": this.state.userId}        
    //信息完整后将数据传给后台 /signup 接口
        if(this.state.signName!="" && this.state.signTel!="" && this.state.spetName!="" && this.state.spetAge!="" && this.state.spetKind!="" && this.state.activeId!="" && this.state.userId!=""){
            fetch('/signup1', {
                 method: "POST",
                 headers: {
                     "Content-type":"application/json;charset=utf-8",
                 },
                 body:JSON.stringify(registerValue) ,
            }).then( res => res.text())
                .then( data => {
                    console.log(data);
                });
            console.log('success')
            alert('报名成功')
            this.setState({
                signName:"",
                signTel:"",
                spetName:"",
                spetAge:"",
                spetKind:""
            })  
        }
        else{
            alert('请将报名信息填写完整哦！')
        }
    }
    render() {
        return (
            <div style={{background:'#fff'}}>
                <NavBar style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                    rightContent={[
                    <i style={{color:'white',fontSize:'30px'}} className='iconfont icon-icon-' key='close1'
                        onClick={()=>{window.history.back();}}>
                    </i>                       
                    ]} key='signup'>报名
                </NavBar>
                <WhiteSpace size='lg'/>
                <WhiteSpace size='lg'/>
            {/* input列表 */}
                <div className='signup'>
                    <WingBlank size='lg'>
                        <form style={{fontSize:'20px',color:'#1daea9'}}>
                            昵称: <input onChange={this.nameChange} type='text' style={{border:0,borderBottom:'1px solid #1daea9',height:'30px'}}></input>
                            <WhiteSpace size='lg'/>
                            <br/>
                            电话: <input onChange={this.telChange} type='text' style={{border:0,borderBottom:'1px solid #1daea9',height:'30px'}}></input>
                            <WhiteSpace size='lg'/>
                            <br/>
                            宠物名: <input onChange={this.spetNameChange} type='text' style={{border:0,borderBottom:'1px solid #1daea9',height:'30px'}}></input>
                            <WhiteSpace size='lg'/>
                            <br/>
                            宠物年龄: <input onChange={this.ageChange} type='text' style={{border:0,borderBottom:'1px solid #1daea9',height:'30px'}}></input>
                            <WhiteSpace size='lg'/>
                            <br/>
                            宠物种类: <input onChange={this.kindChange} type='text' style={{border:0,borderBottom:'1px solid #1daea9',height:'30px'}}></input>
                        </form>
                    </WingBlank>
                </div>
            {/* 提交按钮 */}
                <div style={{textAlign:'center',marginTop:'50px'}}>
                    <button style={{backgroundColor:'#1daea9',border:0,borderRadius:'20px',width:'200px',height:'45px',color:'white',fontSize:'20px'}} onClick={this.register}>
                        确定
                    </button> 
                </div>
            </div>
        )
    }
}

