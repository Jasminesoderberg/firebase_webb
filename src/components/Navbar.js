import React from 'react'

import './navbar.css'


export const Navbar = () => { 

    return (
        <>
            <nav className='navbar navbar-expand-sm navbar-light'>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <a href='/' className='nav-link'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/bookings' className='nav-link'>Bookings</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/profile' className='nav-link'>Profile</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/register' className='nav-link'>Register</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/login' className='nav-link'>Log in</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}



