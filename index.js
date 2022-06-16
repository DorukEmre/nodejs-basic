const http = require('http');
const fs = require('fs')
const url = require('url');

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  console.log('page', page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/about') {
    fs.readFile('about.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/contact-me') {
    fs.readFile('contact-me.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile('404.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });    
  }
});

server.listen(8000);