const http = require('http');

const server = http.createServer((req, res) => {

    console.log(req.url, req.method, req.headers);
    //process.exit();
    const url = req.url;
    if (url === '/home' || url === '/') {

        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my HOME PAGE!</h1></body>');
        res.write('</html>');
        res.end();

    } else if (url === '/about') {

        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to About Us page!</h1></body>');
        res.write('</html>');
        res.end();

    }
    else if(url==='/node'){
        
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to NODE page!</h1></body>');
        res.write('</html>');
        res.end();
    }
    //res.setHeader('Content-Type', 'text/html');
    

});

server.listen(3000);