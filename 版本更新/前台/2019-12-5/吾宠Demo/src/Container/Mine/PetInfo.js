import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class PetInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            petSex:"",
            petName:"",
            petAge:"",
            petImg:""
        }
    }
    componentDidMount(){
        fetch("/petinfo") 
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                petName:res[0].petName,
                petSex:res[0].petSex,
                petAge:res[0].petAge,
                petImg:res[0].petImg
            })
        })
    }
    render() {
        return (
            <div>
                
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to='/mine'><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>我的宠物</span>
                    <Link to='/mine'><i className='iconfont icon-haibijiahao' style={{color:"#fff",float:'right',marginRight:15}}></i></Link>
                </div>
                <ul style={{listStyle:'none'}}>
                    <li style={{width:100,height:300,borderRadius:50,backgroundColor:'rgb(29,174,169)',textAlign:'center',marginLeft:20,marginTop:20}}>
                        <img style={{width:80,height:80,backgroundColor:'blue',borderRadius:40,marginTop:20}}/>
                        <h1 style={{marginTop:20}}>{this.state.petName}</h1>
                        {/* <i className='iconfont icon-haibijiahao' style={{fontSize:25}}></i> */}
                        <h2>{this.state.petSex}</h2>
                        <h2>{this.state.petAge}岁</h2>
                    </li>
                </ul>
            </div>
        )
    }
}
