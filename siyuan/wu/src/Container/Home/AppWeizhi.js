import React, { Component } from 'react'
import {SearchBar} from 'antd-mobile'
import {Link,Route} from 'react-router-dom'
import AppFabu from './AppFabu'
export default class AppWeizhi extends Component {
    state={
            value: '',
    }
    onChange= (value) => {
        this.setState({ value });
      };
    clear = () => {
        this.setState({ value: '' });
      };
    
    
    // handleInput = (e)=>{
    //     if(e.keyCode===13){
    //         this.onChange(e.target.value)
    //         this.clear()
    //     }
    // }
    
    render() {
        return (
            <div>
                <SearchBar
                    value={this.state.value}
                    placeholder="Search"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onChange={this.onChange}
                    onClear={this.clear}
                    // onKeyDown={this.handleInput}
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => console.log('onCancel')}
                    showCancelButton
                />
                <div style={{width:'100%',padding:'20px 20px'}}><Link to='/fabu'>不显示位置</Link></div>
                <div style={{width:'100%',padding:'20px 20px'}}>
                    <h3>河北师范大学</h3>
                    <p>南二环东路20号</p>      
                </div>
                <div style={{width:'100%',padding:'20px 20px'}}>
                    <h3>{this.state.value}</h3>
                </div>
                <Route path='/fabu' component={AppFabu}/>
            </div>
        )
    }
}
