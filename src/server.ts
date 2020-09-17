import { Server, createServer, RequestListener, IncomingMessage, ServerResponse }  from 'http';

let reqListener: RequestListener = (request: IncomingMessage, response: ServerResponse) => {
    response.write("Hello Praveen");
    response.end();
}

let server: Server = createServer(reqListener);
server.listen(4000, ()=>{console.log('Server is listening on PORT 4000')});