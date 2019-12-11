import React, { Component } from 'react'
import { NavBar, Icon} from 'antd-mobile';


export default class AppForget extends Component {
    constructor(props){
        super(props);
        this.state={
            data:''
        }
    }
    mima=()=>{
    var userTel=document.getElementById('tel').value;
    
        
        fetch('/userinfo')
            .then((res)=>res.json())
            .then((res)=>{
                for(var i=0;i<res.length;i++){
                    console.log(res);
                    if(res[i].userTel==userTel){
                        this.setState({
                            
                            data:res[i].userPassword
                        })
                    }
                }
                
            })
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{bwidth:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                    icon={<Icon type="left" />}
                    onLeftClick={() => {window.history.back()}}
                    >找回密码
                </NavBar>
                <div style={{height: '250px',marginLeft:20}}>
                  
                   
                    <input style={{width:'95%',margin:'0 auto',lineHeight:3,paddingLeft:5,marginTop:20,borderRadius:'10px',border:'1px solid rgb(29,174,169)'}} type='text' id='tel' name='tel' placeholder='手机号' />
                    <div style={{width:'100%',margin:'0 auto',lineHeight:5,marginTop:20,borderRadius:'10px',border:'none'}}>
                        <h2 style={{width:'40%',float:'left',color:'#1daea9'}}>密码:{this.state.data}</h2>
                        <button onClick={this.mima} style={{width:'30%',float:'right',marginRight:20,border:'1px solid #1daea9',lineHeight:3,marginTop:30,borderRadius:'10px',color:'#fff',background:'rgb(29,174,169)'}}>立即验证</button>
                    </div>
                </div>
                
            </div>
        )
    }
}