const mongoose=require('mongoose')

const dbURI='mongodb://localhost:27017/TodoListV01'

mongoose.connect(dbURI)

//Extra

const db=mongoose.connection

db.on('error', (err)=>{
    console.log('ERORR IN MongoDB')
})

db.on('connected', (err)=>{
    console.log('MongoDB is CONNECTED...;)')
})