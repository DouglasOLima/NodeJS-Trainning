var express = require('express');
app =  express();
app.set('view engine', 'ejs');

app.get('/', function(req, res)
{
    res.render("home/index");
});

app.get('/node', function(req, res)
{
    res.render("node");
});

app.listen(3128, function()
{
    console.log('Executando na porta 3128');
});