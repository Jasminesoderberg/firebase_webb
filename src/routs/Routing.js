import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext'

import PrivetRoute from './PriveteRoute'

import {RegisterScreen} from '../view/signUpScreens/RegisterScreen'
import {ForgotPassword} from '../view/signUpScreens/ForgotPassword'

import {PostScreen} from '../view/PostScreen'
import {BookingsScreen} from '../view/BookingsScreen'
import {ProfileScreen} from '../view/ProfileScreen'

import {LogInScreen} from '../view/signUpScreens/LogInScreen'
import {HomeScreen} from '../view/HomeScreen'

export const Routing = (props) => {

    return(
        <>
        <Router>
        {props.children}
            <Switch>
            <AuthProvider>
                <PrivetRoute exact path='/' component={HomeScreen} />
                <Route path='/login' component={LogInScreen} />
                <Route path='/forgotpassword' component={ForgotPassword} />
                <Route path='/register' component={RegisterScreen} />
            </AuthProvider>
            </Switch>
        </Router>

        </>
    )

}