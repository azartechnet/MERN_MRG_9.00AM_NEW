const intervalid=setInterval(()=>{
    console.log("interval")
},2000)

setTimeout(()=>{
    clearInterval(intervalid)
    console.log("Interval cleared")
},4000)
