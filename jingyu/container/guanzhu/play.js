import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';
import img from '../../images/1.png'
import { Grid } from 'antd-mobile';
import Chat from './chat'
import '../guanzhu.css'

const data = Array.from(new Array(2)).map((_val, i) => ({
  icon: require('../../images/'+`${i+1}`+'.png'),
  text: `name${i}`,
}));

const data1 = Array.from(new Array(2)).map(() => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

export default class play extends Component {
    constructor(props){
        super();
        this.state={
            value:0,
            points:'已关注'
        }
    }
    change = () =>{
        this.props.history.push('./chat');
    }
    changeValue=()=>{
        parseInt(this.state.value++);
        console.log(parseInt(this.state.value));
        this.setState(()=>{
            if(this.state.value % 2==0){
                this.setState({
                    points:'已关注'
                })
                
            }
            else{
                this.setState({
                    points:'关注'
                })
                
            }
        })
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#000',height:'88px'}}
                    leftContent={[  
                        <i style={{fontSize:22}} className='iconfont icon-back' onClick={this.change}></i>,
                    ]}
                >wuchongxiu</NavBar>
                <div style={{heigth:'100px',width:'100%'}} className='userPlay'>
                    <img src={img} style={{height:'100px',width:'100px',position:'relative',left:'0px'}}/>
                    <div style={{width:'200px',position:'absolute',left:'120px',top:'122px'}}>
                        <p>username</p>
                        <p>userId</p>
                    </div>
                <div style={{fontSize:22,paddingTop:'30px',width:'200px',heigth:'100px',position:'relative',top:-90,left:280}} onClick={this.changeValue}>{this.state.points}</div>
                </div>
                <div className='userspace'>
                        <Grid data={data1}
                        columnNum={2}
                        renderItem={dataItem => (
                            <div style={{height:175}}>
                                <img src={img} style={{ width: '135px', height: '100px' ,marginTop:0}} alt="" className='space'/>
                                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                    cum
                                    <i style={{fontSize:22}} className='icon-svg-'></i>
                                </div>
                            </div>
                        )}
                        />
                </div>
            </div>
        )
    }
}
