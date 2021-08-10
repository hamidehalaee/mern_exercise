const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { config } = require('./config/config')
const users = require('./router/user.router')
const exercises = require('./router/exercise.router')
const app = express()


mongoose.connect(config.DATABASE ,{useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true})
const connection = mongoose.connection
connection.once('open',() => console.log('mongodb://127.0.0.1:27017/MernFreecodecapm Connected!'))
app.use(cors())
app.use(express.json())
app.use('/users', users)
app.use('/exercises', exercises)

app.listen(config.PORT,()=>{
    console.log(`PORT ${config.PORT} IS ON!` )
})
