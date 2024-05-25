/* eslint-disable */
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then(() => {
      console.log('Done!');
      res.send('This is the list of our students\n');
    })
    .catch((error) => {
      console.log(error);
      res.send('This is the list of our students\n');
    });
});

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app;
