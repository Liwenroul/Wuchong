import React, { Component } from 'react'
import { NavBar, Grid} from 'antd-mobile';
import img0 from '../img/img0.png';
import {withRouter} from 'react-router-dom';

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: img0,
    text: `任务${i}`,

  }));
  

class ClockIn extends Component {
    constructor(props){
        super(props);
    }
    add = () => {
        this.props.history.push('/add');
    }
    add2 = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div>
                    <NavBar
                        style={{backgroundColor:'rgb(29,174,169)',color:'#000'}}
                        leftContent={<i style={{fontSize:22,color:'white'}} className='iconfont icon-back' onClick={this.add2}></i>}
                        rightContent={
                            <div>
                                <i style={{fontSize:22,color:'white'}} className='iconfont icon-haibijiahao' onClick={this.add}></i>
                            </div>
                        
                    }
                    >今日</NavBar>

                    <Grid data={data} columnNum={3} hasLine={false}
                        renderItem={dataItem => (
                            <div>
                            <img src={dataItem.icon} style={{ width: '60px', height: '60px' }} alt="" />
                            <div style={{ color: '#888', fontSize: '14px'}}>
                                <div className='to1'>
                                    <img/>
                                </div>
                                <span style={{textAlign:'center'}}>{dataItem.text}</span>
                            </div>
                            </div>
                        )}
                    />


                </div>
            </div>
        )
    }
}
ClockIn = withRouter(ClockIn);
export default ClockIn;