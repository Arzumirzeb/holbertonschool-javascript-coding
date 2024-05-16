#!/usr/bin/node
/* eslint-disable */

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const films = JSON.parse(body).results;
  const moviesWithWedgeAntilles = films.filter((film) => film.characters.includes(`https://swapi-api.hbtn.io/api/people/18/`));
  console.log(moviesWithWedgeAntilles.length);
});

