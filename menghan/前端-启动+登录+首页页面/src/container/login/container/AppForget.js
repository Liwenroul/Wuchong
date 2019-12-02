import React, { Component } from 'react'
import { NavBar, Icon} from 'antd-mobile';


export default class AppForget extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{background:'#1daea9',color:'black',height:68,fontSize:16}}
                    icon={<Icon type="left" />}
                    onLeftClick={() => {window.history.back()}}
                    >找回密码
                </NavBar>
                <div style={{height: '250px',background:'#eee'}}>
                  
                    <label icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-shouye'></i>}></label>
                    <input style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,borderRadius:'10px'}} type='text' id='tel' name='tel' placeholder='手机号' />
                    <input style={{width:'60%',margin:'0 auto',lineHeight:3,marginTop:20,borderRadius:'10px'}} type='password'  id='pwd' name='pwd' placeholder='密码' />
                    <button style={{width:'30%',float:'right',border:'1px solid #1daea9',lineHeight:3,marginTop:20,borderRadius:'10px'}}>立即验证</button>
                  
                </div>
                
            </div>
        )
    }
}