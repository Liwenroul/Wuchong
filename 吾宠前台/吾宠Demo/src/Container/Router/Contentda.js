import React from 'react';
import {Link,Route} from 'react-router-dom'
//无状态组件
var times = 0;
var num =0;
export default class Contentda extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            num:"",
            clockId:'',
            clockName:"",
          clockNum:"",
          clockTime:"",
          clockImg:"",
          clockCycle:"",
          userId:this.props.userId
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
        // let url2 = '/denglu'
        // fetch(url2)
        //     .then((res)=>res.json())
        //     .then((res)=>{
        //         console.log(res[0].userId);
        //         this.setState({
        //             userId:res[0].userId
        //         })
        //     })
    }
    bianji = (clockId) => {
        const registerValue = {"clockId":clockId}
      
        // if(this.state.clockName!=""&&this.state.clockNum!=""&&this.state.clockTime!=""&&this.state.clockImg!=""&&this.state.clockCycle!=""){
          fetch('/clockbianji', {
                method: "POST",
                headers: {
                    "Content-type":"application/json;charset=utf-8",
                },
                body:JSON.stringify(registerValue) ,
            }).then( res => res.text())
              .then( data => {
                  console.log(data);
              });
            // }
            console.log(clockId);
    }
    daka = (clockId) => {
        alert('打卡成功');
        // var clock = document.getElementById('clock');
        // var clockStr = JSON.parse(clock.innerHTML)
        // clock.innerHTML = clockStr+1;
        console.log(clockId)
        const registerValue = {"clockId":clockId};
        fetch('/clockdaka', {
            method: "POST",
            headers: {
                "Content-type":"application/json;charset=utf-8",
            },
            body:JSON.stringify(registerValue) ,
        }).then( res => res.text())
          .then( data => {
              console.log(data);
          });

          let url4 = '/clockin'
          fetch(url4)
              .then((res)=>res.json())
              .then((res)=>{
                  console.log(res);
                  this.setState({
                      data:res,
                      
                  })
              })
    }
    render(){
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        item.userId == this.state.userId ? 
                        <div key={item.id} style={{height: '100px',float:"left",marginLeft:"10%",marginTop:"5%"}}>
                            {/* <img  src={require('../../img/images/img0.png')} style={{ width: '60px', height: '60px' }} alt="" /> */}
                            <div style={{ color: '#888', fontSize: '14px'}}>
                                
                                <div  style={{width:"70px",height:"70px",marginLeft:"28%",marginBottom:"15px",border:"3px dashed gray",borderRadius:"50%"}}>
                                    <img src={item.clockImg} style={{ width: '60px', height: '60px',borderRadius:'50%' }} alt=""/>
                                </div>
                                <div style={{textAlign:'center'}}><button className='btn' onClick={()=>(this.daka(item.clockId))}>{item.clockName}</button><span style={{marginLeft:'10px'}} id='clock'>{item.clockNum}</span><button className='btn' onClick={()=>(this.bianji(item.clockId))}><Link to='/bianji' style={{color:'white'}}>编辑</Link></button></div>
                                
                            </div> 
                            
                        </div>
                        : ''
                            
                    ))
                }
            </div>
        )
    }
}
