import React, { Component } from 'react'
import { SearchBar,NavBar,WhiteSpace} from 'antd-mobile'
import {Link} from 'react-router-dom'
import AppMe from '../AppMe'
var Arr=['鞍山','安阳','安庆','安顺'];
var Brr=['北京','蚌埠','包头','保定','宝鸡','白银','白云鄂博','巴彦淖尔','北戴河','博鳌','承德','本溪','阜新','白山','白城','亳州','滨州','北海','百色','巴中','宝山'];
var Crr=['重庆','成都','长沙','长春','承德', '常州','池州','沧州','赤峰','滁州','巢湖','常德','郴州','潮州','崇左','德阳'];
var Drr=['大连','大庆','大同','丹东','大冶','东营','登封','大理','德州','东莞','达州','定西','大石桥'];
var Err=['鄂尔多斯','鄂州'];
var Frr=['佛山','福州','抚顺','阜阳','抚州','防城港'];
var Grr=['广州','贵阳','桂林','赣州','贵港','广元','广安','固原','哈尔滨'];
var Hrr=['呼和浩特','合肥','海口','邯郸','湖州','黄山','黄石','杭州','黄冈','衡阳','汉中','菏泽','衡水','呼伦贝尔','葫芦岛','淮南','淮北','鹤壁','淮安','怀化','惠州','河源','贺州','河池','鹤岗','黑河'];
var Irr=[];
var Jrr=['济南','吉林','九江','景德镇','金昌','揭阳','','','','','','','','','','','','','',]

// function handleChange(i){
//     console.log(i);
// }
export default class call extends Component {
    constructor(props){
        super(props);
        this.state={
            city:'石家庄'
        }
    }
    Choose =(i)=>{
        this.setState({
            city:i
        },()=>{
          console.log(this.state.city);
        const registerValue={"cityName":this.state.city}
        fetch('/city', {
          method: "POST",
          headers: {
              "Content-type":"application/json;charset=utf-8",
          },
          body:JSON.stringify(registerValue) ,
     }).then( res => res.text())
       .then( data => {
           console.log(data);
         //   if(data.success){
         //       alert('register OK');
         //   }
       });
        })
    //     console.log(this.state.city);
    //     const registerValue={"cityName":this.state.city}
    //     fetch('/city', {
    //       method: "POST",
    //       headers: {
    //           "Content-type":"application/json;charset=utf-8",
    //       },
    //       body:JSON.stringify(registerValue) ,
    //  }).then( res => res.text())
    //    .then( data => {
    //        console.log(data);
    //      //   if(data.success){
    //      //       alert('register OK');
    //      //   }
    //    });
     console.log('success')
 }    
    
    // componentDidMount(){
    //     fetch("http://restapi.amap.com/v3/ip?key=高德地图key").then((res)=>{
    //         if(res.ok){
    //           res.text().then((data)=>{
    //             const detail=JSON.parse(data)
    //             this.setState({
    //               city:detail.city,
    //               adcode:detail.adcode
    //             })
    //             console.log(this.state.adcode)
    //           })
    //         }
    //       }).catch((res)=>{
    //         console.log(res.status);
    //       });
      
    // }
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
            <AppMe city={this.state.city}/> 
          </div>

        )
    }
}
