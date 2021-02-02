import React from 'react'

import {useHistory} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import {ProfileScreen} from '../view/ProfileScreen'


export const Navbar = () => { 

    const history = useHistory()


    const linkStyle = () => {
        return {matgin: '10px'}
    }


    return (
        <>
        <div style={{display: 'flex'}}>
        
            
        </div>
        </>
    )
}



