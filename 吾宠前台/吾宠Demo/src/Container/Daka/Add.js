import React, { Component } from 'react';
import { NavBar,DatePickerView} from 'antd-mobile';
import { Upload, Icon, message,Modal } from 'antd';

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

export default class Add extends Component {
    constructor(props){
        super(props);
        this.state={
          clockName:"",
          clockNum:"",
          clockTime:"",
          userId:this.props.match.params.userId,
          clockImg:"",
          clockCycle:"",
          
      }
      console.log(this.props)
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
    // clockImgChange=(e)=>{
    //     console.log(e.target.value);
    //     this.setState({
    //       clockImg:e.target.value
    //     })
    // }
    // clockCycleChange=(e)=>{
    //     console.log(e.target.value);
    //     this.setState({
    //       clockCycle:e.target.value
    //     })
    // }
    componentWillMount(){
      // let url2 = '/denglu'
      //   fetch(url2)
      //       .then((res)=>res.json())
      //       .then((res)=>{
      //           console.log(res);
      //           this.setState({
      //               userId:res[0].userId
      //           })
      //       })
    }

    register=()=>{
        console.log(this.state.clockName);
        const registerValue = {"clockName":this.state.clockName,"clockNum": this.state.clockNum,"clockTime": this.state.clockTime,"userId":this.state.userId,"clockImg":this.state.clockImg,"clockCycle":this.state.clockCycle}
      

        // if(this.state.clockName!=""&&this.state.clockNum!=""&&this.state.clockTime!=""&&this.state.clockImg!=""&&this.state.clockCycle!=""){
          fetch('/clockin', {
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
        this.props.history.push('/clockin/'+this.state.userId);

       
    }

      
      // state = {
      //   value: '',
      //   loading: false,
      // };
      // onChange = (value) => {
      //   console.log(value);
      //   this.setState({ value });
      // };
      // onValueChange = (...args) => {
      //   console.log(args);
      // };
    
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

    clockin1 = () => {
        this.props.history.push('/clockin/'+this.state.userId);
    }


    state = {
        loading: false,
      };
    
      handleChange = info => {
        console.log(info.file.name)
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          let clockImg="https://liwenroul.github.io/Wuchong/img/avatar/"+info.file.name;
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
              clockImg:clockImg
            }),
          );
        }
      };

    

    render() {
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
          const { imageUrl } = this.state;
        return (
            <div>
                <div>
                    <NavBar
                            style={{backgroundColor:'rgb(29,174,169)',color:'#000'}}
                            leftContent={<i style={{fontSize:22,color:'white'}} className='iconfont icon-back' onClick={this.clockin1}></i>}
                            rightContent={<i style={{fontSize:22,color:'white'}} className='iconfont icon-duihao'  onClick={this.register}></i> }
                        >互动</NavBar>
                    <div className="add">
                        <div className='to'>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                                // beforeUpload={this.handleBeforeUpload}
                            >
                                {imageUrl ? <img src={imageUrl} onChange={this.clockImgChange} id='clockImg' alt="avatar" style={{ width: '90px',height:'90px',borderRadius:'50%',marginLeft:'-8px',marginTop:'-8px'}} /> : uploadButton}
                            </Upload>
                        </div>
                        <input type="text" id='clockName' onChange={this.clockNameChange}  placeholder="给互动命名" style={{textAlign:'center',marginLeft:'110px',marginTop:'20px',borderRadius:'5px',background:'#eee'}}/>
                    </div>
                    <div className="add2">
                        <span style={{fontSize:15,marginTop:'30px',marginLeft:'5px',float:'left',fontWeight:'bolder'}} id='span'>设置每日打卡次数：</span>
                        <div className="daka" id='daka'  style={{marginLeft:'40px'}} onClick={this.daka}>每日</div>
                        <div className="daka2" id='daka2'  onClick={this.daka}>每周</div>
                        <div className="daka2" id='daka3' onClick={this.daka}>每月</div>
                        <div className="add3">
                            <span style={{fontWeight:'bolder',marginLeft:'5px'}} id='every'>每日</span>
                            <input type='text' onChange={this.clockNumChange} id='clockNum' placeholder="1" style={{height:'30px',width:'40px',marginLeft:'5px',borderRadius:'10px',textAlign:'center',fontWeight:'bolder',lineHeight:'40px'}}/>
                            <span style={{fontWeight:'bolder',marginLeft:'5px'}}>次</span>
                        </div>
                        <span style={{fontSize:15,marginTop:'20px',marginLeft:'5px',float:'left',fontWeight:'bolder'}}>设置提醒时间：</span>
                    </div>
                    <div >
                      <input type='text' onChange={this.clockTimeChange} id='clockTime' className='time' placeholder='请输入时间 例如 08:00'/>
                    </div>
                    {/* <div className="jiahao" onClick={this.add}>+</div>
                    <div className='shezhi' id='shezhi' >
                        <DatePickerView
                            value={this.state.value}
                            onChange={this.clockTimeChange}
                            onValueChange={this.onValueChange}
                            mode='time'
                            itemStyle={{color:'rgb(29,174,169)',fontSize:20}}
                        />
                    </div> */}
                </div>
            </div>
        )
    }
}
