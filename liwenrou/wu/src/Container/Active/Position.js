import React, { Component } from 'react'
import { SearchBar, Button, PickerView,NavBar, WingBlank,WhiteSpace} from 'antd-mobile'
import {Link} from 'react-router-dom'
// import axios from 'axios';
import { List } from 'antd-mobile';

// import { Picker} from 'antd-mobile';
// import { createForm } from 'rc-form';
// import arrayTreeFilter from 'array-tree-filter';

// import { district, provinceLite } from 'antd-mobile-demo-data';


const Item = List.Item;
const Brief = Item.Brief;
const province = [
    {
      label: '北京',
      value: '01',
      children: [
        {
          label: '朝阳区',
          value: '01-1',
        },
        {
          label: '海淀区',
          value: '01-2',
        },
        {
          label: '通州区',
          value: '01-3',
        },
        {
          label: '房山区',
          value: '01-4',
        },{
          label: '丰台区',
          value: '01-5',
        },{
          label: '昌平区',
          value: '01-6',
        },{
          label: '大兴区',
          value: '01-7',
        },{
          label: '顺义区',
          value: '01-8',
        },{
          label: '西城区',
          value: '01-9',
        },{
          label: '延庆县',
          value: '01-10',
        },{
          label: '石景山区',
          value: '01-11',
        },{
          label: '宣武区',
          value: '01-12',
        },{
          label: '怀柔区',
          value: '01-13',
        },{
          label: '崇文区',
          value: '01-14',
        },{
          label: '密云县',
          value: '01-15',
        },{
          label: '东城区',
          value: '01-16',
        },{
          label: '门头沟区',
          value: '01-17',
        },{
          label: '平谷区',
          value: '01-18',
        },
      ],
    },
    {
      label: '广东省',
      value: '02',
      children: [
        {
          label: '东莞市',
          value: '02-1'
        },
        {
          label: '广州市',
          value: '02-2',
        },
        {
          label: '中山市',
          value: '02-3',
        },
        {
          label: '深圳市',
          value: '02-4',
        },
        {
          label: '惠州市',
          value: '02-5',
        },
        {
          label: '江门市',
          value: '02-6',
        },{
          label: '珠海市',
          value: '02-7',
        },{
          label: '汕头市',
          value: '02-8',
        },{
          label: '佛山市',
          value: '02-9',
        },{
          label: '湛江市',
          value: '02-10',
        },{
          label: '河源市',
          value: '02-11',
        },{
          label: '肇庆市',
          value: '02-12',
        },{
          label: '潮州市',
          value: '02-13',
        },{
          label: '清远市',
          value: '02-14',
        },{
          label: '韶关市',
          value: '02-15',
        },{
          label: '揭阳市',
          value: '02-16',
        },{
          label: '阳江市',
          value: '02-17',
        },{
          label: '云浮市',
          value: '02-18',
        },{
          label: '茂名市',
          value: '02-19',
        },{
          label: '梅州市',
          value: '02-20',
        },{
          label: '汕尾市',
          value: '02-21',
        }
      ],
    },
    {
      label:'山东省',
      value:'03',
      children:[
        {
          label:'济南市',
          value:'03-1'
        },{
          label:'青岛市',
          value:'03-2'
        },{
          label:'临沂市',
          value:'03-3'
        },{
          label:'济宁市',
          value:'03-4'
        },{
          label:'菏泽市',
          value:'03-5'
        },{
          label:'烟台市',
          value:'03-6'
        },{
          label:'泰安市',
          value:'03-7'
        },{
          label:'淄博市',
          value:'03-8'
        },{
          label:'潍坊市',
          value:'03-9'
        },{
          label:'日照市',
          value:'03-10'
        },{
          label:'威海市',
          value:'03-11'
        },{
          label:'滨州市',
          value:'03-12'
        },{
          label:'东营市',
          value:'03-13'
        },{
          label:'聊城市',
          value:'03-14'
        },{
          label:'德州市',
          value:'03-15'
        },{
          label:'莱芜市',
          value:'03-16'
        },{
          label:'枣庄市',
          value:'03-17'
        }
      ]
    },{
      label:'江苏省',
      value:'04',
      children:[
        {
          label:'苏州市',
          value:'04-1'
        },{
          label:'徐州市',
          value:'04-2'
        },{
          label:'盐城市',
          value:'04-3'
        },{
          label:'无锡市',
          value:'04-4'
        },{
          label:'南京市',
          value:'04-5'
        },{
          label:'南通市',
          value:'04-6'
        },{
          label:'连云港市',
          value:'04-7'
        },{
          label:'常州市',
          value:'04-8'
        },{
          label:'扬州市',
          value:'04-9'
        },{
          label:'镇江市',
          value:'04-10'
        },{
          label:'淮安市',
          value:'04-11'
        },{
          label:'泰州市',
          value:'04-12'
        },{
          label:'宿迁市',
          value:'04-13'
        }
      ]
    },{
      label:'河南省',
      value:'05',
      children:[
        {
          label:'郑州市',
          value:'05-1'
        },{
          label:'南阳市',
          value:'05-2'
        },{
          label:'新乡市',
          value:'05-3'
        },{
          label:'安阳市',
          value:'05-4'
        },{
          label:'洛阳市',
          value:'05-5'
        },{
          label:'信阳市',
          value:'05-6'
        },{
          label:'平顶山市',
          value:'05-7'
        },{
          label:'周口市',
          value:'05-8'
        },{
          label:'商丘市',
          value:'05-9'
        },{
          label:'开封市',
          value:'05-10'
        },{
          label:'焦作市',
          value:'05-11'
        },{
          label:'驻马店市',
          value:'05-12'
        },{
          label:'濮阳市',
          value:'05-13'
        },{
          label:'三门峡市',
          value:'05-14'
        },{
          label:'漯河市',
          value:'05-15'
        },{
          label:'许昌市',
          value:'05-16'
        },{
          label:'鹤壁市',
          value:'05-17'
        },{
          label:'济源市',
          value:'05-18'
        }
      ]
    },{
      label:'上海市',
      value:'06',
      children:[
        {
          label:'松江区',
          value:'06-1'
        },{
          label:'宝山区',
          value:'06-2'
        },{
          label:'金山区',
          value:'06-3'
        },{
          label:'嘉定区',
          value:'06-4'
        },{
          label:'南汇区',
          value:'06-5'
        },{
          label:'青浦区',
          value:'06-6'
        },{
          label:'浦东新区',
          value:'06-7'
        },{
          label:'奉贤区',
          value:'06-8'
        },{
          label:'闵行区',
          value:'06-9'
        },{
          label:'徐汇区',
          value:'06-10'
        },{
          label:'静安区',
          value:'06-11'
        },{
          label:'黄浦区',
          value:'06-12'
        },{
          label:'普陀区',
          value:'06-13'
        },{
          label:'杨浦区',
          value:'06-14'
        },{
          label:'虹口区',
          value:'06-15'
        },{
          label:'闸北区',
          value:'06-16'
        },{
          label:'长宁区',
          value:'06-17'
        },{
          label:'崇明县',
          value:'06-18'
        },{
          label:'卢湾区',
          value:'06-19'
        }
      ]
    },{
      label:'河北省',
      value:'07',
      children:[
        {
          label:'石家庄市',
          value:'07-1'
        },{
          label:'唐山市',
          value:'07-2'
        },{
          label:'保定市',
          value:'07-3'
        },{
          label:'邯郸市',
          value:'07-4'
        },{
          label:'邢台市',
          value:'07-5'
        },{
          label:'河北区',
          value:'07-6'
        },{
          label:'沧州市',
          value:'07-7'
        },{
          label:'秦皇岛市',
          value:'07-8'
        },{
          label:'张家口市',
          value:'07-9'
        },{
          label:'衡水市',
          value:'07-10'
        },{
          label:'廊坊市',
          value:'07-11'
        },{
          label:'承德市',
          value:'07-12'
        }
      ]
    },{
      label:'浙江省',
      value:'08',
      children:[
        {
          label:'温州市',
          value:'08-1'
        },{
          label:'宁波市',
          value:'08-2'
        },{
          label:'杭州市',
          value:'08-3'
        },{
          label:'台州市',
          value:'08-4'
        },{
          label:'嘉兴市',
          value:'08-5'
        },{
          label:'金华市',
          value:'08-6'
        },{
          label:'湖州市',
          value:'08-7'
        },{
          label:'绍兴市',
          value:'08-8'
        },{
          label:'舟山市',
          value:'08-9'
        },{
          label:'丽水市',
          value:'08-10'
        },{
          label:'衢州市',
          value:'08-11'
        }
      ]
    },{
      label:'香港特别行政区',
      value:'09'
    },{
      label:'陕西省',
      value:'010',
      children:[
        {
          label:'西安市',
          value:'010-1'
        },{
          label:'咸阳市',
          value:'010-2'
        },{
          label:'宝鸡市',
          value:'010-3'
        },{
          label:'汉中市',
          value:'010-4'
        },{
          label:'渭南市',
          value:'010-5'
        },{
          label:'安康市',
          value:'010-6'
        },{
          label:'榆林市',
          value:'010-7'
        },{
          label:'商洛市',
          value:'010-8'
        },{
          label:'延安市',
          value:'010-9'
        },{
          label:'铜州市',
          value:'010-10'
        }
      ]
    },{
      label:'湖南省',
      value:'011',
      children:[
        {
          label:'长沙市',
          value:'011-1'
        },{
          label:'邵阳市',
          value:'011-2'
        },{
          label:'常德市',
          value:'011-3'
        },{
          label:'衡阳市',
          value:'011-4'
        },{
          label:'株洲市',
          value:'011-5'
        },{
          label:'湘潭市',
          value:'011-6'
        },{
          label:'永州市',
          value:'011-7'
        },{
          label:'岳阳市',
          value:'011-8'
        },{
          label:'怀化市',
          value:'011-9'
        },{
          label:'郴州市',
          value:'011-10'
        },{
          label:'娄底市',
          value:'011-11'
        },{
          label:'益阳市',
          value:'011-12'
        },{
          label:'张家界市',
          value:'011-13'
        },{
          label:'湘西市',
          value:'011-14'
        }
      ]
    },{
      label:'重庆市',
      value:'012',
      children:[
        {
          label:'市',
          value:'012-1'
        },{
          label:'市',
          value:'012-2'
        },{
          label:'市',
          value:'012-3'
        },{
          label:'市',
          value:'012-4'
        },{
          label:'市',
          value:'012-5'
        },{
          label:'市',
          value:'012-6'
        },{
          label:'市',
          value:'012-7'
        },{
          label:'市',
          value:'012-8'
        },{
          label:'市',
          value:'012-9'
        },{
          label:'市',
          value:'012-10'
        },{
          label:'市',
          value:'012-11'
        },{
          label:'市',
          value:'012-12'
        },{
          label:'市',
          value:'012-13'
        },{
          label:'市',
          value:'012-14'
        },{
          label:'市',
          value:'012-15'
        },{
          label:'市',
          value:'012-16'
        },{
          label:'市',
          value:'012-17'
        },{
          label:'市',
          value:'012-18'
        },{
          label:'市',
          value:'012-19'
        },{
          label:'市',
          value:'012-20'
        },{
          label:'市',
          value:'012-21'
        },
      ]
    },{
      label:'福建省',
      value:'013',
      children:[
        {
          label:'市',
          value:'013-1'
        },{
          label:'市',
          value:'013-2'
        },{
          label:'市',
          value:'013-3'
        },{
          label:'市',
          value:'013-4'
        },{
          label:'市',
          value:'013-5'
        },{
          label:'市',
          value:'013-6'
        },{
          label:'市',
          value:'013-7'
        },{
          label:'市',
          value:'013-8'
        },{
          label:'市',
          value:'013-9'
        }
      ]
    },{
      label:'省',
      value:'0',
      children:[
        {
          label:'市',
          value:'0-1'
        },{
          label:'市',
          value:'0-2'
        },{
          label:'市',
          value:'0-3'
        },{
          label:'市',
          value:'0-4'
        },{
          label:'市',
          value:'0-5'
        },{
          label:'市',
          value:'0-6'
        },{
          label:'市',
          value:'0-7'
        },{
          label:'市',
          value:'0-8'
        },{
          label:'市',
          value:'0-9'
        },{
          label:'市',
          value:'0-10'
        },{
          label:'市',
          value:'0-11'
        },{
          label:'市',
          value:'0-12'
        },{
          label:'市',
          value:'0-13'
        },{
          label:'市',
          value:'0-14'
        },{
          label:'市',
          value:'0-15'
        },{
          label:'市',
          value:'0-16'
        },{
          label:'市',
          value:'0-17'
        },{
          label:'市',
          value:'0-18'
        },{
          label:'市',
          value:'0-19'
        },{
          label:'市',
          value:'0-20'
        },{
          label:'市',
          value:'0-21'
        },
      ]
    }
  ];



export default class Position extends Component {
  render() {
    return (
      <div className='position'>
        <NavBar style={{width:'100%',height:50,backgroundColor:'rgb(29,174,169)',color:'#fff',fontSize:'20px'}}
          leftContent={[
            <Link to='/activity' key='position'>
              <i style={{color:'white',fontSize:'30px'}} className='iconfont icon-back' key='close1'></i>
            </Link>
          ]}>石家庄
        </NavBar>
        <SearchBar placeholder="城市" maxLength={8} />
        <WhiteSpace size='md'/>
        <button style={{backgroundColor:'#1daea9',border:0,
                borderRadius:'20px',width:'200px',height:'45px',
                color:'white',fontSize:'20px'}}>自动获取定位
        </button>
        <WhiteSpace size='md'/>
        <PickerView data={province} value={['07', '07-1', '08-1']} />
      </div>
        )
    }
}

// import React, {Component} from 'react';
// import {
//     StyleSheet,
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     FlatList,
//     Image,
// } from 'react-native';
// import Utils from './common/Utils'
// import cityContent from './app/assets/city.json'
// const CITYHEIGHT = 30;
// const TITLEHEIGHT = 40;
// const DESCHEIGHT = 25;
// const CITYHEIGHT2 = 30;
// export default class LocationView extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             sections:[],
//             cityArray:[],
//             cityBase:[],
//             showFlag:true,
//         }
//         // 特殊栏目的数量 （定位，热门，常用）
//         var descNumber = 0;
//         // 和上面对应的item 的数量。三个的总数
//         var city2number = 0;
//         // 每个栏目前面城市的数量
//         var titleCityArray = [0];
//         // 右侧导航中 特殊栏目的数量。
//         this.letterDescNumber = 0;

//         this._moveAction = this._moveAction.bind(this);
//         this._getItemLayout = this._getItemLayout.bind(this);
//     }
    
//     static navigationOptions = { 
//         header:null,
//     };

//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.headerView}>
//                     <TouchableOpacity onPress={this._returnAction.bind(this)} style={styles.backTouchableOpacity}>
//                         <Image source={require('./resources/image/back_black.png')} style={{width:10,height:20,}}/>
//                     </TouchableOpacity>
//                     <TextInput 
//                         style={{width:200,height:50}} 
//                         onChangeText={(text)=>this.onChangeText(text)}
//                         underlineColorAndroid='transparent'
//                         placeholder={'输入城市名字或首字母查询'}
//                     />
//                     <Image source={require('./resources/image/search.png')} style={{marginRight:20,width:30,height:30}}></Image>                    
//                 </View>
//                 {this.state.showFlag == true?(
//                 <View >
//                     <FlatList 
//                         ref = {'FlatList'}
//                         style={{width:'100%'}}
//                         data={this.state.sections}
//                         contentContainerStyle = {styles.list}
//                         showsVerticalScrollIndicator = {false}
//                         renderItem = {this._renderItem}
//                         initialNumToRender = {50}
//                         getItemLayout={(data, index) =>this._getItemLayout(data,index)}
//                         keyExtractor={(item,index)=>{
//                             return(index.toString());
//                         }}
//                    >
//                    </FlatList> 
//                     <View
//                         style={{
//                             position:'absolute',
//                             height:Utils.size.height-93+Utils.statusBarHeight,
//                             alignItems:'center',
//                             justifyContent:'center',
//                             right:0,
//                         }}
//                     >
//                         <View style={{height:25*20}}>
//                             <FlatList
//                                 initialNumToRender = {25}
//                                 data={this.state.listData}
//                                 renderItem = {this._flatRenderItem}
//                                 keyExtractor = {(item,index)=>{return item+index}}
//                             >
//                             </FlatList>
//                         </View>
//                     </View>
//                 </View>
//                 ):(
//                     <FlatList 
//                         style={{width:Utils.size.width}}
//                         data={this.state.searchArray}
//                         renderItem = {this._searchRenderItem}
//                         keyExtractor={(item,index)=>{
//                             return(index.toString());
//                         }}
//                     />
//                 )}
//         </View>
//         )
//     }

//     _returnAction = () =>{
//         this.props.navigation.goBack(null);
//     }

//     _getItemLayout(data,index){
//         if(data[index].type =='letter' || data[index].type == 'city'){
//             let i;
//             for(i = index;i>0;i--){
//                 if(data[i].type=='letter'){
//                     break;
//                 }
//             }
//             let offset = this.state.listData.indexOf(data[i]['name'])-this.letterDescNumber;
//             return {
//                 index,
//                 offset: CITYHEIGHT*(this.titleCityArray[offset]+index-i)+(offset)*(TITLEHEIGHT)
//                             +this.city2number*CITYHEIGHT2+this.descNumber*(DESCHEIGHT),
//                 length: i == index?TITLEHEIGHT:CITYHEIGHT,
//             }
//         }else{
//             let i;
//             for(i = index;i>0;i--){
//                 if(data[i].type == 'desc'){
//                     break;
//                 }
//             }
//             let offset = this.state.listData.indexOf(data[i]['name'].slice(0,2));
//             return {
//                 index,
//                 offset:CITYHEIGHT2*index+offset*(DESCHEIGHT-CITYHEIGHT2),
//                 length:i == index?DESCHEIGHT:CITYHEIGHT2,
//             }
//         }
        
//     }

//     //查找
//     onChangeText(text){
//         let Chinese = new RegExp('^[\u4e00-\u9fa5]+$');
//         let English = new RegExp('^[a-zA-Z]+$');
//         if(Chinese.test(text)){
//             let temp = [];
//             this.state.cityBase.forEach(city => {
//                 if(city.name.indexOf(text) == 0){
//                 temp[temp.length] = city;
//                 }
//             });
//             this.setState({
//                 searchArray:temp,
//                 showFlag:false,
//             })
//         }else if(English.test(text)){
//             text = text.toLowerCase();
//             let temp = [];
//             this.state.cityBase.forEach(city => {
//                 if(city.name_en.indexOf(text) == 0){
//                 temp[temp.length] = city;
//                 }
//             });
//             this.setState({
//                 searchArray:temp,
//                 showFlag:false,
//             })
//         }else if(text.length==0){
//             this.setState({
//                 searchArray:this.state.cityBase,
//                 showFlag:true
//             });
//         }else{
//             this.setState({
//                 searchArray:[],
//                 showFlag:false
//             });
//         }
//     }

//     _searchRenderItem=(info)=>{
//         return(
//           <View style={{flexDirection:'row',width:Utils.size.width,height:CITYHEIGHT,alignItems:'center'}}>
//             <Text>{info.item.name}</Text>
//           </View>
//         )
//     }
    
//     _flatRenderItem = (info) => {
//         return (
//           <TouchableOpacity onPress={()=>this._moveAction(info)} style={{width:CITYHEIGHT,alignItems:'center',height:20}}>
//             <Text>{info.item}</Text>
//           </TouchableOpacity>
//         )
//       }
    
//     _moveAction(info){
//         let item = info.item.length == 1?info.item:info.item+'城市';
//         for(let i = 0;i<this.state.sections.length;i++){
//             if(this.state.sections[i].name == item){
//                 this.refs.FlatList.scrollToIndex({animated: false, index:i});
//                 break;
//             }
//         }
//     }
//     _renderItem = (info) => {
//         var txt = '  ' + info.item.name;
//         switch(info.item.type){
//             case 'city':{
//                 return( 
//                     <Text
//                         style={{ 
//                             height: CITYHEIGHT,
//                             width:Utils.size.width-70,
//                             textAlignVertical: 'center', 
//                            // backgroundColor: "#ffffff", 
//                             color: '#5C5C5C', 
//                             fontSize: 15,
//                             borderBottomColor:'rgb(161,161,161)',
//                             borderBottomWidth:1, 
//                             }}
//                         >
//                         {txt}
//                     </Text>
//                 )
//             }
//             case 'letter':{
//                 return(
//                     <Text
//                         style={{ 
//                             height: TITLEHEIGHT,
//                             width:Utils.size.width-70,
//                             textAlignVertical: 'center', 
//                             //backgroundColor: "#0f0", 
//                             color: '#5C5C5C', 
//                             fontSize: 15,
//                             borderBottomColor:'rgb(161,161,161)',
//                             borderBottomWidth:1, 
//                             }}
//                         >
//                         {txt}
//                     </Text>
//                 )
//             }
//             case 'desc':{
//                 return(
//                     <Text
//                         style={{ 
//                             height: DESCHEIGHT,
//                             width:Utils.size.width-50,
//                             textAlignVertical: 'center', 
//                             //backgroundColor: "#0f0", 
//                             color: '#5C5C5C', 
//                             fontSize: 15,
//                             }}
//                         >
//                         {txt}
//                     </Text>
//                 )
//             }
//             case 'city2':{
//                 txt = txt.split(',');
//                 return(
//                     <View style={{
//                         flexDirection:'row',
//                     }}>
//                         {
//                             txt.map((element,index) => {
//                                 return <Text
//                                     key={'info'+info.index+'index'+index}
//                                     style={{ 
//                                     textAlignVertical: 'center', 
//                                     textAlign:'center',
//                                     width:94.5,
//                                     height:CITYHEIGHT2,
//                                     borderColor:'rgb(220,220,220)',
//                                     borderWidth:Utils.pixel,
//                                     fontSize: 15 ,
//                                     marginRight:14,
//                                 }}>
//                                     {element}
//                                 </Text>
//                             })
//                         }
//                     </View>
//                     )
//             }
//             case 'location':{
//                 return(
//                     <Text
//                         style={{ 
//                         textAlignVertical: 'center', 
//                         textAlign:'center',
//                         width:94.5,
//                         height:CITYHEIGHT2,
//                         borderColor:'rgb(220,220,220)',
//                         borderWidth:Utils.pixel,
//                         fontSize: 15 ,
//                         marginRight:14,
//                         //marginTop:4
//                     }}>
//                         {txt}
//                     </Text>
//                 )
//             }
//         }
//     }
    
//     componentWillMount(){
//         this._gestureHandlers  = {
//             onStartShouldSetResponder:(evt)=>true,
//             onMoveShouldSetResponder:(evt)=>true,
//             onResponderStart:(evt)=>{
//                 console.log(this);
//                 //this.refs.FlatList.onResponderStart(evt);
//             }

//         }
//     }
//     componentDidMount(){
//         //初始化数据
//         let cityContent2 = cityContent.data;
//         let letterList = [];
//         let cityArray = [];
//         let sections = [];
//         this.city2number = 0;
//         this.descNumber = 0;
//         this.titleCityArray = [0];

//         //设置不同的type 在 FlatList 中的 renderItem 中用于区分，实现不同的样式
//         sections[sections.length] = {
//             name:'定位城市',
//             type:'desc',
//         };

//         sections[sections.length] = {
//             name:'珠海',
//             type:'location',
//         };
//         sections[sections.length] = {
//             name:'常用城市',
//             type:'desc',
//         };

//         sections[sections.length] = {
//             name:'珠海,广州',
//             type:'city2',
//         };

//         sections[sections.length] = {
//             name:'热门城市',
//             type:'desc',
//         };

//         sections[sections.length] = {
//             name:'珠海,广州,杭州',
//             type:'city2',
//         };
//         sections[sections.length] = {
//             name:'北京,上海,西安',
//             type:'city2',
//         };
//         sections[sections.length] = {
//             name:'广州,杭州,北京',
//             type:'city2',
//         };
//         sections[sections.length] = {
//             name:'上海,西安',
//             type:'city2',
//         };
//         letterList.splice(0,0,'定位','常用','热门');
//         this.letterDescNumber = letterList.length;
//         sections.forEach(element => {
//             if(element.type != 'desc'){
//                 this.city2number++;
//             }else{
//                 this.descNumber++;
//             }
//         });
//         let i = 0;
//         cityContent2.forEach(element => {
//             sections[sections.length] = {
//                 name:element.title,
//                 type:'letter',
//             };
//             element.city.forEach(element => {
//                 if(element.city_child == element.city_parent){
//                     sections[sections.length] = {
//                         name:element.city_child,
//                         type:'city',
//                     }
//                     i++;
//                 }
//             });
//             this.titleCityArray[this.titleCityArray.length] = i;
//             letterList[letterList.length] = element.title;
//         });
        
//         // 查找时使用的数据
//         let key = 0;
//         cityArray = [];
//         cityContent2.forEach(element => {
//             element.city.forEach(element => {
//                 if(element.city_child == element.city_parent){
//                 cityArray[cityArray.length] = {
//                     'name':element.city_child,
//                     'name_en':element.city_child_en,
//                     'key':key++,
//                 }
//                 }
//             });
//         });
//         this.setState({
//           sections:sections,
//           listData:letterList,
//           cityBase:cityArray,
//           searchArray:cityArray,
//         });
//     }
  
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#FFFFFF',
//         paddingLeft:25
//     },
//     headerView:{
//         width:Utils.size.width,
//         height:93-Utils.statusBarHeight*2,
//         flexDirection:'row',
//         alignItems:'center',
//         justifyContent:'space-between'
//     },

// });


