import React from 'react';
import {Link,Route} from 'react-router-dom'
//无状态组件
var times = 0;
var num =0;
export default class Contentda extends React.Component{
    constructor(){
        super();
        this.state={
            data:[],
            num:""
        }
    }
    componentDidMount(){
        let url = '/clockin'
        fetch(url)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res,
                    
                })
            })
    }
    bianji = (item) => {
        window.location='/bianji';

    }
    daka = () => {
        alert('打卡成功');
        var clock = document.getElementById('clock');
        var clockStr = JSON.parse(clock.innerHTML)
        clock.innerHTML = clockStr+1;
    }
    render(){
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div key={item.id} style={{height: '100px',float:"left",marginLeft:"10%",marginTop:"5%"}}>
                            {/* <img  src={require('../../img/images/img0.png')} style={{ width: '60px', height: '60px' }} alt="" /> */}
                            <div style={{ color: '#888', fontSize: '14px'}}>
                                
                                <div  style={{width:"70px",height:"70px",marginLeft:"28%",marginBottom:"15px",border:"3px dashed gray",borderRadius:"50%"}}>
                                    <img src={item.clockImg} style={{ width: '60px', height: '60px',borderRadius:'50%' }} alt=""/>
                                </div>
                                <div style={{textAlign:'center'}}><button className='btn' onClick={this.daka}>{item.clockName}</button><span style={{marginLeft:'10px'}} id='clock'>{item.clockNum}</span><button className='btn' onClick={()=>this.bianji(item)}>编辑</button></div>
                                
                            </div> 
                            
                        </div>
                            
                    ))
                }
            </div>
        )
    }
}
