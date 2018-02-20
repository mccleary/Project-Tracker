// to access all js files, http is name of pkg
const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  // res.send('home page');
  res.sendFile('index.html', { root: __dirname });
app.get('/about', function(req, res) {
    // res.send('about page');
    res.sendFile('about.html', { root: __dirname });
  });
app.get('/contact', function(req, res) {
    // res.send('contact page');
    res.sendFile('contact.html', { root: __dirname });
  });
app.get('/projects', function(req, res) {
    // res.send('products page');
    res.sendFile('projects.html', { root: __dirname });
  });
});





// const hostname = '127.0.0.1';
// const port = 4000;

// create webserver
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// tell server to start working
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


app.listen(4000, function() {
  console.log('Server listening on port 4000');
});
