import React, { Component } from 'react';
import { List } from 'antd-mobile';
import {Link,withRouter} from 'react-router-dom';

const Item = List.Item;
const Brief = Item.Brief;
class Setting extends Component {
    constructor(props){
        super(props);
        
    }
    enter=()=>{
        this.props.history.push("/UserSelf")
    }
    render() {
        return (
            <div>
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to='/mine'><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>设置</span>
                </div>
                <List>
                    <Item 
                        // activeStyle={{color:'rgb(29,174,169)'}}
                        // thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"//图片
                        arrow="horizontal"
                        onClick={this.enter}
                    >账户安全</Item>
                    <Item
                        // style={{borderBottom:'0.5px solid rgb(29,174,169)',height:30,width:355}}
                        // thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={this.enter1}
                        arrow="horizontal"
                    >
                     隐私
                    </Item>
                    <Item
                        // style={{borderBottom:'0.5px solid rgb(29,174,169)',height:30}}
                        // thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={this.enter2}
                        arrow="horizontal"
                    >
                     通用
                    </Item>
                    <Item
                        // style={{borderBottom:'0.5px solid rgb(29,174,169)',height:30}}
                        // thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={this.enter3}
                        arrow="horizontal"
                    >
                     帮助和反馈
                    </Item>
                    <Item
                        // style={{borderBottom:'0.5px solid rgb(29,174,169)',height:30}}
                        // thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        // onClick={window.location="/login"}
                        arrow="horizontal"
                    >
                     切换账户
                    </Item>
                </List>
                <div style={{width:150,height:40,fontSize:18,borderRadius:20,marginTop:300,marginLeft:117, textAlign:'center',backgroundColor:'rgb(29,174,169)',paddingTop:5}}>
                    <Link to='/login'><span style={{color:'#fff'}}>退出</span></Link>
                </div>
            </div>
        )
    }
}
Setting=withRouter(Setting);
export default Setting;