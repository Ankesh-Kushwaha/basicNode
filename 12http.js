const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
     res.end('welcome to our home page. Hi! there i am Ankesh Kushwaha')
   }
  if (req.url === '/about') {
    res.end('welcome to the our about page');
  }
  res.end(
    `<h1> OOP! Page Not found</h1>
     <p> we can't seem to find the page you are looking for </p>
     <a href="/">back home</a>
    `
  );
})

server.listen(5000);