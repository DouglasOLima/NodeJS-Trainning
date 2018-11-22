var http = require('http');

var server = http.createServer( function(req, res)
{
	res.end('<html><body>Olá Mundo</body></html>');
});

server.listen(3128);

console.log('Executando na porta 3128');

