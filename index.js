const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json');
const PORT = 8000;

app.get('/users', (req, res) => {  //for mobile users

    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

app.get('/api/users', (req, res) => { // for browser applications
    return res.json(users);
});
app.get('/api/users/:id', (req, res) => { 
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    res.send(user);
});

app.listen(PORT, () => console.log("Server started at port 8000"));