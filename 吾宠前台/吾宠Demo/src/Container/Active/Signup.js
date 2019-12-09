import React, { Component } from 'react'
import {NavBar, WingBlank,WhiteSpace} from 'antd-mobile'
import {Link} from 'react-router-dom'


 const handleChange=()=>{
    var inputs=document.getElementsByTagName('input');
    console.log(inputs[0].value);
    inputs[0].value='';
    inputs[1].value='';
    inputs[2].value='';
    inputs[3].value='';
    inputs[4].value='';   
    // var buttons=document.getElementsByTagName('button');
    // buttons[0].innerHTML='已报名';
    // buttons[0].disabled='false';
    // console.log(buttons[0].innerHTML);
}
export default class Signup extends Component {
    render() {
        return (
            <div style={{background:'#fff'}}>
                <NavBar style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                    rightContent={[
                    <Link to='/detail1' key='signup'><i style={{color:'white',fontSize:'30px'}} className='iconfont icon-icon-' key='close1'></i></Link>
                    ]} key='signup'
                >报名</NavBar>
                <WhiteSpace size='lg'/>
                <WhiteSpace size='lg'/>
                <div className='signup'>
                    <WingBlank size='lg'>
                        <form style={{fontSize:'20px',color:'#1daea9'}}>
                            昵称: <input type='text' style={{border:0,borderBottom:'1px solid #1daea9',height:'30px'}}></input>
                            <WhiteSpace size='lg'/>
                            <br/>
                            电话: <input type='text' style={{border:0,borderBottom:'1px solid #1daea9',height:'30px'}}></input>
                            <WhiteSpace size='lg'/>
                            <br/>
                            宠物名: <input type='text' style={{border:0,borderBottom:'1px solid #1daea9',height:'30px'}}></input>
                            <WhiteSpace size='lg'/>
                            <br/>
                            宠物年龄: <input type='text' style={{border:0,borderBottom:'1px solid #1daea9',height:'30px'}}></input>
                            <WhiteSpace size='lg'/>
                            <br/>
                            宠物种类: <input type='text' style={{border:0,borderBottom:'1px solid #1daea9',height:'30px'}}></input>
                        </form>
                    </WingBlank>
                </div>
                <div style={{textAlign:'center',marginTop:'50px'}}>
                    <button style={{backgroundColor:'#1daea9',border:0,
                    borderRadius:'20px',width:'200px',height:'45px',
                    color:'white',fontSize:'20px'}} onClick={handleChange}>确定</button> 
                </div>
            </div>
        )
    }
}

