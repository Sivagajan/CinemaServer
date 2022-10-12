import './config.js'
import express from 'express'
import cors from 'cors'
import { getAllSeats, updateSeatState } from './controller/seatController.js'
import { sendMail } from './controller/emailController.js'


const app = express()

const PORT = process.env.PORT || 9292

app.use(cors())

app.use(express.json())

app.get('/', getAllSeats)

app.post('/',updateSeatState)

app.post('/api/mail', sendMail)


app.listen(PORT, ()=> console.log('Server runs on PORT: ', PORT))