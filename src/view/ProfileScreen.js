import React, { useRef, useState} from 'react';
import {Form, Button, Card, Container, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';

import {Link, useHistory} from 'react-router-dom'

export const ProfileScreen = () => {

    return (
    <Container 
    className='d-flex aling-items-center justify-content-center'
    style={{minHeight: '100vh'}}
    >
        <div className='w-100' style={{maxWidth:'400px'}}>
            <ProfileForm/>
        </div>
    </Container>
    );
};

const ProfileForm = () => { 
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()



        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }else{
            try{
                setError('')
                setLoading(true)
                updatePassword(passwordRef.current.value)
                
            }
            catch{
                setError('Faild')
            }
            setLoading(false)
            history.push('/')
        }
        
    }
    
    return (
        <> 
        <Card>
        <Card.Body>
        <h2 className='text-center mb-4'>Profile</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} required
                        defaultValue={currentUser.email}
                    />
                </Form.Group>
                <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref={passwordRef}
                        placeholder='Leave blank to keep the same'
                    />
                </Form.Group>
                <Form.Group id='password'>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type='password' ref={passwordConfirmRef}
                        placeholder='Leave blank to keep the same'
                    />
                </Form.Group>
                <Button 
                disabled={loading}
                className='w-100'
                type='submit'
                >Update</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
        <Link to='/'>Cancel</Link>
    </div>
</>
)
}
