const express = require('express');
const app = express();

app.use(express.json());

let users = [];
let nextId = 1;

app.post('/user', (req, res) => {
  const { name, age } = req.body;

  const newUser = { id: nextId++, name, age };
  users.push(newUser);

  res.status(201).json(newUser);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
