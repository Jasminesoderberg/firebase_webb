import React, {  useState, useEffect} from 'react';
import {Form, Button, Card, Container, Alert} from 'react-bootstrap'

import { db } from '../data/Firebase'
import {v4 as uuid4} from 'uuid'

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
    const [hall, setHall] = useState('');

    const database = db.collection('location')

    function getBookingData() {
        setLoading(true)
        database.onSnapshot((quarySnapshot) => {
            const items = []
            quarySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setBookings(items)
            setLoading(false)
        })
    }

    useEffect(() => {
        getBookingData()
    }, [])

    function addData (newBooking) {
        database
        .doc(newBooking.id)
        .set(newBooking)
        .catch((err) => {
            console.error(err)
        })
    }


    return (
        <> 
        <Card>
        <Card.Body>
        <h2 className='text-center mb-4'>Bookings</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
            <Form>
            <Form.Group id='text'>
                    <Form.Label>Hall</Form.Label>
                    <Form.Control type='text'
                        placeholder='Put in the hall'
                    />
                </Form.Group>
                <Form.Group id='text'>
                    <Form.Label>Time</Form.Label>
                    <Form.Control type='text'
                        placeholder='Put in the time'
                    />
                </Form.Group>
                <Button 
                
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
    {bookings.map((bookings)=> (
    <Card className='w-100 text-center mt-2'>
    <Card.Body>
        <div  key={bookings.id}>
            <h4>{bookings.hall}</h4>
            <p>{bookings.time}</p>
        </div>
    </Card.Body>   
    </Card> ))}
</>
)
}
