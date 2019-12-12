import React, { Component } from 'react'
import {SearchBar} from 'antd-mobile'
import {Link,Route} from 'react-router-dom'
import AppFabu from './AppFabu'
export default class AppWeizhi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    // onChange= (value) => {
    //     this.setState({ value });
    //   };
    // clear = () => {
    //     this.setState({ value: '' });
    //   };
    
      handleChange=(event)=> {
        this.setState({value: event.target.value});
      }
    
    handleSubmit=(event)=> {
        // alert('提交的名字: ' + this.state.value);
        const registerValue = {"acCity": this.state.value}
        // const regImg={"dynamicImg":{url:'https://liwenroul.github.io/Wuchong/img/dynamic/d3.jpeg'}}
        if(this.state.value){
            fetch('/dingwei', {
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
        window.location='/fabu';
        event.preventDefault();
    }
    // handleInput = (e)=>{
    //     if(e.keyCode===13){
    //         this.onChange(e.target.value)
    //         this.clear()
    //     }
    // }
    
    render() {
        return (
            <div>
                <div style={{marginTop:'2%',width:'100%',height:100}}>
                    <form onSubmit={this.handleSubmit} style={{marginTop:'10%'}}>
                        <input type="text" style={{width:'60%',lineHeight:'40px',float:'left',marginLeft:'10px',borderRadius:'20px'}} placeholder={'河北师范大学'} value={this.state.value} onChange={this.handleChange} />
                        <input type="submit" value="确定" style={{float:'right',width:'20%',height:40,marginRight:'10px',marginTop:2,background:'rgb(29,174,169)',color:'#fff',borderRadius:'20px'}}/>
                    </form>
                </div>
                <div style={{marginTop:'20%',width:'100%'}}>
                    <Link to='/fabu'><h1 style={{marginLeft:'30%'}}> 《 默认位置 </h1></Link>
                </div>

                {/* <div style={{width:'100%',padding:'20px 20px'}}>
                    <h3>{this.state.value}</h3>
                </div> */}
                <Route path='/fabu' component={AppFabu}/>
            </div>
        )
    }
}
