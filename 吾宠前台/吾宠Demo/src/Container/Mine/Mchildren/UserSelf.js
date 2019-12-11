import React, { Component } from 'react';
import { List } from 'antd-mobile';
import {Link} from 'react-router-dom';


const Item = List.Item;
export default class UserSelf extends Component {
    constructor(){
        super();
        this.state={
            dengluId:"",
            user:""
        }
    }
    componentDidMount(){
        fetch("/denglu")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res[0].userId)
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
                        user:res[i]
                    })
                }
            }
        })
    }
    render() {
        return (
            <div>
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to='/setting'><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>账户安全</span>
                </div>
                <div>
                <List className="my-list">
                    <Item extra={this.state.user.userTel}>手机号</Item>
                </List>
                </div>
            </div>
        )
    }
}
