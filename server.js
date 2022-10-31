const http = require('http');

const server = http.createServer((req, res) => {

    console.log('reached server');
    process.exit();
});

server.listen(3000);