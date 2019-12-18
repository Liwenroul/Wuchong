import React, { Component } from 'react';
import { List } from 'antd-mobile';
import {Link,Route} from 'react-router-dom';
import { Avatar,Upload, Icon, message } from 'antd';
import AtInfo from "./Mchildren/AtInfo";

const Item = List.Item;

export default class MyAttention extends Component {
    constructor(props){
        super(props);
        this.state={
            dengluId:this.props.match.params.dengluId,
            guanzhuIdList:[],
            userNameList:[]
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.onKeyDown);
        // let page = this.props.match.params.id;
        // let id = 1;
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
            fetch('/userinfo')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                for(var i=0;i<this.state.guanzhuIdList.length;i++){
                    for(var j=0;j<res.length;j++){
                        if(res[j].userId == this.state.guanzhuIdList[i]){
                            this.setState({
                                userNameList:[...this.state.userNameList,res[j]]
                            })
                        }
                    }
                }
                console.log(this.state.userNameList);
            })
            // this.refs.input.focus();
    }

    render() {
        return (
            <div>
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to={'/mine/'+this.state.dengluId}><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>我的关注</span>
                </div>
                <div>
                <List>
                    {
                        this.state.userNameList.map((item,idx)=>(
                            <div key={idx}>
                            <Link to={`/atInfo?userId:${item.userId}&&dengluId:${this.state.dengluId}`}><Item key={idx} onClick={()=>this.enter(item.userId)}
                                thumb={item.userAvatar}//图片
                                arrow="horizontal"
                                onClick={this.enter}
                        >{item.userName}</Item></Link>
                        <Route path={"/atInfo?userId:userId&&dengluId:dengluId"} component={AtInfo}/>
                        </div>
                        ))
                    }
                    
                 </List>
                </div>
            </div>
        )
    }
}
