const http = require("http");

const server = http.createServer((req, resp) => {
    if(req.url === "/applicants" && req.method === "POST"){
        let body = [];
        req.on('data', (chunk : Buffer) => {
            resp.write(`<p> Received chunk of bytes with length ${chunk.length} </p>`);
            
            let byteStartIndex = 0;
            for(let entry of chunk.entries()){
                let numBytes = entry[1];
                resp.write(`<p> Processing chunk of ${numBytes} bytes </p>`);
                resp.write(`<p> Parsed chunk ${chunk.toString("utf-8", byteStartIndex, byteStartIndex+numBytes)} </p>`);

                byteStartIndex += numBytes;
            }
            for(let entry of chunk.values()){
                resp.write(new Number(entry).toString());
            }
            resp.write("\n")
            for(let entry of chunk.values()){
                resp.write(String.fromCharCode(entry));
            }
        });
        resp.setHeader("Content-Type", "text/html");
    }
})
.listen(8000);