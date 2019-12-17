import React, { Component } from 'react';
import { Avatar,Upload, Icon, message } from 'antd';
// import {Provider} from '../Context';
import Mine from '../Mine'
import '../../index.css';


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


export default class UploadImg extends Component {
  constructor(props){
    super(props);
    console.log(this.props.dengluId);
    this.state = {
      loading: false,
      imageUrl:"",
      dengluId:this.props.dengluId
    };
  }
  
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      let userAvatar="https://liwenroul.github.io/Wuchong/img/avatar/"+info.file.name;
      // console.log(name);
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
      const registerValue = {"userAvatar":userAvatar,"userId":this.state.dengluId}
      console.log(registerValue);
      fetch('/userinfo2', {
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
  };
  componentDidMount(){
    fetch("/userinfo")
    .then((res)=>res.json())
    .then((res)=>{
      for(var i=0;i<res.length;i++){
        if(res[i].userId==this.state.dengluId){
          this.setState({
            imageUrl:res[i].userAvatar,
        })
        }
      }   
    })
    this.setState({
      imageUrl:this.state.imageUrl,
      loading: false,
    })
    // console.log(this.state.imageUrl);

  }
  render() {
    const uploadButton = (
      <div>
        <img src={this.state.imageUrl}/>
      </div>
    );
    const { imageUrl } = this.state;
    // console.log(imageUrl);
    return (
      // <Provider value={imageUrl}>
        
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100px',height:'100px',borderRadius:'50%'}} />  : uploadButton}

      </Upload>
      // </Provider>
    );
  }
    }
    

