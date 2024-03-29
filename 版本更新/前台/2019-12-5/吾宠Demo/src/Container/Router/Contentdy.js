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
            num:""
        }
    }
    componentDidMount(){
        let url = '/dynamic'
        fetch(url)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res
                    
                })
            })
    }
    // dianZan =()=> {            
    //     var btn = document.getElementById("zan");
    //         times++;
    //         if (times % 2 === 1) {
    //                 btn.style.color = "red";
    //         }
    //         if (times % 2 === 0) {
    //                 btn.style.color = "gray";
    //         }           
    // };
    guanZhu =()=> {            
        var btn = document.getElementById("zhu");
            num++;
            if (num % 2 === 1) {
                    btn.style.color = "red";
            }
            if (num % 2 === 0) {
                    btn.style.color = "gray";
            }           
    };
    render(){
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div key={item.id} style={{height: '400px',background:'#eee'}}>
                            <img
                                src={require('../../img/images/shoutu.png')}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                // this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            <div style={{float:'right',margin:'10px'}} >
                                <i style={{fontSize:30,lineHeight:'30px',margin:'0 10px',color:"red"}} id="zan" className='iconfont icon-dianzan' onClick={this.dianZan}>{item.likeNum}</i>
                                <i style={{fontSize:30,lineHeight:'30px',margin:'0 10px'}} id="zhu" className='iconfont icon-haibijiahao' onClick={this.guanZhu}></i>
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