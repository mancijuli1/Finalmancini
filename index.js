require('dotenv').config();
const express = require("express");
const app = express();
const hbs = require('hbs');
const port= process.env.PORT;


//-----------HANDLEBARS

app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


// ------middleware--- app.use-------

app.use('/assets',express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('./router/router'));
// app.use(require('./router/contacto'));



//----ver rutas en router.js----


app.listen(port, ()=>
{
    console.log(`Usando el puerto http://localhost:${port}`)
});