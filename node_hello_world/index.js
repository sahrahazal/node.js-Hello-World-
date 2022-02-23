var http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.write('Hello World!');
    res.end();
});

server.listen(3000, () => {
    console.log('Uygulama Çalıştırıldı:)');
});