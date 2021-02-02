import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
        apiKey: 'AIzaSyDv_xy4m5vyeW-_WlEocvBzaXlcDLWYbD4',
        authDomain: 'fir-webb-5c91e.firebaseapp.com',
        projectId: 'fir-webb-5c91e',
        storageBucket: 'fir-webb-5c91e.appspot.com',
        messagingSenderId: '606573462974',
        appId: '1:606573462974:web:afa19e8e77aa04acc065ef',
})

export const auth = app.auth()

export default app