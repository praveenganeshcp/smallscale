import { Server, createServer, RequestListener, IncomingMessage, ServerResponse }  from 'http';
import * as assert from 'assert';

export class FWResponse {
    private response: ServerResponse;

    sendJSON(data: Object) {
        assert.strictEqual('object', typeof data, new Error(`Exptected Object but got ${typeof data}`))
        this.response.setHeader("Content-Type", "application/json")
        this.response.write(JSON.stringify(data));
        this.response.end();
    }

    constructor(res: ServerResponse) {
        this.response = res;
    }
}


let reqListener: RequestListener = (request: IncomingMessage, response: ServerResponse) => {
    let fwResponse: FWResponse = new FWResponse(response);
    fwResponse.sendJSON({message:"hello Praveen"});
}

let server: Server = createServer(reqListener);
server.listen(4000, ()=>{console.log('Server is listening on PORT 4000')});