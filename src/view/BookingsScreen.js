import React, {  useState, useEffect} from 'react';
import {Form, Button, Card, Container, Alert} from 'react-bootstrap'

import 'firebase/firestore'
import { db } from '../data/Firebase'

import {Link} from 'react-router-dom'

export const BookingsScreen = () => {


    return (
    <Container 
    
    className='d-flex aling-items-center justify-content-center'
    style={{minHeight: '100vh'}}
    >
        <div className='w-100' style={{maxWidth:'400px'}}>
            <BookingForm/>
        </div>
    </Container>
    );
};

const BookingForm = () => { 

    
    const [bookings, setBookings] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [time, setTime] = useState('');
    const [place, setPlase] = useState('');
    const [email, setEmail] = useState('');

    

    function addData () {
    db.collection("cities").doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    
    }


    return (
        <> 
        <Card>
        <Card.Body>
        <h2 className='text-center mb-4'>Bookings</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
            <Form>
                <Form.Group id='text'>
                    <Form.Label>Time</Form.Label>
                    <Form.Control type='text'
                        placeholder='Put in the time'
                    />
                </Form.Group>
                <Button 
                onClick={addData()}
                disabled={loading}
                className='w-100'
                type='submit'
                >Add booking</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
        <Link to='/'>Cancel</Link>
    </div>
</>
)
}
