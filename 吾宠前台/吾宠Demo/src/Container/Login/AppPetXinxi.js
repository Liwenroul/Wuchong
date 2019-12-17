import React, { Component } from 'react'
import { NavBar, Icon,WingBlank} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'

export default class AppPetXinxi extends Component {
    constructor(){
        super();
        this.state={
            petName:"",
            petSex:"",
            petAge:""
        }
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
    register=()=>{
        console.log(this.state.petName);
        const registerValue = {"petName":this.state.petName,"petSex": this.state.petSex,"petAge": this.state.petAge}
       
        if(this.state.petName!=""&&this.state.petSex!=""&&this.state.petAge!=""){
           fetch('/petinfo', {
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
                <NavBar
                    style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                    rightContent={[
                        // <Link to='/login'>
                        <Icon type="right" key="0"  />
                        // </Link>
                    ]}
                    onClick={() => {window.location="/tab"}}
                    >添加宠物
                </NavBar>
                <WingBlank>
                <div style={{width:'100%',padding:'50px',background:'#fff'}}>
                    <img style={{width:'80%',marginLeft:'25px'}} src={require('../../img/images/tou.png')}/>
                </div>
                <div style={{height: '350px',background:'#fff'}}>
                    <input onChange={this.nameChange} style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,borderRadius:'20px',textAlign:'center',border:'1px solid #33cccc'}} type='text' id='petname' name='petname' placeholder='宠物昵称' />
                    <input onChange={this.sexChange} style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,borderRadius:'20px',textAlign:'center',border:'1px solid #33cccc'}} type='text'  id='sex' name='sex' placeholder='性别' />
                    <input onChange={this.ageChange} style={{width:'100%',margin:'0 auto',lineHeight:3,marginTop:20,borderRadius:'20px',textAlign:'center',border:'1px solid #33cccc'}} type='text' id='age' name='age' placeholder='年龄' />
                    <Link to='/tab' style={{width:'100%',height:50,paddingLeft:'105px'}}>
                    <input onClick={this.register} type='submit' style={{width:'45%',height:50,background:'#1daea9',color:'#fff',borderRadius:'40px',fontSize:25,marginTop:20}} value='确定'/>
                    </Link>
                    
                </div>
                </WingBlank>
            </div>
        )
    }
}
// import React, { Component } from 'react'

// import { Icon} from 'antd-mobile';
// import {Link,Route} from 'react-router-dom'
// import AppWeizhi from './AppWeizhi';
// import AppTab from '../Apptab';
// import { Upload, message } from 'antd';

// function getBase64(img, callback) {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
//   }
  
//   function beforeUpload(file) {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//       message.error('You can only upload JPG/PNG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//       message.error('Image must smaller than 2MB!');
//     }
//     return isJpgOrPng && isLt2M;
//   }

// export default class AppFabu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dynamicImg:"",
//             value: '',
//             dengluId:this.props.match.params.userId,
//             acCity:'',
//             loading: false,
//         }
        
//     }

//     componentDidMount(){ 
//             console.log(this.state.dengluId)
        
//         fetch("/dingwei")
//         .then((res)=>res.json())
//         .then((res)=>{
//             console.log(res[0].acCity)
//             this.setState({
//                 acCity:res[0].acCity
//             })
//         })
        
//     }
//     handleChange=(event)=> {
//         this.setState({value: event.target.value});
//       }
//     handleSubmit=(event)=> {
//         const registerValue = {"dynamicContent": this.state.value,"dynamicImg":this.state.dynamicImg,"userId":this.state.dengluId,"acCity":this.state.acCity}
//         // if(this.state.value){
//             fetch('/dynamic', {
//                 method: "POST",
//                 headers: {
//                     "Content-type":"application/json;charset=utf-8",
//                 },
//                 body:JSON.stringify(registerValue),
//             }).then( res => res.text())
//                 .then( data => {
//                     console.log(data);
//                 //   if(data.success){
//                 //       alert('register OK');
//                 //   }
//                 });
       
//         // }        
//         window.location='/tab'+this.state.dengluId;
//         // event.preventDefault();
//     }

      
//     //   onChange = (files, type, index) => {
//     //     console.log(files, type, index);
//     //     this.setState({
//     //       files,
//     //     });
        
//     //   }
    
    
//       handleChange =(info) => {
//         // console.log(info.file.name)
//         // if (info.file.status === 'uploading') {
//         //   this.setState({ loading: true });
//         //   return;
//         // }
//         // if (info.file.status === 'done') {
//           let dynamicImg="https://liwenroul.github.io/Wuchong/img/"+info.file.name;
//           // Get this url from response in real world.
//           getBase64(info.file.originFileObj, imageUrl =>
//             this.setState({
//               imageUrl,
//               // loading: false,
//               dynamicImg:dynamicImg
//             }),
//           );
//         // }
//       };
//     render() {
//         // const { files } = this.state;
//         const uploadButton = (
//             <div>
//               <Icon type={this.state.loading ? 'loading' : 'plus'} />
//               <div className="ant-upload-text">Upload</div>
//             </div>
//           );
//           const { imageUrl } = this.state;
//         return (
//             <div style={{width:'100%',height:'700px',background:'#fff'}}>
//                 <form onSubmit={this.handleSubmit}>
//                     <div  style={{border:'1px solid rgb(29,174,169)',color:'#33cccc',height:48,fontSize:20,textAlign:'center'}}>
//                         <Link to={'/tab'+this.state.dengluId}><i style={{float:'left',lineHeight:'40px',fontSize:30,color:'rgb(29,174,169)'}} className='iconfont icon-icon-' /></Link>
//                         {/* <Link><button style={{width:'100px',height:45,border:'1px solid #33cccc',borderRadius:'25px'}}>存草稿</button></Link> */}
//                         {/* <Link> */}
//                         <input type="submit" value="发布" style={{float:'right',width:'100px',height:40,marginRight:'10px',marginTop:2,background:'rgb(29,174,169)',color:'#fff',borderRadius:'20px'}}/>
//                         {/* </Link> */}
//                     </div>
                
//                     {/* <ImagePicker
//                                 files={files}
//                                 onChange={this.onChange}
//                                 onImageClick={(index, fs) => console.log(index, fs)}
//                                 selectable={files.length < 5}
//                                 accept="image/gif,image/jpeg,image/jpg,image/png"
//                             /> */}
//                     <Upload
//                                 name="img"
//                                 listType="picture-card"
//                                 className="img-uploader"
//                                 showUploadList={false}
//                                 action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//                                 beforeUpload={beforeUpload}
//                                 onChange={this.handleChange}
//                                 // beforeUpload={this.handleBeforeUpload}
//                             >
//                                 {imageUrl ? <img src={imageUrl} onChange={this.dynamicImgChange} id='dynamicImg' alt="img" style={{ width: '90px',height:'90px',borderRadius:'50%',marginLeft:'-8px',marginTop:'-8px'}} /> : uploadButton}
//                             </Upload>
//                     <textarea type="text" style={{width:'100%',height:'180px',margin:'0 auto',lineHeight:3}} placeholder={'写下此时此刻的想法···'} value={this.state.value} onChange={this.handleChange} ></textarea>
//                     <div style={{width:'100%',height:50}}>
//                             <i style={{lineHeight:'50px',fontSize:20,margin:'10px 20px'}} className='iconfont icon-shouye'>你的位置 </i>
//                             <Link  to='/weizhi'><Icon style={{float:'right',margin:'10px 10px'}} type="right"   /></Link>
                            
//                             <div style={{width:'100%',height:50,lineHeight:'40px',fontSize:20,padding:'20px 20px',borderTop:'1px solid #eee'}}>
//                                 <button style={{float:'left',background:'rgb(29,174,169)',color:'#fff',borderRadius:'10px',lineHeight:'40px'}}>{this.state.acCity}</button>
//                             </div>
//                         </div>
//                 {/* <input type="submit" value="发布" /> */}
//                 </form>
                
//                 <Route path='/weizhi' component={AppWeizhi} />
//                 {/* <Route  path='/tab' component={AppTab}/> */}
//             </div>
//         )
//     }
// }
