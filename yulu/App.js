import React, { Component } from 'react'
// import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Apptab from './container/AppTab'
import AppMe from './container/Activity/AppMe'
import Detail1 from './container/Activity/container/Detail1'
import Signup from './container/Activity/container/Signup'
import Position from './container/Activity/container/Position'

export default class App extends Component {
    render() {
        return (
            
            // <Provider store={store}>
                <Router>
                    
                    <Route path='/all' component={Apptab}/>
                    <Route exact path='/activity' component={AppMe}/>
                    <Route exact path='/detail1' component={Detail1}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/position'  component={Position}/>
                </Router>
            // </Provider>
        )
    }
}