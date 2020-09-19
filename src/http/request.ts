import { IncomingMessage } from "http";

interface RequestBody {
    fields: any,
    files: any
}

export class HttpRequest {
    private request: IncomingMessage;
    private _url: string;
    private _method: string;
    private _body: RequestBody;

    constructor(request: IncomingMessage, body: RequestBody) {
        this.request = request;
        this._url = request.url;
        this._method = request.method;
        this._body = body;
    }

    get body() {
        return this._body;
    }

    get url() {
        return this._url;
    }

    get method() {
        return this._method;
    }
}