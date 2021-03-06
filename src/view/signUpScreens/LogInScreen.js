import React, { useRef, useState} from 'react';
import {Form, Button, Card, Container, Alert, Image} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext';

import {Link, useHistory} from 'react-router-dom'

import shapes from '../../img/Shapes.png'


export const LogInScreen = () => {

    return (
    <Container 
    className='d-flex aling-items-center justify-content-center'
    style={{minHeight: '100vh'}}
    >
        <div className='w-100' style={{maxWidth:'40%'}}>
            <SignUpScreen/>
        </div>
    </Container>
    );
};

const SignUpScreen = () => { 

    
    const emailRef = useRef()
    const passwordRef = useRef()
    const { logIn } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await logIn(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        }catch{
            setError('Faild to log in')
        }
        setLoading(false)
    }

    return (
        <>
            <img src={shapes} style={{width:'70%', margin:'0 auto'}} className='card-img-overlay'/>
        <Card style={{marginTop:'40%'}}>
        <Card.Body>
        <h2 className='text-center mb-4'>Log In</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} required/>
                </Form.Group>
                <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref={passwordRef} required/>
                </Form.Group>
                <Button 
                disabled={loading}
                className='w-100'
                type='submit'
                >Log In</Button>
            </Form>
            <div className='w-100 text-center mt-3'>
                <Link to='/forgotPassword'>Forgot Password?</Link>
            </div>
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
        Need an account? <Link to='/register'>Register</Link>
    </div>
</>
)
}