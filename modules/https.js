 const { send, read } = require('./internals');
// import { send } from './internals/request.mjs';
// import { read }  from './internals/response.mjs';

function makeRequest (url, data ){
    send(url, data);
    return read();
}

makeRequest('https://www.google.com', "hello");