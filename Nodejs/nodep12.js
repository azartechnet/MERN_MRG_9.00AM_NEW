var fs=require('fs')
var data="java"
fs.appendFile("sample.txt",data,function(err){
    if(err) {
        console.log(err);
    }
    else
    {
        console.log("data is appended");
    }
})