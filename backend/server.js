const express = require('express');
const path = require('path');
const sqlite = require('sqlite');
const app = express();
const porta = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});

app.listen(porta, () => {
    console.log(`servidor rodando em "localhost:${porta}"!`);
});
