const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Bienvenido a mi interesante aplicacion");
});

app.listen(3000, function () {
    console.log("app estuchando du puerto 3000");
});