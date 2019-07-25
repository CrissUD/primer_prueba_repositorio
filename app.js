//function hello(text) {
//  console.log(text);
//}

//hello("Hola Mundo");


//Server

const http= require ('http')

http.createServer(function(req,res){
  res.end('Hola Mundo')
}).listen(3000, () => console.log('server on port 3000'))