const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const routes = require('./routes/router.js')


app.set("view engine", 'ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/', routes)

app.listen(2322, () =>{
    console.log('Server is running on http://localhost:2322')
})