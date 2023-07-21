const express = require("express");
const cluster = require("cluster");
const os = require("os");
const pm2 = require("pm2");
const app = express();

function delay(duratuion){
    const startTime = Date.now();
    while(Date.now() - startTime < duration){
        //Event loop is blocked...
    }
}

app.get('/', (req, res) =>{
    res.send(`Performance example: ${process.pid}`);
});

app.get("/timer", (req, res) =>{
    delay(9000);
    res.send(`Ding ding ding! ${process.pid}`);
});

console.log("Worker process started");
app.listen(3000);

