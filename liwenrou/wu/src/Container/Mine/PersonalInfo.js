import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UploadImg from './UploadImg'
import {withRouter} from 'react-router-dom';

// import '../Component/personalInfo.css';

class PersonalInfo extends Component {
    constructor(props){
        super(props);
    }
    edit=()=>{
        this.props.history.push("/personalInfo/editUserInfo");
    }
    render() {
        return (
            <div>
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to='/wode'><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>个人信息</span>
                </div>
                <div style={{marginLeft:127,marginTop:10}}>
                    {/* <img style={{width:120,height:120,borderRadius:60,backgroundColor:'blue'}}/> */}
                    <UploadImg/>
                </div>
                <div>
                        <div style={{float:"left"}}>
                            <span style={{fontSize:20,color:'black',position:'relative',top:30,left:50}}>用户名</span>
                            <div style={{width:200,height:40,fontSize:20,float:'left',borderRadius:25,textAlign:'center',color:'#fff',marginLeft:130,backgroundColor:'rgb(29,174,169)',paddingTop:5}}>用户名</div>
                        </div>
                        <div style={{float:"left"}}>
                            <span style={{fontSize:20,color:'black',position:'relative',top:30,left:50}}>吾宠号</span>
                            <div style={{width:200,height:40,fontSize:20,borderRadius:25,textAlign:'center',color:'#fff',marginLeft:130,backgroundColor:'rgb(29,174,169)',paddingTop:5}}>7657e89</div>
                        </div>
                        <div style={{float:"left"}}>
                            <div onClick={this.edit} style={{width:300,height:40,fontSize:20,borderRadius:25,textAlign:'center',color:'#fff',marginLeft:37,marginTop:30,backgroundColor:'rgb(29,174,169)',paddingTop:5}}>编辑</div>
                        </div>
                </div>
            </div>
        )
    }
}
PersonalInfo =withRouter(PersonalInfo);
export default PersonalInfo;
