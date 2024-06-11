const express = require('express')

const app = express();


app.get('/', (req, res) =>{
 return res.send("server is running");
})

app.listen(3000 , (req, res) =>{
    console.log("listening on port 3000");
});
