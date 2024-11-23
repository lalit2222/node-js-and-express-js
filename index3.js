//   how  node js works 

const fs = require("fs")

// //sync...
fs.writeFileSync("./test.txt",'hello world sync..')

// // async...

fs.writeFile("./tezt.txt",'hello world async...',(err,res)=>{

})

//blocking...
console.log("hello 1");

const result = fs.readFileSync("test.txt",'utf-8')
console.log(result);

console.log("hello 2");

// non-blocking...

console.log("hello 1");

 fs.readFile("tezt.txt","utf-8",(err,res)=>{
    console.log(res);
})

console.log("hello 2")


// default workers = 4