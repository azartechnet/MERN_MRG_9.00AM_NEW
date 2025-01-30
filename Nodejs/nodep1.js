var h1=require('http')
h1.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('<h1>Welcome</h1>')
}).listen(3031)
console.log("Server is Running..")