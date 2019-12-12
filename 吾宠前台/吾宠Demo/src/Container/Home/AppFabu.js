import React, { Component } from 'react'

import { Icon,ImagePicker} from 'antd-mobile';
import {Link,Route} from 'react-router-dom'
import AppWeizhi from './AppWeizhi';
import AppTab from '../Apptab';




const data = [{url:'https://liwenroul.github.io/Wuchong/img/dynamic/d3.jpeg'}];
  
export default class AppFabu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: data,
            value: '写下此时此刻的想法',
            dengluId:"",
            acCity:''
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
            console.log(this.state.dengluId)
        })
        fetch("/dingwei")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res[0].acCity)
            this.setState({
                acCity:res[0].acCity
            })
        })
        
    }
    handleChange=(event)=> {
        this.setState({value: event.target.value});
      }
    
    handleSubmit=(event)=> {
        // alert('提交的名字: ' + this.state.value);
        const registerValue = {"dynamicContent": this.state.value,"dynamicImg":this.state.files[0].url,"userId":this.state.dengluId,"acCity":this.state.acCity}
        // const regImg={"dynamicImg":{url:'https://liwenroul.github.io/Wuchong/img/dynamic/d3.jpeg'}}
        if(this.state.value){
            fetch('/dynamic', {
                method: "POST",
                headers: {
                    "Content-type":"application/json;charset=utf-8",
                },
                body:JSON.stringify(registerValue),
            }).then( res => res.text())
                .then( data => {
                    console.log(data);
                //   if(data.success){
                //       alert('register OK');
                //   }
                });
       
        }        
        window.location='/tab';
        event.preventDefault();
    }

      
      onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
        
      }
    
    render() {
        const { files } = this.state;
        
        return (
            <div style={{width:'100%',height:'700px',background:'#fff'}}>
                <form onSubmit={this.handleSubmit}>
                    <div  style={{border:'1px solid rgb(29,174,169)',color:'#33cccc',height:48,fontSize:20,textAlign:'center'}}>
                        <Link to='/tab'><i style={{float:'left',lineHeight:'40px',fontSize:30,color:'rgb(29,174,169)'}} className='iconfont icon-icon-' /></Link>
                        {/* <Link><button style={{width:'100px',height:45,border:'1px solid #33cccc',borderRadius:'25px'}}>存草稿</button></Link> */}
                        {/* <Link> */}
                        <input type="submit" value="发布" style={{float:'right',width:'100px',height:40,marginRight:'10px',marginTop:2,background:'rgb(29,174,169)',color:'#fff',borderRadius:'20px'}}/>
                        {/* </Link> */}
                    </div>
                
                    <ImagePicker
                                files={files}
                                onChange={this.onChange}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={files.length < 5}
                                accept="image/gif,image/jpeg,image/jpg,image/png"
                            />
                    
                    <textarea type="text" style={{width:'100%',height:'180px',margin:'0 auto',lineHeight:3}} placeholder={'写下此时此刻的想法···'} value={this.state.value} onChange={this.handleChange} ></textarea>
                    <div style={{width:'100%',height:50}}>
                            <i style={{lineHeight:'50px',fontSize:20,margin:'10px 20px'}} className='iconfont icon-shouye'>你的位置 </i>
                            <Link  to='/weizhi'><Icon style={{float:'right',margin:'10px 10px'}} type="right"   /></Link>
                            
                            <div style={{width:'100%',height:50,lineHeight:'40px',fontSize:20,padding:'20px 20px',borderTop:'1px solid #eee'}}>
                                <button style={{float:'left',background:'rgb(29,174,169)',color:'#fff',borderRadius:'10px',lineHeight:'40px'}}>{this.state.acCity}</button>
                            </div>
                        </div>
                {/* <input type="submit" value="发布" /> */}
                </form>
                
                <Route path='/weizhi' component={AppWeizhi} />
                <Route  path='/tab' component={AppTab}/>
            </div>
        )
    }
}
