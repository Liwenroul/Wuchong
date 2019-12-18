import React, { Component } from 'react'
import { SearchBar,NavBar,WhiteSpace} from 'antd-mobile'
import {Link} from 'react-router-dom'
var Arr=['鞍山','安阳','安庆','安顺'];
var Brr=['北京','蚌埠','包头','保定','宝鸡','白银','白云鄂博','巴彦淖尔','北戴河','博鳌','承德','本溪','阜新','白山','白城','亳州','滨州','北海','百色','巴中','宝山'];
var Crr=['重庆','成都','长沙','长春','承德', '常州','池州','沧州','赤峰','滁州','巢湖','常德','郴州','潮州','崇左','德阳'];
var Drr=['大连','大庆','大同','丹东','大冶','东营','登封','大理','德州','东莞','达州','定西','大石桥'];
var Err=['鄂尔多斯','鄂州'];
var Frr=['佛山','福州','抚顺','阜阳','抚州','防城港'];
var Grr=['广州','贵阳','桂林','赣州','贵港','广元','广安','固原','哈尔滨'];
var Hrr=['呼和浩特','合肥','海口','邯郸','湖州','黄山','黄石','杭州','黄冈','衡阳','汉中','菏泽','衡水','呼伦贝尔','葫芦岛','淮南','淮北','鹤壁','淮安','怀化','惠州','河源','贺州','河池','鹤岗','黑河'];
var Irr=[];
var Jrr=['济南','吉林','九江','景德镇','金昌','揭阳','吉安','锦州','鸡西','佳木斯','金华','济宁','焦作','荆州','荆门','江门','酒泉','嘉峪关','嘉兴'];
var Krr=['昆明','开封','克拉玛依'];
var Lrr=['兰州','拉萨','洛阳','柳州','乐山','临沧','陇南','丽江','丽水','连云港','廊坊','辽阳','辽源','泸州','漯河','来宾','娄底','六安','龙岩','莱芜','临沂','聊城','来宾'];
let Mrr=['绵阳','牡丹江','马鞍山','茂名','梅州','眉山'];
let Nrr=['南京','宁波','南通','南昌','南平','南阳','宁德','南宁','内江','南充'];
let Orr=[];
let Prr=['莆田','萍乡','盘锦','攀枝花','平顶山','平遥','平凉','濮阳','普洱'];
let Qrr=['青岛','泉州','齐齐哈尔','秦皇岛','曲阜','七台河','秦州','衢州','曲靖','庆阳','清远','钦州'];
let Rrr=['日照'];
let Srr=['上海','深圳','苏州','沈阳','石家庄','汕头','三亚','绍兴','十堰','上饶','四平','松原','宿迁','宿州','三明','三门峡','商丘','随州','邵阳','韶关','汕尾','遂宁','石嘴山','双鸭山','绥化'];
let Trr=['天津','唐山','太原','泰安','泰州','铁岭','通辽','通化','台州','铜陵','天水'];
let Urr=[];let Vrr=[];
let Wrr=['武汉','无锡','乌鲁木齐','潍坊','芜湖','武夷山','渭南','乌海','乌兰察布','温州','威海','梧州','武威','吴忠'];
let Xrr=['西安','厦门','西宁','襄樊','咸阳','湘潭','忻州','徐州','信阳','邢台','宣城','新余','新乡','孝感','咸宁','许昌'];
let Yrr=['烟台','银川','扬州','宜昌','岳阳','延安','营口','延吉','伊春','盐城','鹰潭','宜春','益阳','永州','阳江','云浮','玉林','宜宾','雅安','玉溪'];
let Zrr=['郑州','珠海','漳州','株洲','肇庆','自贡','舟山','张家界','最易','湛江','张家口','张家界','朝阳','镇江','淄博','枣庄','中山','资阳','周口','驻马店','昭通','张掖','中卫'];
let Cities=Arr.concat(Brr, Crr,Drr, Err,Frr, Grr,Hrr, Irr,Jrr, Krr,Lrr, Mrr,Nrr, Orr,Prr, Qrr,Rrr, Srr,Trr, Urr,Vrr, Wrr,Xrr, Yrr,Zrr);

// function handleChange(i){
//     console.log(i);
// }
export default class call extends Component {
    constructor(props){
        super(props);
        this.state={
            city:'',
            val:'',            
            dispaly: 'block',
            display1:'none',
            search:''
        }
    }
//城市列表中选择城市
    Choose =(i)=>{
        this.setState({
            city:i
        },()=>{
            console.log(this.state.city);
            const registerValue={"cityName":this.state.city}
            fetch('/city', {
                method: "POST",
                headers: {
                    "Content-type":"application/json;charset=utf-8",
                },
                body:JSON.stringify(registerValue) ,
            }).then( res => res.text())
            .then( data => {
                console.log(data);
            });
        })
        console.log('success')
    //回顶部
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
        });
    }
//点击按钮，自动获取定位  
    Pposition=()=>{
        var BMap = window.BMap;//取出window中的BMap对象
        var geolocation=new BMap.Geolocation();
        geolocation.getCurrentPosition(        
            (r)=>{
                if(true){
                    // let lat=r.address.lat//当前经度
                    // let lng=r.address.lng//当前纬度
                    // let province=r.address.province //返回当前省份
                    var city=r.address.city//返回当前城市
                    console.log(city);
                    var ccity=city.slice(-4,-1)
                    console.log(ccity)
                    this.setState({
                        city:ccity
                    },()=>{
                        console.log(this.state.city);
                        const registerValue={"cityName":this.state.city}
                        fetch('/city', {
                        method: "POST",
                        headers: {
                            "Content-type":"application/json;charset=utf-8",
                        },
                        body:JSON.stringify(registerValue) ,
                        }).then( res => res.text())
                        .then( data => {
                        console.log(data);
                        });
                    })
                }       
            }  
        )    
    }
//回顶部
    backTop=()=>{
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
        });
    }
//获取搜索框中的值
    handleChange =(e)=>{
        this.setState({val:e.target.value});
        console.log(this.state.val);
    }
//遍历数组，匹配结果
    searchClick=()=>{
        if(this.state.val == ''){
            this.setState({
                display1:'none',
                display:'block',
            });
            console.log('buhong')
        }
        else{
            let message = this.state.val;
            for(var i=0;i<Cities.length;i++){
                if(Cities[i] == message){
                    this.setState({
                        display:'none',
                        display1:'block',
                        search:Cities[i]                    
                    });
                }
            }
        }
    }
//点击搜索结果，将值传到Navbar
    ChooseSearch=()=>{
        this.setState({
            city:this.state.search
        },()=>{
            console.log(this.state.city);
            const registerValue={"cityName":this.state.city}
            fetch('/city', {
            method: "POST",
            headers: {
                "Content-type":"application/json;charset=utf-8",
            },
            body:JSON.stringify(registerValue) ,
            }).then( res => res.text())
            .then( data => {
            console.log(data);
            });
        })
        this.setState({
            display:'block',
            display1:'none'
        })
        document.getElementById('search').value='';
        console.log('success')
    }
//Enter键执行搜索
    handleKeydown = (e) =>{
        if(e.keyCode ===13){
            this.searchClick();
        }
    }
    render() {
        return (
            <div className='position'>
                {/* <i onClick={this.backTop} style={{color:'black',position:"absolute",fontSize:'100px'}} className='iconfont icon-fanhuidingbu4' key='backtop'></i> */}
                <NavBar style={{backgroundColor:'#1daea9',color:'white',height:'80px'}}
                    leftContent={[
                        // <Link to='/activity' key='position'>
                            <i onClick={()=>{window.history.back();}} style={{color:'white',fontSize:'30px'}} className='iconfont icon-back' key='close1'></i>
                        // </Link>
                    ]}>{this.state.city}
                </NavBar>
            {/* 搜索框 */}
                <div style={{width:'90%',height:'30px',marginTop:'10px',border:'1px solid grey',borderRadius:'5px',margin:'10px auto'}}>
                    <input placeholder="城市" maxLength={8} defaultValue={this.state.val}
                        onKeyDown={this.handleKeydown} onChange={this.handleChange} id='search'
                        style={{width:'80%',height:'28px',textAlign:'center',border:0,borderRadius:'5px'}}/>
                    <button onClick={this.searchClick} style={{width:'20%',height:'28px',border:0,borderRadius:'5px'}}>搜索</button>
                </div>
            {/* 自动获取定位 */}
                <button style={{backgroundColor:'#1daea9',border:0,
                        borderRadius:'20px',width:'200px',height:'45px',
                        color:'white',fontSize:'20px'}} onClick={this.Pposition}>自动获取定位
                </button>
                <WhiteSpace size='md'/>
            {/* 城市 */}
                <div>
                {/* 搜索结果 */}
                    <div style={{display:this.state.display1}}>
                        <div style={{width:'90%',height:'30px',border:'0',border:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.ChooseSearch}>{this.state.search}</div>
                    </div>
                {/* 城市列表 */}
                    <div style={{display:this.state.display}}>
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>A</div>
                        {
                            Arr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>B</div>
                        {
                            Brr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }                    
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>C</div>
                        {
                            Crr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>D</div>
                        {
                            Drr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>E</div>
                        {
                            Err.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>F</div>
                        {
                            Frr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>G</div>
                        {
                            Grr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>H</div>
                        {
                            Hrr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>I</div>
                        {
                            Irr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>J</div>
                        {
                            Jrr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>K</div>
                        {
                            Krr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>L</div>
                        {
                            Lrr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>M</div>
                        {
                            Mrr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>N</div>
                        {
                            Nrr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>O</div>
                        {
                            Orr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>P</div>
                        {
                            Prr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>Q</div>
                        {
                            Qrr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>R</div>
                        {
                            Rrr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>S</div>
                        {
                            Srr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>T</div>
                        {
                            Trr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>U</div>
                        {
                            Urr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>V</div>
                        {
                            Vrr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>W</div>
                        {
                            Wrr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>X</div>
                        {
                            Xrr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>Y</div>
                        {
                            Yrr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }
                        <div style={{width:'100%',height:'30px',border:'1px solid black',lineHeight:'30px',backgroundColor:'grey',paddingLeft:'10px'}}>Z</div>
                        {
                            Zrr.map((i)=>{
                            return <div key={i} style={{width:'90%',height:'30px',border:'0',borderBottom:'1px solid black',lineHeight:'30px',paddingLeft:'10px'}} 
                            onClick={this.Choose.bind(this,i)}>{i}</div>
                            })
                        }                  
                                                                                                                            
                    </div>
                </div>    
            </div>
        )
    }
}
