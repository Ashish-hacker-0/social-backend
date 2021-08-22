const express = require('express');

const app = express();

let port = process.env.PORT ||3000 ;

app.listen(port,function(req,res){
    console.log('Server started at ',port);
});