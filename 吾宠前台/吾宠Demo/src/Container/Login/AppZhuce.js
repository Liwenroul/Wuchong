import React, { Component } from 'react'
import { NavBar, Icon,WingBlank} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'
import AppPetXinxi from './AppPetXinxi';
var code='PCAE';

export default class AppZhuce extends Component {
    constructor(){
        super();
        this.state={
            userName:"",
            userTel:"",
            userPassword:""
        }
    }
    nameChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            userName:e.target.value
        })
    }
    telChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            userTel:e.target.value
        })
    }
    pwdChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            userPassword:e.target.value
        })
    }
    register=()=>{
        console.log(this.state.userName);
        const registerValue = {"userName":this.state.userName,"userTel": this.state.userTel,"userPassword": this.state.userPassword}
       
        if(this.state.userName!=""&&this.state.userTel!=""&&this.state.userPassword!=""){
            fetch('/userinfo1', {
                 method: "POST",
                 headers: {
                     "Content-type":"application/json;charset=utf-8",
                 },
                 body:JSON.stringify(registerValue) ,
            })
            .then( res => res.text())
            .then( data => {
                  console.log(data);
                //   if(data.success){
                //       alert('register OK');
                //   }
            });
        }
        
     }
     /* 随机验证码 */
     //声明一个变量用于存储生成的验证码
     
     changeImg=()=>{
         //alert("换图片");
         var arrays=new Array(
             '1','2','3','4','5','6','7','8','9','0',
             'a','b','c','d','e','f','g','h','i','j',
             'k','l','m','n','o','p','q','r','s','t',
             'u','v','w','x','y','z',
             'A','B','C','D','E','F','G','H','I','J',
             'K','L','M','N','O','P','Q','R','S','T',
             'U','V','W','X','Y','Z'				
         );
         code='';//重新初始化验证码
         //alert(arrays.length);
         //随机从数组中获取四个元素组成验证码
         for(var i=0;i<4;i++){
         //随机获取一个数组的下标
             var r=parseInt(Math.random()*arrays.length);
             code+=arrays[r];
             //alert(arrays[r]);
         }
         //alert(code);
         document.getElementById('code').innerHTML=code;//将验证码写入指定区域
     }		
     
     //效验验证码(表单被提交时触发)
     check=()=>{
         //获取用户输入的验证码
         var input_code=document.getElementById('vcode').value;
         //alert(input_code+"----"+code);
         if(input_code.toLowerCase()==code.toLowerCase())
         {
             //验证码正确(表单提交)
             this.register();
             window.location='/petxinxi';
             return true;
         }
         alert("请输入正确的验证码!");
         
         //验证码不正确,表单不允许提交
         return false;
     }
 
    render() {
        
        return (
            <div  onLoad={this.changeImg}>
                <NavBar
                    style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                    icon={<Icon type="left" />}
                    
                    onLeftClick={() => {window.history.back()}}
                    >注册
                </NavBar>
                <WingBlank>
                {/* height: '250px',background:'#eee' */}
                <div style={{}} >
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,position:"relative"}}>
                        <i style={{fontSize:22,color:'rgb(29,174,169)'}} className='iconfont icon-gerenxinxi'></i>
                        <input onChange={this.nameChange} style={{width:'90%',lineHeight:3,marginLeft:10,borderRadius:'10px',paddingLeft:5,position:"absolute",top:10,border:'1px solid rgb(29,174,169)'}} type='text' id='username' name='username' placeholder='用户名' />
                    </div>
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,position:"relative"}}>
                        <label><i style={{fontSize:22,color:'rgb(29,174,169)'}} className='iconfont icon-wode'></i></label>
                        <input onChange={this.telChange} style={{width:'90%',lineHeight:3,marginLeft:10,borderRadius:'10px',paddingLeft:5,position:"absolute",top:10,border:'1px solid rgb(29,174,169)'}} type='text' id='tel' name='tel' placeholder='手机号' />
                    </div>
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,position:"relative"}}>
                        <label><i style={{fontSize:22,color:'rgb(29,174,169)'}} className='iconfont icon-chongwuleyuan'></i></label>
                        <input onChange={this.pwdChange} style={{width:'90%',lineHeight:3,marginLeft:10,borderRadius:'10px',paddingLeft:5,position:"absolute",top:10,border:'1px solid rgb(29,174,169)'}} type='password'  id='pwd' name='pwd' placeholder='密码' />
                    </div>
                    <div style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,position:"relative"}}>
                        <label><i style={{fontSize:22,color:'rgb(29,174,169)'}} className='iconfont icon-yanjing'></i></label>
                        <input style={{width:'50%',lineHeight:3,marginLeft:10,borderRadius:'10px',paddingLeft:5,position:"absolute",top:10,border:'1px solid rgb(29,174,169)'}} type="text" id="vcode" placeholder="验证码"    />
                        <button id="vvcode"  title="看不清，换一张" onClick={this.changeImg} style={{background:'#1daea9',width:'30%',float:'right',lineHeight:3,borderRadius:'10px',marginTop:8}}><span id="code" title="看不清，换一张">获取验证码</span></button>
                    </div>
                    {/* <Link to='/petxinxi'> */}
                        <input type='submit' style={{width:'100%',height:50,margin:'0 auto',background:'#1daea9',color:'#fff',borderRadius:'40px',fontSize:25,marginTop:20}} value='注册'  onClick={this.check}/>
                        {/* </Link> */}
                   
                    
                </div>
                </WingBlank>
                {/* <Route path='/petxinxi' component={AppPetXinxi} /> */}
            </div>
        )
    }
}


