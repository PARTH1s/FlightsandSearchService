const express=require('express')

const bodyParser=require('body-parser')

const {PORT}=require('./config/serverConfig'); 
 
const SetUpandStartServer=async()=>{
    // create the express object 
    const app = express(); 

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,async ()=>{
        console.log(`Server Started at ${PORT}`);  
    })
}

SetUpandStartServer()