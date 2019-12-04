import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Grid ,Modal, Button, WhiteSpace, WingBlank} from 'antd-mobile';
const operation = Modal.operation;

const data =["2_05.png","2_08.png"].map((_val, i) => ({
    icon: require(`../../img/images/${_val}`),
    text: `name${i}`,
    dataId:`${i}`
  }));

export default class Wochongxiu extends Component {
    componentDidMount(){
        this.render();
    }
    render() {
        return (
            <div>
                <div style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',paddingTop:10,color:'#fff',fontSize:'20px'}}>
                    <Link to='/mine'><i className='iconfont icon-back' style={{color:"#fff"}}></i></Link>
                    <span style={{marginLeft:140}}>吾宠秀</span>
                </div>
                <div>
                    {/* <div className="sub-title">Custom content</div> */}
                    <Grid data={data}
                    hasLine={false}
                    itemStyle={{border:'1px solid rgb(29,174,169)',width:150,height:200,marginLeft:10,marginRight:10,marginTop:20,borderRadius:10}}
                    columnNum={2}
                    renderItem={dataItem => (
                        <div style={{}}>
                        <img src={dataItem.icon} style={{ width: '150px', height: '150px' ,backgroundColor:'blue'}} alt="" />
                        <div style={{ color: '#888', fontSize: '14px' }}>
                            <span style={{float:'left',marginLeft:10,marginTop:10}}>fasd</span>
                            <i className="iconfont icon-lajixiang" style={{color:"rgb(29,174,169)",float:'right',marginRight:10,marginTop:10}} onClick={() => operation([
      { text: '确认删除'},
      { text: '取消', onPress: () => console.log('置顶聊天被点击了') },{ text: '确认', onPress: () => {data.splice(dataItem.dataId,1);console.log(data)} },
    ])}></i>
                        </div>
                        </div>
                    )}
                    />
                </div>
            </div>
            
        )
    }
}
