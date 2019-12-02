import React, { Component } from 'react'
import AppTab from './container/AppTab'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import  AppLogin from './container/login/AppLogin'
import  AppZhuce from './container/login/container/AppZhuce'
import AppForget from './container/login/container/AppForget';
import AppPetXinxi from './container/login/container/AppPetXinxi';
import AppStart from './container/start/AppStart';
import AppFabu from './container/home/container/AppFabu';
import AppWeizhi from './container/home/container/AppWeizhi';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={AppStart}/>
                    <Route path='/login' component={AppLogin}/>
                    <Route  path='/tab' component={AppTab}/>
                    <Route  path='/zhuce' component={AppZhuce} />
                    <Route path='/wangji' component={AppForget} />
                    <Route  path='/petxinxi' component={AppPetXinxi} />
                    <Route path='/fabu' component={AppFabu}/>
                    <Route path={'/weizhi'} component={AppWeizhi} />
                </div>
            </Router>
        )
    }
}
