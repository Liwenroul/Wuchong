import React, { Component } from 'react'
import { NavBar,Flex,WhiteSpace} from 'antd-mobile';
import activity1 from '../img/images/huodong1.jpg';
import activity2 from '../img/images/huodong2.jpg';
import {Link,Router,Route} from 'react-router-dom'; 
import ContentAc from './Active/ContentAc' 
import Detail1 from './Active/Detail1'
// import Detail1 from './container/Detail1'

export default class AppMe extends Component {
    constructor(props){
        super(props);
        this.state={
            city:'石家庄',
            dengluId:'',
            dengluId1:''
        }
    }
    componentDidMount(){
        fetch('/city').then((res)=>res.json()).then((res)=>{
            this.setState({
                city:res[0].cityName
            })
        });
        this.setState({
            dengluId:this.props.dengluId
        })
        // console.log(this.props.dengluId);
        console.log(this.state.dengluId)
        // console.log(this.props.match.params.dengluId);     
    }
    render() {
        return (
            <div>
                <NavBar style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
                    leftContent={[<Link to={'/tab'+this.state.dengluId} key='position'>
                    <i style={{color:'white',fontSize:'30px'}} className='iconfont icon-back' key='close1'></i>
                  </Link>]}
                    >
                    
                    <Link to='/position' style={{color:'white'}}>
                        {this.state.city}
                        <i style={{fontSize:22,color:'white'}} className='iconfont icon-jiantouxia'></i>
                    </Link>
                </NavBar>
                <div className='container'>
                    <ContentAc userId={this.state.dengluId}/>
                    {/* <Route path='/detail1/:activeId' component={Detail1}/> */}
                </div>
                
            </div>
        )
    }
}