import React, { useRef, useState} from 'react';
import {Form, Button, Card, Container, Alert} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext';

import {Link, useHistory} from 'react-router-dom'

export const RegisterScreen = () => {

    return (
    <Container 
    className='d-flex aling-items-center justify-content-center'
    style={{minHeight: '100vh'}}
    >
        <div className='w-100' style={{maxWidth:'400px'}}>
            <RegisterForm/>
        </div>
    </Container>
    );
};

const RegisterForm = () => { 
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordconfirmRef = useRef()
    const { signUp } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordconfirmRef.current.value){
            return setError('Passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        }catch{
            setError('Faild to crate an accont')
        }
        setLoading(false)
    }

    return (
        <> 
        <Card className='mt-4'> 
        <Card.Body>
        <h2 className='text-center mb-4'>Register</h2>
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
                
                <Form.Group id='password-confirm'>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type='password' ref={passwordconfirmRef} required/>
                </Form.Group>
                <Button 
                disabled={loading}
                className='w-100'
                type='submit'
                >Register</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
        Already have an account? <Link to='/login'>Log In</Link>
    </div>
</>
)
}

