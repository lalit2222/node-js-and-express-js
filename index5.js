// what is url

const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((res, resp) => {
  if (res.url === "/favicon.ico") return resp.end();
  // const log = `${Date.now()} new req res \n`
  const log = `${Date.now()}: ${res.url} new req res \n`;
  const myUrl = url.parse(res.url, true);
  console.log(myUrl);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        resp.end("homepage");
        break;
      case "/about":
        const username = myUrl.query.myname
        resp.end(`hi ${username}`);
        break;
       case '/search':
        const search = myUrl.query.search_query;
        resp.end('here are your results for'+search)
      default:
        resp.end("404 not found");
    }

    // resp.end("hello kaise hai aap ")
  });
});
myServer.listen(8000, () => console.log("server started"));
