const h = require('http')
//console.log(h)
// server create 
h.createServer((req,res)=>{
    res.write('welcome node js')
    res.end()
}).listen(3000,()=>console.log('server is running localhost:3000'))
localhost:3000
//http://localhost:3000/