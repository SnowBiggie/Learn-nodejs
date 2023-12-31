const PORT = process.env.PORT || 8000;
const http = require('http');
const mongoose = require("mongoose");
const app = require("./app");
const {loadPlanetsData} = require("./models/planets.models");
const MANGO_URL = 'mongodb+srv://NASA-API:LPqlKtugYltiKDvL@nasacluster.7ljlzjd.mongodb.net/?retryWrites=true&w=majority';
const server = http.createServer(app);

mongoose.connection.once('open', ()=>{
    console.log("MongoDB connection ready!")
});

mongoose.connection.on('error', (err)=>{
    console.error(err);
});

async function startServer(){
    await mongoose.connect(MANGO_URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
    await loadPlanetsData();
server.listen(PORT, ()=>{
    console.log(`Listerning on port ${PORT}...`);
})
}

startServer();


