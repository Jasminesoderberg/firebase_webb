import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {HomeScreen} from '../view/HomeScreen'
import {LogInScreen} from '../view/LogInScreen'
import {RegisterScreen} from '../view/RegisterScreen'
import {PostScreen} from '../view/PostScreen'
import {BookingsScreen} from '../view/BookingsScreen'
import {ProfileScreen} from '../view/ProfileScreen'
import RouthingPath from './RouthingPath'

export const Routing = (props) => {


    return(
        <>
        <Router>
        {props.children}
            <Switch>
                <Route  exact path={RouthingPath.LogInScreen} component={LogInScreen}/>
                <Route  exact path={RouthingPath.HomeScreen} component={HomeScreen}/>
                <Route  exact path={RouthingPath.RegisterScreen} component={RegisterScreen}/>
                <Route  exact path={RouthingPath.PostsScreen} component={PostScreen}/>
                <Route  exact path={RouthingPath.BookingsScreen} component={BookingsScreen}/>
                <Route  exact path={RouthingPath.ProfilScreen} component={ProfileScreen}/>
            </Switch>
        </Router>

        </>
    )

}