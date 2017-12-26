const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static(__dirname));
app.get('/productos', (req, res) => res.send(JSON.parse(fs.readFileSync('productos.json'))));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
