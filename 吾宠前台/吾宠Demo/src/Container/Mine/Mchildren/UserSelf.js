import React, { Component } from 'react';
import { List } from 'antd-mobile';
import {Link} from 'react-router-dom';


const Item = List.Item;
export default class UserSelf extends Component {
    constructor(props){
        super(props);
        this.state={
            dengluId:this.props.match.params.dengluId,
            user:""
        }
    }
    componentDidMount(){
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
                    <Link to={'/setting/'+this.state.dengluId}><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>账户安全</span>
                </div>
                <div>    
                <List className="my-list">
                    <Item extra={this.state.user.userId}>吾宠号</Item>
                </List>
                <List className="my-list">
                    <Item extra={this.state.user.userTel}>手机号</Item>
                </List>
                </div>
            </div>
        )
    }
}
