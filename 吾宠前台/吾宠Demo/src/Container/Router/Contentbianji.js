import React from 'react';
import {Link,Route} from 'react-router-dom';
import { NavBar,DatePickerView} from 'antd-mobile';
import { Upload, Icon, message,Modal } from 'antd';
//无状态组件
var times = 0;
var num =0;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }


export default class Contentda extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            data:[],
            num:"",
            clockId:'',
            clockName:"",
            clockNum:"",
            clockTime:"",
            userId:"",
            clockCycle:"",
        }
        
    }


  clockNameChange=(e)=>{
      console.log(e.target.value);
      this.setState({
          clockName:e.target.value
      })
  }
  clockNumChange=(e)=>{
      console.log(e.target.value);
      this.setState({
        clockNum:e.target.value
      })
  }
  clockTimeChange=(e)=>{
      console.log(e.target.value);
      this.setState({
        clockTime:e.target.value
      })
  }


    componentDidMount(){
      let url = '/clockbianji'
      fetch(url)
          .then((res)=>res.json())
          .then((res)=>{
              console.log(res);
              this.setState({
                  id:res[0].clockId,
                  clockId:res[0].clockId
              })
              console.log(this.state.id)
          })
      
      let url2 = '/clockin'
      fetch(url2)
          .then((res)=>res.json())
          .then((res)=>{
              console.log(res);
              this.setState({
                  data:res,
              })
          })

      let url3 = '/denglu'
      fetch(url3)
          .then((res)=>res.json())
          .then((res)=>{
              console.log(res);
              this.setState({
                  userId:res[0].userId
              })
          })
  }


    // componentDidMount(){
    //     let url = '/clockin'
    //     fetch(url)
    //         .then((res)=>res.json())
    //         .then((res)=>{
    //             console.log(res);
    //             this.setState({
    //                 data:res,
                    
    //             })
    //             console.log(this.state.data)
    //         })
     
    // }
    // bianji = () => {
    //     window.location='/bianji';
    // }

    state = {
        value: null,
      };
      onChange = (value) => {
        console.log(value);
        this.setState({ value });
      };
      onValueChange = (...args) => {
        console.log(args);
      };
    
    daka = (e) => {
        var div1=document.getElementById('daka');
        var div2=document.getElementById('daka2');
        var div3=document.getElementById('daka3');
            div1.className = 'daka2'
            div2.className = 'daka2'
            div3.className = 'daka2'
            e.target.className = 'daka'
        var span = document.getElementById('span');
        var every = document.getElementById('every');
        span.innerHTML='设置'+e.target.innerHTML+'打卡次数：';
        every.innerHTML=e.target.innerHTML;
        this.setState({
          clockCycle:every.innerHTML
        })
    }
    
    add = () => {
        var shezhi = document.getElementById('shezhi');
        shezhi.style.display='block'
    }

   


    state = {
        loading: false,
      };
    
      handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
      };
    
      register=()=>{
        console.log(this.state.clockName);
        const registerValue = {"clockName":this.state.clockName,"clockNum": this.state.clockNum,"clockTime": this.state.clockTime,"userId":this.state.userId,"clockId":this.state.clockId,"clockCycle":this.state.clockCycle}
      
        // if(this.state.clockName!=""&&this.state.clockNum!=""&&this.state.clockTime!=""&&this.state.clockImg!=""&&this.state.clockCycle!=""){
          fetch('/clockinxiugai', {
                method: "POST",
                headers: {
                    "Content-type":"application/json;charset=utf-8",
                },
                body:JSON.stringify(registerValue) ,
            }).then( res => res.text())
              .then( data => {
                  console.log(data);
              });
            // }

            let url4 = '/denglu'
            fetch(url4)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res);
                    this.setState({
                        userId:res[0].userId
                    })
                })
    }

    render(){
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
          const { imageUrl } = this.state;
          // console.log(data)
          console.log(this.state.id)
          console.log(this.state.data)
          console.log(this.state.userId)
        return (
            <div>
                <NavBar
                            style={{backgroundColor:'rgb(29,174,169)',color:'#000'}}
                            leftContent={<Link to='/clockin' style={{color:'white'}}><i style={{fontSize:22,color:'white'}} className='iconfont icon-back' ></i></Link>}
                            rightContent={<Link to='/clockin' style={{color:'white'}}><i style={{fontSize:22,color:'white'}} className='iconfont icon-duihao' onClick={this.register}></i></Link> }
                        >编辑</NavBar>
                {
                  this.state.data.map((item)=>(
                    item.clockId == this.state.id && item.userId == this.state.userId ? 
                    <div>
                        <div className="add">
                            <div className='to'>
                                <img src={item.clockImg} style={{ width: '105px', height: '105px',borderRadius:'50%' }} alt=""/>
                                
                            </div>
                            <input type="text" id='clockName' onChange={this.clockNameChange} placeholder={item.clockName} style={{textAlign:'center',marginLeft:'110px',marginTop:'20px',borderRadius:'5px',background:'#eee'}}/>
                        </div>
                        <div className="add2">
                            <span style={{fontSize:15,marginTop:'30px',marginLeft:'5px',float:'left',fontWeight:'bolder'}} id='span'>设置每日打卡次数：</span>
                            <div className="daka" id='daka'  style={{marginLeft:'40px'}} onClick={this.daka}>每日</div>
                            <div className="daka2" id='daka2'  onClick={this.daka}>每周</div>
                            <div className="daka2" id='daka3' onClick={this.daka}>每月</div>
                            <div className="add3">
                                <span style={{fontWeight:'bolder',marginLeft:'5px'}} id='every'>每日</span>
                                <input type='text' onChange={this.clockNumChange} id='clockNum' placeholder={item.clockNum} style={{height:'30px',width:'40px',marginLeft:'5px',borderRadius:'10px',textAlign:'center',fontWeight:'bolder',lineHeight:'40px'}}/>
                                <span style={{fontWeight:'bolder',marginLeft:'5px'}}>次</span>
                            </div>
                            <span style={{fontSize:15,marginTop:'20px',marginLeft:'5px',float:'left',fontWeight:'bolder'}}>设置提醒时间：{item.clockTime}</span>
                        </div>
                          <input type='text'  onChange={this.clockTimeChange} id='clockTime' className='time' placeholder='请输入修改时间 例如 08:00'/>
                      
                    </div> 
                    : ''

                  ))



                }
            </div>
        )
    }
}
