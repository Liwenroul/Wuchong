import React from 'react';
import {Link,Route} from 'react-router-dom';
// import ayy from '../../img/images/ayy.jpg'
import {WingBlank} from 'antd-mobile'
// import children from '..../images/ji.jpg'


// 无状态组件
export default class AcInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            page:'',
            acInfoId:'',
            dengluId:this.props.match.params.dengluId
        }
    }
    
    componentDidMount(){
        fetch("/activeinfo")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res[0].activeId);
            this.setState({
                acInfoId:res[0].activeId
            })
        })
        fetch("/signActive")
        .then((res)=>res.json())
        .then((res)=>{
            for(var i=0;i<res.length;i++){
                if(res[i].activeId==this.state.acInfoId){
                    this.setState({
                        data:res[i]
                    })
                }
            }
            console.log(this.state.data);
        })
    }
    // back=()=>{
    //     window.history.back();
    // }
    render(){
        return (
            <div >
                <Link to={'/joinActive/'+this.state.dengluId}>
                    <i style={{float:'right',fontSize:'30px',color:'#1daea9'}} 
                    className='iconfont icon-icon-' key='close'></i>  
                </Link>
                <div style={{marginTop:'20px'}} >
                        <div key={this.state.data.activeId} style={{width:'100%'}}>
                            <h2 style={{paddingLeft:'10px'}}>{this.state.data.activeName}</h2>
                            <p style={{paddingLeft:'10px'}}>地址:{this.state.data.acAddress}</p>
                            <img src={this.state.data.acImg} style={{width:'100%',height:'350px'}}/>
                            <WingBlank>
                                <div style={{fontSize:'20px'}}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{this.state.data.acContent}
                                </div>
                            </WingBlank>
                        </div>
                </div>
                <div style={{float:'right',marginTop:'20px'}}>
                    已报名
                </div>
            </div>
        )
    }
}