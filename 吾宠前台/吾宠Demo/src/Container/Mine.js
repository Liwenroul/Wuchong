import React, { Component } from 'react';
import { List } from 'antd-mobile';
// import {Consumer} from './Context';
import { Avatar,Upload, Icon, message } from 'antd';
import {withRouter} from 'react-router-dom';
import UploadImg from './Mine/UploadImg';
// import M1 from './Mine/Component/M1';


const Item = List.Item;
const Brief = Item.Brief;

class Mine extends Component {
    constructor(props){
        super(props);
        this.state={
            dengluId:"",
            imageUrl:"",
            data:[]
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
            // console.log(res);
            for(var i=0;i<res.length;i++){
                console.log(res);
                if(res[i].userId==this.state.dengluId){
                    this.setState({
                        imageUrl:res[i].userAvatar,
                        data:res[i].userName
                    })
                }
            }
        })
    }
    enter=()=>{
        this.props.history.push("/personalInfo");

    }
    enter1=()=>{
        this.props.history.push("/petInfo");

    }
    enter2=()=>{
        this.props.history.push("/wochongxiu");
    }
    enter3=()=>{
        this.props.history.push("/joinActive");
    }
    enter4=()=>{
        this.props.history.push("/myAttention");
    }
    enter5=()=>{
        this.props.history.push("/setting");
    }
    change2 = () => {
        this.props.history.push('/tab')
      }
    render() {
        return (
            <div style={{backgroundColor:"#fff",position:"relative"}}>
                <div style={{backgroundColor:'rgb(29,174,169)',width:'100%',height:200}}>
                    <img src=""/>
                    <i style={{fontSize:22,color:'#fff'}} className='iconfont icon-back' onClick={this.change2}></i>
                </div>
                <div style={{width:80,height:80,borderRadius:40,position:'absolute',left:20,top:150,overflow:'hidden'}}>
                    <img src={this.state.imageUrl} style={{width:80}}/>
                </div>
    <p style={{marginLeft:130,fontSize:20,fontWeight:'bolder'}}>{this.state.data}</p>
                <List>
                    <Item 
                        // activeStyle={{color:'rgb(29,174,169)'}}
                        thumb={<i className='iconfont icon-gerenxinxi' style={{fontSize:22,color:'rgb(29,174,169)'}}></i>}//图片
                        arrow="horizontal"
                        onClick={this.enter}
                    >个人信息</Item>
                    <Item
                        // style={{borderBottom:'0.5px solid rgb(29,174,169)',height:30,width:355}}
                        thumb={<i className='iconfont icon-chongwu1' style={{fontSize:22,color:'rgb(29,174,169)'}}></i>}
                        onClick={this.enter1}
                        arrow="horizontal"
                    >
                     我的宠物
                    </Item>
                    <Item
                        // style={{borderBottom:'0.5px solid rgb(29,174,169)',height:30}}
                        thumb={<i className='iconfont icon-icon-test' style={{fontSize:22,color:'rgb(29,174,169)'}}></i>}
                        onClick={this.enter2}
                        arrow="horizontal"
                    >
                     吾宠秀
                    </Item>
                    <Item
                        // style={{borderBottom:'0.5px solid rgb(29,174,169)',height:30}}
                        thumb={<i className='iconfont icon-wocanyude' style={{fontSize:22,color:'rgb(29,174,169)'}}></i>}
                        onClick={this.enter3}
                        arrow="horizontal"
                    >
                     我参与的活动
                    </Item>
                    <Item
                        // style={{borderBottom:'0.5px solid rgb(29,174,169)',height:30}}
                        thumb={<i className='iconfont icon-guanzhu' style={{fontSize:22,color:'rgb(29,174,169)'}}></i>}
                        onClick={this.enter4}
                        arrow="horizontal"
                    >
                     我的关注
                    </Item>
                    <Item
                        // style={{borderBottom:'0.5px solid rgb(29,174,169)',height:30}}
                        thumb={<i className='iconfont icon-shezhi' style={{fontSize:22,color:'rgb(29,174,169)'}}></i>}
                        onClick={this.enter5}
                        arrow="horizontal"
                    >
                     设置
                    </Item>
                </List>  
            </div>
        )
    }
}
Mine =withRouter(Mine);
export default Mine;