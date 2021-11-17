const http = require('http');
const fs = require('fs');

http.createServer((request, response)=>{

  const file = request.url == '/'? "./www/index.html" : `./www${request.url}`;
  fs.readFile(file, (err, data)=>{
    if(err){
      response.writeHead(404, {"Content-Type":"text/plain"});
      response.write("Not Found");
      response.end();
      } else {
      response.writeHead(200, {"Content-Type":"text/html"});
      response.write(data);
      response.end();
    }
  })
});

/*const http = require('http');
const fs = require('fs');

http.createServer((request, response)=>{

  const file = "./www/index.html";
  fs.readFile(file, (err, data)=>{
    if(err){
      response.writeHead(500, {"Content-Type":"text/plain"});
      response.write("Internal Server Error");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type":"text/html"});
      response.write(data);
      response.end();
    }
  })

  
}).listen(80);*/