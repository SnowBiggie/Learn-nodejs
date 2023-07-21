const path = require('path');

function getMessages  (req, res){
    // res.send('Heeellooo message');
    res.sendfile(path.join(__dirname, '..','public','images', 'the_sky.jpg'))
};

function postMessage  (req, res){
    console.log('Updating messages!')
}

module.exports = {
    getMessages,
    postMessage
};