import React, { Component } from 'react'
import { NavBar, Icon} from 'antd-mobile';


export default class AppForget extends Component {
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
                  
                    <label icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-shouye'></i>}></label>
                    <input style={{width:'95%',margin:'0 auto',lineHeight:3,paddingLeft:5,marginTop:20,borderRadius:'10px',border:'1px solid rgb(29,174,169)'}} type='text' id='tel' name='tel' placeholder='手机号' />
                    <input style={{width:'60%',margin:'0 auto',lineHeight:3,paddingLeft:5,marginTop:20,borderRadius:'10px',border:'1px solid rgb(29,174,169)'}} type='password'  id='pwd' name='pwd' placeholder='密码' />
                    <button style={{width:'30%',float:'right',marginRight:20,border:'1px solid #1daea9',lineHeight:3,marginTop:20,borderRadius:'10px',color:'#fff',background:'rgb(29,174,169)'}}>立即验证</button>
                  
                </div>
                
            </div>
        )
    }
}