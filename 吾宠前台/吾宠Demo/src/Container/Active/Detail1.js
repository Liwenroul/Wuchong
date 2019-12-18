import React from 'react';
import {Link,Route} from 'react-router-dom';
import {WingBlank} from 'antd-mobile'
// 无状态组件
export default class Detail1 extends React.Component{
    constructor(){
        super();
        this.state={
            data:[],
            page:'',
            acInfoId:'',
            dengluId:''
        }
    }
    componentDidMount(){
        // let page = this.props.match.params.activeId;
        // console.log(page)
        // let url='/active/ac'+page;
        // fetch(url)
        // .then((res)=>res.json())
        // .then((res)=>{
        //     console.log(res);
        //     this.setState({
        //         data:res,
        //         page:page
        //     })
        //     console.log(this.state.data[0].acContent)
        //     console.log(this.state.page)
        // })
    //获取当前页面活动ID
        fetch("/activeinfo")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res[0].activeId);
            this.setState({
                acInfoId:res[0].activeId
            })
        })
    //匹配对应活动ID的活动数据
        fetch("/active")
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
        // var dengluId=this.props.match.params.dengluId;
        // this.setState({
        //     dengluId:dengluId
        // })
        console.log(this.props.match.params.dengluId);
        this.setState({
            dengluId:this.props.match.params.dengluId
        })
    }
    render(){
        return (
            <div>
            {/* 返回活动列表页 */}
                <Link to={'/activity/'+this.state.dengluId}>
                    <i style={{float:'right',fontSize:'30px',color:'#1daea9'}} 
                    className='iconfont icon-icon-' key='close'></i>  
                </Link>
            {/* 活动详情 */}
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
            {/* 报名入口 */}
                <div>
                    <Link to={`/signup/`+this.state.dengluId} style={{color:'#1daea9',float:'right',marginTop:'20px'}}>点此报名</Link>
                    {/* <Link to={`/signup/`+this.state.acInfoId} style={{color:'#1daea9',float:'right',marginTop:'20px'}}>点此报名</Link> */}
                </div>
            </div>
        )
    }
}