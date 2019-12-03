import React, { Component } from 'react'
import AppTab from './container/AppTab'
import Chat from './container/guanzhu/chat';
import AppGZ from './container/AppGuanzhu';
import Play from './container/guanzhu/play';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Router>
                
                <div>
                    <Route  path='/' component={AppTab} exact/>
                    <Route path='/follow' component={AppGZ}/>
                    <Route path ='/chat' component={Chat}/>
                    <Route path ='/play' component={Play}/>
                </div>
            </Router>
        )
    }
}
