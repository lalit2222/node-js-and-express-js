const http = require("http")
const fs = require("fs")
const myServer = http.createServer((res,resp)=>{
    // const log = `${Date.now()} new req res \n`
      const log = `${Date.now()}: ${res.url} new req res \n`
    fs.appendFile('log.txt',log ,(err,data)=>{
        switch(res.url){
            case '/':resp.end("homepage");
            break
            case '/about':resp.end("i am lalit meena")
            break
          
            default :resp.end("404 not found")
        }

        // resp.end("hello kaise hai aap ")
    })
    
});
myServer.listen(8000,()=>console.log('server started')
)
