import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Apptab from './Container/Apptab';

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



//路由 跳转
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path='/' component={AppStart} exact/>
                    <Route path='/home' component={Apptab}/>
                    <Route path='/login' component={AppLogin}/>
                    <Route  path='/tab' component={Apptab}/>
                    <Route  path='/zhuce' component={AppZhuce} />
                    <Route path='/wangji' component={AppForget} />
                    <Route  path='/petxinxi' component={AppPetXinxi} />
                    <Route path='/fabu' component={AppFabu}/>
                    <Route path={'/weizhi'} component={AppWeizhi} />

                    <Route path='/all' component={Apptab}/>
                    <Route path='/activity' component={Apptab}/>
                    <Route path='/detail1' component={Detail1}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/position'  component={Position}/>

                    <Route path='/clockin' component={ClockIn}/>
                    {/* <Route path='/daka' component={Apptab}> */}
                    <Route path='/add' component={Add}/>

                    
                    {/* <Route  path='/' component={AppTab} exact/> */}
                    <Route path='/follow' component={AppGZ}/>
                    <Route path ='/chat' component={Chat}/>
                    <Route path ='/play' component={Play}/>

                    {/* <Route path='/' component={Apptab} exact/> */}
                    
                    <Route path='/personalInfo' component={PersonalInfo}/>
                    <Route path='/petInfo' component={PetInfo}/>
                    <Route path='/wochongxiu' component={Wochongxiu}/>
                    <Route path='/joinActive' component={JoinActive}/>
                    <Route path='/myAttention' component={MyAttention}/>
                    <Route path='/setting' component={Setting}/>
                    <Route path='/EditUserInfo' component={EditUserInfo}/>
                </div>
            </Router>
        )
    }
}
