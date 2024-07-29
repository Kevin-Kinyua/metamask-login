// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = {}; // Replace with your database logic

app.post('/login', (req, res) => {
  const { address } = req.body;
  if (!users[address]) {
    // Register the user
    users[address] = { address };
    res.status(201).send({ message: 'User registered', user: users[address] });
  } else {
    // Login the user
    res.status(200).send({ message: 'User logged in', user: users[address] });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
