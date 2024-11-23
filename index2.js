// file handling in node js

const fileHandling = require('fs');
const { syncBuiltinESMExports } = require('module');


//sync....
// fileHandling.writeFileSync("./test.txt","tho kaise hai aap log")

//asyn...
// fileHandling.writeFile('./text.txt',"hiiiiiiiii",(err)=>{})

// sync....
//    const res= fileHandling.readFileSync("./text.txt",'utf-8')

//    console.log(res);
   
//    async.....

// fileHandling.readFile('./test.txt','utf-8',(err,res)=>{
//     if(err){
//         console.log('error',err);
        
//     }
//     else{
//         console.log(res);
        
//     }
// })

// fileHandling.appendFileSync("./text.txt",`${Date.now()} hey lalit \n`)

// fileHandling.cpSync('./text.txt','./copy.txt')

// fileHandling.unlinkSync("./copy.txt")
console.log(fileHandling.statSync('./text.txt'));
