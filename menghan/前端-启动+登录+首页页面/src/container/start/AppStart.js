import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Tabs } from 'antd-mobile';
const tabs = [
    { title: '' },
    { title: '' },
    { title: '' },
    { title: '' },
  ];

export default class AppStart extends Component {
    render() {
        return (
            <div>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{height: '736px' }}>
                        <div style={{margin:'auto',width:'100%'}}>
                        <img src={require('../../images/qi-2.png')} style={{float:'left', width: '100%', height: '736px' }} alt="" />
                        </div>
                    </div>
                    <div style={{height: '736px' }}>
                        <div style={{margin:'auto',width:'100%'}}>
                        <img src={require('../../images/qi-1.png')} style={{float:'left', width: '100%', height: '736px' }} alt="" />
                        </div>
                    </div>
                    <div style={{height: '736px' }}>
                        <div style={{margin:'auto',width:'100%'}}>
                        <img src={require('../../images/qi-3.png')} style={{float:'left', width: '100%', height: '736px' }} alt="" />
                        </div>
                    </div>
                    <div style={{height: '736px'}}>
                        <div style={{margin:'auto',width:'100%'}}>
                        <img src={require('../../images/qi-4.png')} style={{float:'left', width: '100%', height: '550px' }} alt="" />
                        <Link to='/login' style={{width:'100%',height:50,paddingLeft:'100px',float:'left'}}>
                            <input type='submit' style={{width:'70%',height:50,background:'#1daea9',color:'#fff',borderRadius:'40px',fontSize:30,marginTop:20}} value='立即体验'/>
                        </Link>
                        </div>
                    </div>
                </Tabs>
            </div>
        )
    }
}
