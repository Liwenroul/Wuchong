import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import {Link} from 'react-router-dom';

import { createRequireFromPath } from 'module';

export default class JoinActive extends Component {
    constructor(props){
        super(props);
        this.state={
            activeData:[],
            dengluId:this.props.match.params.dengluId,
            activeIdList:[],
        }
    }
    acInfo=(activeId)=>{
        const registerValue = {"acInfoId":activeId}
        fetch('/activeinfo', {
            method: "POST",
            headers: {
                "Content-type":"application/json;charset=utf-8",
            },
            body:JSON.stringify(registerValue) ,
       }).then( res => res.text())
         .then( data => {
             console.log(data);
         });
    }
    componentDidMount(){
        fetch("/signup")
        .then((res)=>res.json())
        .then((res)=>{
            for(var i=0;i<res.length;i++){
                if(res[i].userId==this.state.dengluId){
                    this.setState({
                        activeIdList:[...this.state.activeIdList,res[i].activeId]
                    })
                }
            }
            console.log(this.state.activeIdList);
        })
        fetch("/signActive")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            for(var i=0;i<this.state.activeIdList.length;i++){
                for(var j=0;j<res.length;j++){
                    if(res[j].activeId == this.state.activeIdList[i]){
                        this.setState({
                            activeData:[...this.state.activeData,res[j]]
                        })
                    }
                }
            }
            console.log(this.state.activeData);
        })
    }
    render() {
        return (
            <div>
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to={'/mine/'+this.state.dengluId}><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>参与活动</span>
                </div>
                <div>
                    {
                        this.state.activeData.map((item,idx)=>(
                            <Link to={'/acinfo/'+this.state.dengluId}><div onClick={()=>this.acInfo(item.activeId)} key={idx} style={{float:"left",width:350,height:100,marginLeft:10,marginTop:20,borderRadius:15,overflow:'hidden',position:'relative'}}>
                                <img src={item.acImg} style={{width:350}}/>
                                <p style={{float:'left',position:'absolute',bottom:-20,left:10,fontSize:25,color:'white'}}>{item.activeName}:
                                <span style={{fontSize:16,width:100,overflow:"hidden" ,whiteSpace: "nowrap",textOverflow: "ellipsis"}}>{item.acContent}</span>

                                {/* <span style={{width:100,overflow:"hidden" ,whiteSpace: "nowrap",textOverflow: "ellipsis"}}>{item.acContent}</span> */}
                                </p>
                            </div></Link>
                        ))
                    }
                        
                    
                </div>
            </div>
        )
    }
}
