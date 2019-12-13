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
            activeId:"1",
            userId:""
        }
    }
    nameChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            signName:e.target.value
        })
    }
    telChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            signTel:e.target.value
        })
    }
    spetNameChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            spetName:e.target.value
        })
    }
    ageChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            spetAge:e.target.value
        })
    }
    kindChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            spetKind:e.target.value
        })
    }
    activeIdChange=()=>{
        // var acId=this.props.match.params.activeId;
        console.log(this.props.match.params.activeId);
        this.setState({
            activeId:this.props.match.params.activeId
        })
        console.log(this.state.activeId)
    }
    register=()=>{
        var inputs=document.getElementsByTagName('input');
        // console.log(inputs[0].value);
        inputs[0].value='';
        inputs[1].value='';
        inputs[2].value='';
        inputs[3].value='';
        inputs[4].value='';
        
        const registerValue = {"signName":this.state.signName,"signTel": this.state.signTel,
            "spetName": this.state.spetName,"spetAge": this.state.spetAge,"spetKind": this.state.spetKind,
            "activeId": this.state.activeId,"userId": this.state.userId}        
        if(this.state.signName!="" && this.state.signTel!="" && this.state.spetName!=""
            && this.state.spetAge!="" && this.state.spetKind!=""
            && this.state.activeId!="" && this.state.userId!=""){
            fetch('/signup1', {
                 method: "POST",
                 headers: {
                     "Content-type":"application/json;charset=utf-8",
                 },
                 body:JSON.stringify(registerValue) ,
            }).then( res => res.text())
              .then( data => {
                  console.log(data);
                //   if(data.success){
                //       alert('register OK');
                //   }
              });
            console.log('success')
        }    
     }
     componentDidMount(){
         fetch('/denglu').then((res)=>res.json()).then((res=>{
             console.log(res)
             this.setState({
                 userId:res[0].userId
             })
         }))
     }
    render() {
        return (
            <div style={{background:'#fff'}}>
                <NavBar style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                    rightContent={[
                    
                        <i style={{color:'white',fontSize:'30px'}} className='iconfont icon-icon-' key='close1'
                            onClick={
                                ()=>{
                                    window.history.back();
                                }
                            }
                        ></i>                        
                    ]} key='signup'
                >报名</NavBar>
                <WhiteSpace size='lg'/>
                <WhiteSpace size='lg'/>
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
                <div style={{textAlign:'center',marginTop:'50px'}}>
                    <button style={{backgroundColor:'#1daea9',border:0,
                    borderRadius:'20px',width:'200px',height:'45px',
                    color:'white',fontSize:'20px'}} 
                    // onClick={handleChange} 
                    onClick={this.register}>确定</button> 
                </div>
            </div>
        )
    }
}

