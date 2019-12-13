import React from 'react';
import {Link,Route} from 'react-router-dom';
// import ayy from '../../img/images/ayy.jpg'
import {WingBlank} from 'antd-mobile'
// import children from '..../images/ji.jpg'


// 无状态组件
export default class AcInfo extends React.Component{
    constructor(){
        super();
        this.state={
            data:[],
            page:''
        }
    }
    componentDidMount(){
        let page = this.props.match.params.activeId;
        console.log(page)
        let url='/active/ac'+page;
       

        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res,
                page:page
            })
            console.log(this.state.data[0].acContent)
            console.log(this.state.page)
        })
        
        
    }
    // back=()=>{
    //     window.history.back();
    // }
    render(){
        return (
            <div >
                <Link to='/joinActive'>
                    <i style={{float:'right',fontSize:'30px',color:'#1daea9'}} 
                    className='iconfont icon-icon-' key='close'></i>  
                </Link>
                <div style={{marginTop:'20px'}} >
                {
                    this.state.data.map((item)=>(
                        <div key={item.activeId} style={{width:'100%'}}>
                            <h2 style={{paddingLeft:'10px'}}>{item.activeName}</h2>
                            <p style={{paddingLeft:'10px'}}>地址:{item.acAddress}</p>
                            <img src={item.acImg} style={{width:'100%',height:'350px'}}/>
                            <WingBlank>
                                <div style={{fontSize:'20px'}}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{item.acContent}
                                </div>
                            </WingBlank>
                        </div>
                    ))
                }
                </div>
                <div >
                    <Link to={`/signup/`+this.state.page} style={{color:'#1daea9',float:'right',marginTop:'20px'}}>点此报名</Link>
                </div>
            </div>
        )
    }
}