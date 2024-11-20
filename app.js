const express = require('express');
const app = express();
require('dotenv').config();
// run npm i dotenv in the terminal

PORT = process.env.PORT || 8000;

//example of request parameters
app.get('/',(req, res)=>{
    const id = req.params.id;
    const username = req.params.username;


    res.send(`User id: ${id}. Username: ${username}`)

});



app.listen(PORT, ()=>{  //app.listen needs a PORT and callback
    console.log(`Connected on port ${PORT}`);
});

