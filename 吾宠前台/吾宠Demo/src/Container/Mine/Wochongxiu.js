import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Grid ,Modal, Button, WhiteSpace, WingBlank} from 'antd-mobile';
const operation = Modal.operation;

let data =[];

export default class Wochongxiu extends Component {
    constructor(){
        super();
        this.state={
            dengluId:"",
            dynamicData:[]
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
        fetch("/dynamic")
        .then((res)=>res.json())
        .then((res)=>{
            for(var i=0;i<res.length;i++){
                console.log(res[i].userId);
                if(res[i].userId==this.state.dengluId){
                    this.setState({
                        dynamicData:[...this.state.dynamicData,res[i]]
                    })
                }
            }
            console.log(this.state.dynamicData);
        })
    }
    render() {
        return (
            <div>
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to='/mine'><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>吾宠秀</span>
                </div>
                <div>
                    {
                        this.state.dynamicData.map((item,idx)=>(
                            <div key={idx} style={{float:"left",border:'1px solid rgb(29,174,169)',width:150,height:200,marginLeft:10,marginRight:20,marginTop:20,borderRadius:10}}>
                                <div style={{width:150,overflow:"hidden"}}> 
                                    <img src={item.dynamicImg} style={{ width: '148px',backgroundColor:'blue',borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                                </div>
                                <div>
                                    <span style={{float:'left',marginLeft:10,marginTop:10,width:100,overflow:"hidden" ,whiteSpace: "nowrap",textOverflow: "ellipsis"}}>{item.dynamicContent}</span>
                                    <i className="iconfont icon-lajixiang" style={{color:"rgb(29,174,169)",float:'right',marginRight:10,marginTop:10}}></i>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        )
    }
}
