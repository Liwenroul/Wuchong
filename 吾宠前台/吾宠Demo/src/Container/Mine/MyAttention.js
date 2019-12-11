import React, { Component } from 'react';
import { List } from 'antd-mobile';
import {Link} from 'react-router-dom';
import { Avatar,Upload, Icon, message } from 'antd';


const Item = List.Item;

export default class MyAttention extends Component {
    constructor(props){
        super(props);
        this.state={
            dengluId:"",
            guanzhuIdList:[],
            userNameList:[]
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
        fetch("/guanzhu")
        .then((res)=>res.json())
        .then((res)=>{
            for(var i=0;i<res.length;i++){
                if(res[i].userId==this.state.dengluId){
                    this.setState({
                        guanzhuIdList:[...this.state.guanzhuIdList,res[i].guanzhuId]
                    })
                }
            }
            console.log(this.state.guanzhuIdList);
        })
        // fetch('/userinfo')
        // .then((res)=>res.json())
        // .then((res)=>{
        //     console.log(res);
            // for(var i=0;i<this.state.guanzhuIdList.length;i++){
            //     for(var j=0;j<res.length;i++){
            //         if(res[j].userId==this.state.guanzhuIdList[i]){
            //             this.setState({
            //                 userNameList:[...this.state.userNameList,res[i].userName]
            //             })
            //         }
            //     }
            // }
            // console.log(this.state.userNameList);
        
        // })
        
    }
    render() {
        return (
            <div>
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to='/mine'><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>我的关注</span>
                </div>
                <div>
                <List>
                    {/* <Avatar shape="square" size="small" icon="user" /> */}
                    <Item 
                        thumb={require("../../img/images/2_05.png")}//图片
                        arrow="horizontal"
                        onClick={this.enter}
                    >小郑</Item>
                    <Item
                        // style={{borderBottom:'0.5px solid rgb(29,174,169)',height:30,width:355}}
                        thumb={require("../../img/images/2_05.png")}
                        onClick={this.enter1}
                        arrow="horizontal"
                    >
                     小李
                    </Item>
                    <Item
                        // style={{borderBottom:'0.5px solid rgb(29,174,169)',height:30}}
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={this.enter2}
                        arrow="horizontal"
                    >
                     小黄
                    </Item>
                    <Item
                        // style={{borderBottom:'0.5px solid rgb(29,174,169)',height:30}}
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={this.enter3}
                        arrow="horizontal"
                    >
                     小赵
                    </Item>
                    <Item
                        // style={{borderBottom:'0.5px solid rgb(29,174,169)',height:30}}
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={this.enter4}
                        arrow="horizontal"
                    >
                     小孙
                    </Item>
                </List>
                </div>
            </div>
        )
    }
}
