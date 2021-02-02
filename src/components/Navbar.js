import Reacr from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => { 

    const linkStyle = () => {
        return {matgin: '10px'}
    }

    return (
        <>
        <div style={{display: 'flex'}}>
        <NavLink to='/home'><p style={linkStyle()}>Home</p></NavLink>
        <NavLink to='/Login'><p style={linkStyle()}>Login</p></NavLink>
        </div>
        </>
    )
}



