import React, { useState }from 'react';
import {Card, Button, Alert} from 'react-bootstrap'

import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'



export const HomeScreen = () => {

    const [error, setError] = useState('')
    const { currentUser, logOut } = useAuth()
    const history = useHistory()

    async function handleLogOut () {
        setError('')

        try{
            await logOut()
            history.push('/logIn')
        }catch{
            setError('Faild to log out')
        }
    }

    return (
    <>
    <Card>
        <Card.Body>
        <h2 className='text-center mb-2'>Home</h2>
        {error && <Alert variant='danger'>{error}</Alert>}

        <strong>Email:</strong> {currentUser.email}
        </Card.Body>
    </Card>

    <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogOut}>Log Out</Button>
    </div>
    </>
    );
};

