const express = require('express');

const app = express();

let port = process.env.PORT || 8001 ;

app.listen(port,function(req,res){
    console.log('Server started at ',port);
});