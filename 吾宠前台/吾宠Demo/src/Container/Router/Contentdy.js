import React from 'react';
import {Link,Route} from 'react-router-dom'
//无状态组件
var times = 0;
var num =0;
export default class Contentdy extends React.Component{
    constructor(){
        super();
        this.state={
            data:[],
            num:"",
            likeNumState:0,
            guanzhuId:'',
            userId:'',
            Id:''
        }
    }
    componentDidMount(){
        fetch("/denglu")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res[0].userId)
            this.setState({
                userId:res[0].userId
            })
        })
        
        
        fetch('/dynamic')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res,
                    
                })
                
            })
    }
    dianZan =(id)=> {    
            console.log(id)
            var zan = document.getElementById(id);
            var zanStr = JSON.parse(zan.innerHTML)
            if(this.state.likeNumState==0){
                zan.innerHTML = zanStr+1;
                this.state.likeNumState=1;
            }
            else if(this.state.likeNumState==1){
                zan.innerHTML = zanStr-1;
                this.state.likeNumState=0;
            }
           
    };
    guanZhu =(id)=> {           
        var btn = document.getElementById(id);
            num++;
            if (num % 2 === 1) {
                    btn.style.color = "red";
                    
        const registerValue = {"Id":"guanzhu"+parseInt(Math.random()*1000),"guanzhuId" : id,"userId":this.state.userId}
                    fetch('/guanzhu', {
                        method: "POST",
                        headers: {
                            "Content-type":"application/json;charset=utf-8",
                        },
                        body:JSON.stringify(registerValue),
                    }).then( res => res.text())
                        .then( data => {
                            console.log(data);
                        });
            }
            if (num % 2 === 0) {
                    btn.style.color = "gray";
                    fetch("/denglu")
                    .then((res)=>res.json())
                    .then((res)=>{
                        console.log(res[0].userId)
                        this.setState({
                            userId:res[0].userId
                        })
                    })
                    fetch('/guanzhu')
                    .then((res)=>res.json())
                    .then((res)=>{
                        for(var i =0;i<res.length;i++){
                            if(res[i].guanzhuId == id && res[i].userId==this.state.userId){
                                this.setState({
                                    Id:res[i].Id
                                })
                            }
                        }
                    })
                        const registerValue = {"Id":this.state.Id,"guanzhuId": id,"userId": this.state.userId}
                        console.log(registerValue);
                        fetch('/delguanzhu', {
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
    };
    render(){
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div key={item.id} style={{height: '400px',background:'#eee'}}>
                            <img
                                src={item.dynamicImg}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                // this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            <div style={{float:'right',margin:'10px'}} >
                                <i style={{fontSize:30,lineHeight:'30px',margin:'0 10px',color:"red"}} id={item.dynamicId} className='iconfont icon-dianzan' onClick={()=>this.dianZan(item.dynamicId)}>{item.likeNum}</i>
                                <i style={{fontSize:30,lineHeight:'30px',margin:'0 10px'}} id={item.userId} className='iconfont icon-haibijiahao' onClick={()=>this.guanZhu(item.userId)}></i>
                            </div> 
                            <div style={{width:'100%',margin:'auto',float:'left'}}><p>{item.dynamicContent}</p></div> 
                            {/* <div>{item.dynamicImg}</div> */}
                        </div>
                    ))
                }
            </div>
        )
    }
    
}