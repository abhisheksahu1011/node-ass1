const http = require("http")

http.createServer((req,res)=>{

    res.write("This is first HTTP server assignment</br></br>")
    res.write(JSON.stringify({Name:"Abhishek"}));
        req.end();
})

server.listen(4000);