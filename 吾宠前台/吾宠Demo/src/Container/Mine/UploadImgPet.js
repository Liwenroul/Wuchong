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


export default class UploadImgPet extends Component {
  constructor(){
    super();
    this.state = {
      loading: false,
      imageUrl:"",
      dengluId:""
    };
  }
  
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      let petImg="https://liwenroul.github.io/Wuchong/img/avatar/"+info.file.name;
      this.props.addImg(petImg);
      getBase64(info.file.originFileObj, imageUrl =>{
        this.setState({
          imageUrl,
          loading: false,
        })
      })
    }   
}
  componentDidMount(){
    this.setState({
      imageUrl:this.state.imageUrl,
      loading: false,
    })
  }
  render() {
    const uploadButton = (
        <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
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
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100px',height:'100px',borderRadius:'50'}} />  : uploadButton}

      </Upload>
      // </Provider>
    );
  }
    }
    

