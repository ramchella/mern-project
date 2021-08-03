import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

app.use('/students', studentRoutes);

const CONNECTION_URL = "mongodb+srv://ramtest:ramtest@cluster0.emnl8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=> app.listen(PORT, ()=>   
    console.log(`Connection established and running at port: ${PORT}`)
)).catch((err)=>console.log(err.message));

mongoose.set('useFindAndModify', false);
