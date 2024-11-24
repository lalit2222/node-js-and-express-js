//express js tutorial

const express = require("express");
const app = express();
app.get("/", (res, resp) => {
  return resp.send("tho kaise hai aap");
});
app.get("/about", (res, resp) => {
  return resp.send(`hello , ${res.query.name} and your age is ${res.query.age}`);
});

app.listen(8000,()=>console.log("server started")
)