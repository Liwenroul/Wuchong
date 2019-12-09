import React, { Component } from 'react';
import { List } from 'antd-mobile';
import {Link} from 'react-router-dom';


const Item = List.Item;
export default class UserSelf extends Component {
    render() {
        return (
            <div>
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to='/setting'><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>账户安全</span>
                </div>
                <div>
                <List className="my-list">
                    <Item extra={'75647183'}>手机号</Item>
                </List>
                </div>
            </div>
        )
    }
}
