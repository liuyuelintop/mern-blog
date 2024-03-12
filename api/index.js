import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js';  

dotenv.config();

const app =express();

// middleware
app.use(express.json());


mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log(err);
});


//environment variables
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}!`);
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);