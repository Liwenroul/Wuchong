import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Play from './play';
import img from '../../images/1.png';
import { relative } from 'path';
export default class chat extends Component {
    constructor(props){
        super();
    }
    change=()=>{
        this.props.history.push('/follow')
    }
    render() {
        return (
            
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000',height:'88px'}}
                    leftContent={[
                        <i style={{fontSize:22}} className='iconfont icon-back' onClick={this.change}></i>,
                    ]}
                >username</NavBar>
                    
                    <Link to='/play' className='userschat'>
                        <img src={img} style={{height:'40px',width:'40px',marginTop:"50px"}}/>
                        <div className='novel'>
                            hello
                        </div>
                    </Link> 
                    <Link to='/play'>
                    <img src={img} style={{height:'40px',width:'40px',marginTop:"50px",marginLeft:'300px'}}/>
                        <div className='novel' style={{marginLeft:'300px'}}>
                            hello
                        </div>
                    </Link>
                    
                    <div style={{position:"absolute",top:636,width:300,height:30,backgroundColor:'#fff',opacity:1}}>
                    <input style={{position:"absolute",width:300,height:30}}/>
                    <button style={{position:"absolute",left:310,width:60,height:30}}>发送</button>
                    </div>
                    
            </div>
        )
    }
}
