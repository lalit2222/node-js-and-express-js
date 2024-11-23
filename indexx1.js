function add(a,b){
    return a+b
}
function sub(a,b){
  return a-b
}
// module.exports = sub  //this is wrong way 
module.exports = {
    add,
    sub
}
