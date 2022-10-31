const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, "message.txt");

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    if (url === '/home' || url === '/') {

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
            }
            const string = data.toString();
            res.write('<html>');
            res.write('<head><title>My First Page</title></head>');
            res.write(`<body>${string}</body>`);
            res.write('<body><h1>Please fill The Form !</h1><form action = "/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        });
        
        
    }
    if(url === '/message' && req.method === 'POST'){
    
        const body =[];
        req.on('data',(chunk)=> {
    
            //console.log(chunk);
            body.push(chunk);
    
        });
        req.on('end', ()=>{
    
            const parsedBody = Buffer.concat(body).toString(); //text data
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err)=>{
    
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
    
            });
        });
        
        
    
    }
}

//module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some text'
// };

exports.handler = requestHandler;
exports.someText = 'Some text';