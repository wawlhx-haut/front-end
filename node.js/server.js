var http = require("http");
http.createServer(function (request, response){
  //发送http头部
  //HTTP状态值:2 00:ok
  //内容类型:test/plant
  response.writeHead(200, {'content-type':'test/plain'});
  //发送响应数据
  response.end('hello world');
}).listen(8888);