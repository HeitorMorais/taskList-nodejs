const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const router = require('./routes/taskRoutes')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use('/', router)


connectDB()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))