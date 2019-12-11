import React from 'react';
import {Link,Route} from 'react-router-dom';
import ayy from '../../img/images/ayy.jpg'
// import children from '..../images/ji.jpg'


// 无状态组件
export default class Detail1 extends React.Component{
    constructor(){
        super();
        this.state={
            data:[],
            page:''
        }
    }
    componentDidMount(){
        let page = this.props.match.params.activeId;
        console.log(page)
        let url='/active/ac'+page;
       

        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res,
                page:page
            })
            console.log(this.state.data[0].acContent)
            console.log(this.state.page)
        })
        
        
    }
    // back=()=>{
    //     window.history.back();
    // }
    render(){
        return (
            <div >
                <Link to='/activity'>
                    <i style={{float:'right',fontSize:'30px',color:'#1daea9'}} 
                    className='iconfont icon-icon-' key='close'></i>  
                </Link>
                <div style={{marginTop:'20px'}} >
                {
                    this.state.data.map((item)=>(
                        <div key={item.activeId} style={{height:'550px',width:'100%'}}>
                            <h2>{item.activeName}</h2>
                            <p>{item.acAddress}</p>
                            <img src={item.acImg} style={{width:'100%',height:'350px'}}/>
                            <div>
                                {item.acContent}
                            </div>
                            {/* {this.state.data[0].acContent} */}
                        </div>
                    ))
                }
                
                </div>
                {/* <div className='title'>
                    <WingBlank size='lg'>
                        <h2 style={{fontSize:'30px'}}>爱牙牙</h2>
                        <WhiteSpace size='sm'/>
                        <p style={{color:'grey'}}>活动地点：石家庄市裕华区</p>
                    </WingBlank>
                </div>
                <WhiteSpace size='lg'/>
                <img src={ayy} style={{width:'100%'}}/>
                <div className='content'>
                    <div className='container' style={{width:'90%',margin:'0 auto'}}>
                        <WhiteSpace size='sm'/>
                        <WingBlank>
                            <p style={{fontSize:'22px',lineHeight:'35px'}}>&nbsp;&nbsp;&nbsp;
                                牙齿及口腔问题可以说是狗狗健康状况的第一防线，它的优劣直接决定了毛小孩有一个怎样的生活品
                                质？以科普为核心，唤醒养宠人对宠物牙齿问题的
                                重视；提高大家对宠物口腔疾病预防的意识。让宠
                                物主任都行动起来--健康养宠生活，从爱护她们的
                                牙齿开始！
                            </p>
                        </WingBlank>
                    </div>
                </div> */}
                <Link to={`/signup/`+this.state.page} style={{color:'#3fcccb',float:'right'}}>点此报名</Link>
            </div>
        )
    }
}