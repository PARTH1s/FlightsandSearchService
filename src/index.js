const express=require('express')

const {PORT}=require('./conifg/serverConfig')

const SetUpandStartServer=async()=>{
    // create the express object 
    const app = express(); 
    
    app.listen(PORT,()=>{
        console.log(`Server Started at ${PORT}`);
    })
}

SetUpandStartServer()