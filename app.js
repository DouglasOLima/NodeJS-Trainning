var app = require('./config/server');

var rotaIndex = require('./app/routes/home')(app);

var rotaNode = require('./app/routes/node')(app);

app.listen(3128, function()
{
    console.log('Executando na porta 3128');
});