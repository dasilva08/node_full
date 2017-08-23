const express = require("express");

const app = express();

app.get('/', function(req, res) {
    res.send('Página principal');
});

app.get('/painel', function(req, res) {
    res.send('Painel');
})

app.listen(3000, function() {
    console.log('rodando na porta 3000');
})
