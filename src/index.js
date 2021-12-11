import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import ErrorMiddleware from './Middleware/Error.js'
import Authorise from './Middleware/Authorise.js'
import UrlRouter from './Router/Url.js'
import ShrRouter from './Router/Shr.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({ origin: process.env.ORIGIN, credentials: true }))

mongoose.connect(
  process.env.MONGO_URL,
  JSON.parse(process.env.MONGO_CONFIG),
  (err) => {
    if (err) console.log('Mongodb Connection failed')
    else console.log('Mongodb Connection succeed!')
  }
)

app.use('/url', Authorise, UrlRouter)
app.use('/', ShrRouter)
app.use(ErrorMiddleware)

app.use((req, res) => {
  res.status(400).send('No route found!')
})

app.listen(process.env.PORT)
