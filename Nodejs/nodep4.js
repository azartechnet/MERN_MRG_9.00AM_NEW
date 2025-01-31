var f1=require('fs')
f1.rename('f1.txt','sample.txt',function(err){
    if(err) {
        console.log(err);
    }
    else
    {
        console.log("File renamed successfully");
    }
})