/* Basic Node.js Web server */
const http =  require('http');

/* If you want to load a file, we use the file system */
const fs = require('fs');

/* This is the loopback address for the local host. */
const hostname = '127.0.0.1';
const port = 3000;

/* Looks for the file 'index.html', and it will show the file on the DOM. */
fs.readFile("index.html", (err, html) => {
    if(err){
      throw err;
    }
      const server = http.createServer((req, res) => {
        res.statusCode =  200;
        /* The content type will parse the html with text/html, if text/plain, it will show the html
        */
        res.setHeader('Content-Type', 'text/html');
        res.write(html);
        res.end();

    });


    server.listen(port,hostname, () => {
      console.log('Now live on '+ port + " " + hostname);
    });

});
