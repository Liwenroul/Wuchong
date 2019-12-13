import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class PetInfo extends Component {
    constructor(props){
        console.log(props);
        super(props);
        this.state={
            petData:[],
            dengluId:""
        }
    }
    componentDidMount(){
        fetch("/denglu")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res[0].userId)
            this.setState({
                dengluId:res[0].userId
            })
        })
        fetch("/petinfo") 
        .then((res)=>res.json())
        .then((res)=>{
            for(var i=0;i<res.length;i++){
                if(res[i].userId==this.state.dengluId){
                    this.setState({
                        petData:[...this.state.petData,res[i]]
                    })
                }
            }
            
        })
    }
    editPet=(petId)=>{
        console.log(petId);
        const registerValue = {"petId":petId};
        fetch('/editpet', {
            method: "POST",
            headers: {
                "Content-type":"application/json;charset=utf-8",
            },
            body:JSON.stringify(registerValue) ,
       })
       .then( res => res.text())
        .then( data => {
             console.log(data);
         });
        window.location="/editPetInfo";
    }
    render() {
        return (
            <div>
                
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to='/mine'><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>我的宠物</span>
                    <Link to='/addpet'><i className='iconfont icon-haibijiahao' style={{color:"#fff",float:'right',marginRight:15}}></i></Link>
                </div>
                <ul style={{listStyle:'none'}}>
                    {
                        this.state.petData.map((item,idx)=>(
                            // <Link to="/editPetInfo">
                                <li onClick={()=>this.editPet(item.petId)} key={idx} style={{float:"left",width:100,height:300,borderRadius:50,backgroundColor:'rgb(29,174,169)',textAlign:'center',marginLeft:20,marginTop:20}}>
                                <img src={item.petImg} style={{width:80,height:80,borderRadius:40,marginTop:20}}/>
                                <h1 style={{marginTop:20}}>{item.petName}</h1>
                                {/* <i className='iconfont icon-haibijiahao' style={{fontSize:25}}></i> */}
                                <h2>{item.petSex}</h2>
                                <h2>{item.petAge}岁</h2>
                            </li>
                            // </Link>
                        ))
                    }
                    
                </ul>
            </div>
        )
    }
}
