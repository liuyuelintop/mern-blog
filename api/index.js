import express from 'express';

const app =express();

//environment variables
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}!`);
})