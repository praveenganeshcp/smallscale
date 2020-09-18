import { ServerResponse } from "http";

import * as assert from "assert";

export class HttpResponse {
    private response: ServerResponse;

    sendJSON(data: Object) {
        assert.strictEqual('object', typeof data, new Error(`Exptected Object but got ${typeof data}`))
        this.response.setHeader("Content-Type", "application/json")
        this.response.write(JSON.stringify(data));
        this.response.end();
    }

    constructor(response: ServerResponse) {
        this.response = response;
    }
}