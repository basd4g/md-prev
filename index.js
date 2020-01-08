const http = require("http");
const fs = require("fs");
const markdown = require("markdown");

//console.log("Running md-prev \n $ open http://localhost:3000");
http.createServer( (req,res) => {

  fs.readFile(req.url.slice(1),"utf8",(err,data) => {
    if(err){
      res.writeHead(404,{"Content-Type":"text/plain"});
      res.end("The file is not found.");
      return;
    }
    const mdText = data;
    const htmlText = markdown.markdown.toHTML(mdText);

    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.end(htmlText);
  });
}).listen(3000,"localhost");
