//const fs = require('fs');
const http = require('http');

const server = http.createServer((req, resp) =>{
 //console.log(req);
 if (req.url === '/'){
    resp.end ('welcome home');
    return;
 }

if( req.url === '/about')
{
    resp.end('This is about...');
    return;
}
 //resp.write('Welcome to our home page');
 resp.end(` 
 <h1>Oops!</h1>
 <a href="/"> Go Home</a>`) //end the request
})
 
server.listen(5000);