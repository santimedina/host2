const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')


app.get('/', function (req, res) {
    res.send('<h1>Hola, estamos en la pagina principal</1>');
  });
app.get('/productos', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/productos.html'));
});
app.get('/productos/:productosid', function (req, res) {
    
    const id = req.params.productosid;
    

    res.sendFile(path.join(__dirname, `views/productos${id}.html`));

  })


app.listen(3000)