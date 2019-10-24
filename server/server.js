const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
let app = express();
const port = process.env.PORT || 7000;



app.use(express.static(publicPath));

app.listen(port, ()=>{
    console.log(`server is up on port ${port}`);
});