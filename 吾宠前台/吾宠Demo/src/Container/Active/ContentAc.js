import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {WhiteSpace,Flex} from 'antd-mobile'

export default class ContentAc extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }           
    }
    componentDidMount(){
        let url='/active';
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div key={item.activeId} style={{height:'150px'}}>
                            <WhiteSpace size="lg" />
                                <Link to={`/detail1/`+item.activeId}>
                                    <Flex>
                                        <Flex.Item><img src={item.acImg} style={{width:'100%',height:'130px',borderRadius:'10px'}}/>
                                        <h1 style={{color:'white',position:'relative',top:'-80px',left:'20px'}}>{item.activeName}</h1>
                                        </Flex.Item>
                                    </Flex>
                                </Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}
