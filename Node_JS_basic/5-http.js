/* eslint-disable */
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then(() => {
        console.log('Done!');
        res.end('This is the list of our students\n');
      })
      .catch((error) => {
        console.log(error);
        res.end('This is the list of our students\n');
      });
  } else {
    res.end('Not found\n');
  }
});

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app;
