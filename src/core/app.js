import express from 'express'
import router from '../routes'
import bodyParser from 'body-parser'
import cors from 'cors'
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/',router)

export default app
