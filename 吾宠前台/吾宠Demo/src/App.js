import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Apptab from './Container/Apptab';
import AppHome from './Container/AppHome';
import AppStart from './Container/AppStart';
import AppFabu from './Container/Home/AppFabu';
import AppWeizhi from './Container/Home/AppWeizhi';
import AppLogin from './Container/AppLogin';
import  AppZhuce from './Container/Login/AppZhuce'
import AppForget from './Container/Login/AppForget';
import AppPetXinxi from './Container/Login/AppPetXinxi';


import AppMe from './Container/AppMe'
import Detail1 from './Container/Active/Detail1'
import Signup from './Container/Active/Signup'
import Position from './Container/Active/Position'

import ClockIn from './Container/ClockIn'
import Add from './Container/Daka/Add';
import Bianji from './Container/Daka/Bianji';

import Chat from './Container/Guanzhu/Chat';
import AppGZ from './Container/AppGuanzhu';
import Play from './Container/Guanzhu/Play';

// import Applogin from './Applogin';
import PersonalInfo from './Container/Mine/PersonalInfo';
import PetInfo from './Container/Mine/PetInfo';
import Wochongxiu from './Container/Mine/Wochongxiu';
import JoinActive from './Container/Mine/JoinActive';
import MyAttention from './Container/Mine/MyAttention';
import Setting from './Container/Mine/Setting';
// import UploadImg from './Container/Mine/UploadImg';
import EditUserInfo from './Container/Mine/EditUserInfo';
import Mine from './Container/Mine';
import UserSelf from './Container/Mine/Mchildren/UserSelf';
import Addpet from './Container/Mine/Mchildren/AddPet';
import EditPetInfo from './Container/Mine/Mchildren/EditPetInfo';
import AcInfo from './Container/Mine/Mchildren/AcInfo';
import AtInfo from './Container/Mine/Mchildren/AtInfo';



//路由 跳转
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                <Route path='/' component={AppStart} exact/>
                    <Route path='/tab:userId' component={AppHome}/>
                    <Route path='/login' component={AppLogin}/>
                    {/* <Route  path='/tab:userId' component={AppHome}/> */}
                    <Route  path='/zhuce' component={AppZhuce} />
                    <Route path='/wangji' component={AppForget} />
                    <Route  path='/petxinxi' component={AppPetXinxi} />
                    <Route path='/fabu:userId' component={AppFabu}/>
                    <Route path='/weizhi:userId' component={AppWeizhi} />

                    {/* <Route path='/all' component={Apptab}/> */}
                    <Route path='/activity/:dengluId' component={AppMe}/>
                    <Route path='/detail1/:dengluId' component={Detail1}/>
                    {/* <Route path='/signup/:activeId' component={Signup}/> */}
                    <Route path='/signup/:dengluId' component={Signup}/>
                    <Route path='/position'  component={Position}/>

                    <Route path='/clockin/:userId' component={ClockIn}/>
                    <Route path='/daka/:userId' component={ClockIn}/>
                    {/* <Route path='/add/:userId' component={Add}/> */}
                    {/* <Route path='/bianji' component={Bianji}/> */}
                    {/* <Route path='/daka' component={ClockIn}/> */}
                    <Route path='/add' component={Add}/>
                    <Route path={'/bianji/:clockId'+"&&"+":dengluId"} component={Bianji}/>

                    {/* <Route  path='/' component={AppTab} exact/> */}
                    <Route path='/follow/:userId' component={AppGZ}/>
                    <Route path ='/chat/userId:userId/dengluId:dengluId' component={Chat}/>
                    <Route path ='/play/userId:userId/dengluId:dengluId' component={Play}/>

                    {/* <Route path='/' component={Apptab} exact/> */}
                    <Route path="/wode" component={Mine}/>
                    <Route path='/mine/:dengluId' component={Mine}/>
                    <Route path='/personalInfo/:dengluId' component={PersonalInfo}/>
                    <Route path='/petInfo/:dengluId' component={PetInfo}/>
                    <Route path='/wochongxiu/:dengluId' component={Wochongxiu}/>
                    <Route path='/joinActive/:dengluId' component={JoinActive}/>
                    <Route path='/myAttention/:dengluId' component={MyAttention}/>
                    <Route path='/setting/:dengluId' component={Setting}/>
                    <Route path='/EditUserInfo/:dengluId' component={EditUserInfo}/>
                    <Route path='/UserSelf/:dengluId' component={UserSelf}/>
                    <Route path="/addpet/:dengluId" component={Addpet}/>
                    <Route path="/editPetInfo/:dengluId" component={EditPetInfo}/>
                    <Route path="/acinfo/:dengluId" component={AcInfo}/>
                    <Route path ='/atInfo' component={AtInfo}/>

                </div>
            </Router>
        )
    }
}
