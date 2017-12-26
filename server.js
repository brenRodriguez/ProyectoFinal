const express = require('express');
const app = express();
const data = require('./productos.json');

app.use(express.static(__dirname));
app.get('/productos', (req, res) => res.send(data));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
