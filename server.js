//Chamada recurso HTTP
const http = require('http');

//porta de uso
const port = 3000;

//cria servidor
const server = http.createServer((req, res) => {

  //rotas da aplicação

  //### principal
  //### moda
  //### esporte

  //salva requisição digitada via url (navegador)
  const categorias = req.url;

  //faz verificação das rotas e cria
  if( categorias == '/moda' ) {
    res.end(`
    <html>
    <body>
      <p>Categoria moda</p>
    </body>
    </html>`);
  }else if( categorias == '/esporte' ) {
    res.end(`
    <html>
    <body>
      <p>Categoria Esporte</p>
    </body>
    </html>`);
  }else {
    res.end(`
    <html>
    <body>
      <p>Categoria Principal</p>
    </body>
    </html>`);
  }
});

server.listen(port);
