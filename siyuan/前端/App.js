import React, { Component } from 'react';
import AppTab from './Container/AppTab';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Add from './Container/Add';
import ClockIn from './Container/ClockIn';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path='/' component={AppTab} exact/>
                    <Route path='/clockin' component={ClockIn} exact/>
                    <Route path='/add' component={Add} exact/>
                </div>
            </Router>

        )
    }
}
