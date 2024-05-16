#!/usr/bin/node
/* eslint-disable */

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) throw error
  fs.writeFile(filePath, body, 'utf-8', (err) => {
    if (error) throw error
  });
});

