const  f = require('fs')
//console.log(f)

f.readFile(__dirname+'/a.txt','utf-8',(err,data)=>{
     console.log(data)
})
console.log('hello friends') 