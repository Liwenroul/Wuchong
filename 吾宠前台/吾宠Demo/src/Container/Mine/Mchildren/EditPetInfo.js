import React, { Component } from 'react'
import { NavBar, Icon,WingBlank} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'
import UploadImgEditPet from "../UploadImgEditPet";

export default class EditPetInfo extends Component {
    constructor(props){
        super(props);
        console.log(this.props.location.key);
        this.state={
            petImg:"",
            petName:"",
            petSex:"",
            petAge:"",
            editPetId:""
        }
    }
    componentWillMount(){
        // fetch("/denglu")
        // .then((res)=>res.json())
        // .then((res)=>{
        //     console.log(res[0].userId)
        //     this.setState({
        //         dengluId:res[0].userId
        //     })
        // })
        fetch("/editpet")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res[0].petId)
            this.setState({
                editPetId:res[0].petId
            })
        })
        fetch("/petinfo")
        .then((res)=>res.json())
        .then((res)=>{
            for(var i=0;i<res.length;i++){
                if(res[i].petId==this.state.editId){
                    this.setState({
                        petImg:res[i].petImg,
                        petName:res[i].petName,
                        petSex:res[i].petSex,
                        petAge:res[i].petAge
                    })
                }
            }
        })
    }
    addImg=(petImg)=>{
        console.log(petImg);
        this.setState({
            petImg:petImg
        })
    }
    nameChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            petName:e.target.value
        })
    }
    sexChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            petSex:e.target.value
        })
    }
    ageChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            petAge:e.target.value
        })
    }

    editInfo=()=>{
        console.log(this.state.petName);
        const registerValue = {"petImg":this.state.petImg,"petName":this.state.petName,"petSex": this.state.petSex,"petAge": this.state.petAge,"userId":this.state.editPetId}
       
        if(this.state.petName!=""&&this.state.petSex!=""&&this.state.petAge!=""){
           fetch('/editpetinfo', {
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
    }
    render() {
        return (
            <div style={{background:'#fff'}}>
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to='/petinfo'><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:120}}>编辑宠物信息</span>
                    {/* <Link to='/petinfo'><i className='iconfont icon-haibijiahao' style={{color:"#fff",float:'right',marginRight:15}}></i></Link> */}
                </div>
                <WingBlank>
                <div style={{marginLeft:125,marginTop:50,background:'#fff'}}>
                    <UploadImgEditPet addImg={this.addImg}/>
                </div>
                <div style={{height: '350px',background:'#fff'}}>
                    <input onChange={this.nameChange} style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,borderRadius:'20px',textAlign:'center',border:'1px solid #33cccc'}} type='text' id='petname' name='petname' value={this.state.petName} />
                    <input onChange={this.sexChange} style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,borderRadius:'20px',textAlign:'center',border:'1px solid #33cccc'}} type='text'  id='sex' name='sex' value={this.state.petSex} />
                    <input onChange={this.ageChange} style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,borderRadius:'20px',textAlign:'center',border:'1px solid #33cccc'}} type='text' id='age' name='age' value={this.state.petAge} />
                    <Link to='/petinfo' style={{width:'100%',height:50,paddingLeft:'105px'}}>
                    <input onClick={this.editpet} type='submit' style={{width:'45%',height:50,background:'#1daea9',color:'#fff',borderRadius:'40px',fontSize:25,marginTop:20}} value='确定'/>
                    </Link> 
                    <Link to='/petinfo' style={{width:'100%',height:50,paddingLeft:'105px'}}>
                    <input onClick={this.delPet} type='submit' style={{width:'45%',height:50,background:'#1daea9',color:'#fff',borderRadius:'40px',fontSize:25,marginTop:20}} value='删除'/>
                    </Link> 
                </div>
                </WingBlank>
            </div>
        )
    }
}
