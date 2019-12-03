import React, { Component } from 'react'

import { Icon,ImagePicker} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'
import AppWeizhi from './AppWeizhi';
import AppTab from '../Apptab';

const data = [{url:require('../../img/images/photo.jpg')}];
  
export default class AppFabu extends Component {
    state = {
            files: data,
            content:'上传照片'
    }
   
      onChange = (files,content, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
          content:'上传照片'//未显示
        });
      }
    
    render() {
        const { files } = this.state;
        const { content } = this.state;
        return (
            <div>
                <div  style={{border:'1px solid rgb(29,174,169)',color:'#33cccc',height:48,fontSize:20,textAlign:'center'}}>
                    <Link to='/tab'><i style={{float:'left',lineHeight:'40px',fontSize:30,color:'rgb(29,174,169)'}} className='iconfont icon-icon-' /></Link>
                    {/* <Link><button style={{width:'100px',height:45,border:'1px solid #33cccc',borderRadius:'25px'}}>存草稿</button></Link> */}
                    {/* <Link> */}
                    <button onClick={()=>{window.history.back()}} style={{float:'right',width:'100px',height:40,marginRight:'10px',marginTop:2,background:'rgb(29,174,169)',color:'#fff',borderRadius:'20px'}}>发布</button>
                    {/* </Link> */}
                </div>
                <div style={{width:'100%',height:'700px',background:'#fff'}}>
                    <form >
                        <ImagePicker
                            files={files}
                            content={content}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 5,content}
                            accept="image/gif,image/jpeg,image/jpg,image/png"
                        />
                        <textarea style={{width:'100%',height:'180px',margin:'0 auto',lineHeight:3}} placeholder={'写下此时此刻的想法···'} ></textarea>
                        <div style={{width:'100%',height:50}}>
                            <i style={{lineHeight:'50px',fontSize:20,margin:'10px 20px'}} className='iconfont icon-shouye'>你的位置 </i>
                            <Link  to='/weizhi'><Icon style={{float:'right',margin:'10px 10px'}} type="right"   /></Link>
                            
                            <div style={{width:'100%',height:50,lineHeight:'40px',fontSize:20,padding:'20px 20px',borderTop:'1px solid #eee'}}>
                                <button style={{float:'left',background:'rgb(29,174,169)',color:'#fff',borderRadius:'10px',lineHeight:'40px'}}>河北师范大学</button>
                            </div>
                        </div>
                    </form>
                </div>
                <Route path='/weizhi' component={AppWeizhi} />
                <Route  path='/tab' component={AppTab}/>
            </div>
        )
    }
}
