// HTTP request using require function to get the http module
const {get} = require('https');

const req =get('https://www.google.com', (res) =>{
    res.on('data', (chunk) =>{
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data available')
    })
});

// req.end();