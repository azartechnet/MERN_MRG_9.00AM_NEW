var fs=require('fs')
//Synchrous read
var data=fs.readFileSync('sample.txt','utf8');
console.log(data.toString())

//Asynchrous read
fs.readFile('sample.txt','utf8',function(err,data){
    if(err)
        console.log(err)
    else
    console.log(data)
})