import React, { Component } from 'react'


import { SearchBar,NavBar,WhiteSpace} from 'antd-mobile'
import {Link} from 'react-router-dom'
import { List } from 'antd-mobile';
var Arr=['鞍山','安阳','安庆','安顺'];
var Brr=['北京','蚌埠','包头','保定','宝鸡','白银','白云鄂博','巴彦淖尔','北戴河','博鳌','承德','本溪','阜新','白山','白城','亳州','滨州','北海','百色','巴中','宝山'];
var Crr=['重庆','成都','长沙','长春','承德', '常州','池州','沧州','赤峰','滁州','巢湖','常德','郴州','潮州','崇左','德阳'];

// function handleChange(i){
//     console.log(i);
// }
export default class call extends Component {
    constructor(){
        super();
        this.state={
            city:'石家庄'
        }
    }
    Choose =(i)=>{
        this.setState({
            city:i
        })
        console.log(i);
        console.log(this.state.city);
    }
    render() {
        return (
            <div className='position'>
            <NavBar style={{backgroundColor:'#1daea9',color:'white',height:'80px'}}
              leftContent={[
                <Link to='/activity' key='position'>
                  <i style={{color:'white',fontSize:'30px'}} className='iconfont icon-back' key='close1'></i>
                </Link>
              ]}>{this.state.city}
            </NavBar>
            <SearchBar placeholder="城市" maxLength={8}/>
            <WhiteSpace size='md'/>
            <button style={{backgroundColor:'#1daea9',border:0,
                    borderRadius:'20px',width:'200px',height:'45px',
                    color:'white',fontSize:'20px'}}>自动获取定位
            </button>
            <WhiteSpace size='md'/>
            <div>
                <div>
                    <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>A</div>
                    {
                        Arr.map((i)=>{
                        return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                        onClick={this.Choose.bind(this,i)}>{i}</div>
                        })
                    }
                    <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>B</div>
                    {
                        Brr.map((i)=>{
                        return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                        onClick={this.Choose.bind(this,i)}>{i}</div>
                        })
                    }                    
                    <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>C</div>
                    {
                        Crr.map((i)=>{
                        return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                        onClick={this.Choose.bind(this,i)}>{i}</div>
                        })
                    }  
                </div>
            </div>    
          </div>

        )
    }
}
