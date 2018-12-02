const express = require('express');
const path = require('path');
const http = require('http');
const port = process.env.PORT || 3000 || 8080;

const app = express();

app.use(express.static('arquivos-css'));
app.use(express.static('arquivos-js'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})


http.createServer(app)
.listen(port, () => console.log(`Servidor rodando na porta ${port}`));