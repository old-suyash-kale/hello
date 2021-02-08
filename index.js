const express = require('express');
const app = express();
const server = require('http').Server(app);
const { exec } = require('child_process');

const PORT = process.env.PORT || 8080;

app.get('/name', (req, res) => {
  res.json({
    fname: 'Suyash',
    lname: 'Kale'
  });
});

app.use(express.static('client/build'));

server.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT};`);
  exec('npm install --prefix client', err => console.log(err ? 'error in building react application;' : 'react application is up and running;'));
});