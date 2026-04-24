const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

let usersData = { "admin": { balance: 0 } };

app.get('/balance/:user', (req, res) => {
    const username = req.params.user;
    if (!usersData[username]) usersData[username] = { balance: 0 };
    res.json({ balance: usersData[username].balance });
});

app.post('/mine', (req, res) => {
    const { username, amount } = req.body;
    if (!usersData[username]) usersData[username] = { balance: 0 };
    usersData[username].balance += amount;
    console.log("User " + username + " balance: " + usersData[username].balance);
    res.json({ newBalance: usersData[username].balance });
});

app.listen(3000, () => {
    console.log("--- SERVER DA CHAY TAI PORT 3000 ---");
});